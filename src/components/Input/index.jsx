import React, { useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
    position: relative;
    display: inline-block;
    .xInputInner {
        box-sizing: border-box;
        padding: 4px 6px;
        width: 320px;
        color: rgba(0,0,0, .65);
        font-size: 14px;
        border: 1px solid rgb(217, 217, 217);
        display: inline-block;
        line-height: 1.5;
        outline: none;
        transition: box-shadow .3s, border .3s;
        &::placeholder {
            color: rgba(0,0,0, .2);
        }
        &:hover {
            border-color: rgb(64, 169, 255);
        }
        &:focus {
            border-color: rgb(64, 169, 255);
            box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2)
        }
    }
    .xIconInput {
        position: absolute;
        right: 10px;
        top: 50%;
        color: rgba(0,0,0, .45);
        transform: translateY(-50%);
        cursor: pointer;
        &:hover {
            color: rgba(0,0,0, .65);
        }
    }
`

/**
 * Input input组件
 * @param {icon} ReactNode 是否带icon
 * @param {defaultValue} string 输入框默认内容
 * @param {id} string 输入框id
 * @param {className} string 输入框的类名
 * @param {style} object 输入框的样式
 * @param {placeholder} string 输入框的占位符
 * @param {type} string 输入框类型
 * @param {autoFocus} bool 输入框是否自动聚焦
 * @param {value} string 输入框的值
 * @param {onChange} func 输入框变化时的回调
 * @param {onIconClick} func 当icon按钮点击时的回调
 */
function Input(props) {
  const {
    icon,
    defaultValue,
    id,
    className,
    type = 'text',
    value,
    onChange,
    style,
    autoFocus,
    placeholder = '请输入内容',
    onIconClick
  } = props

  let textInput = React.createRef()

  const handleChange = (e) => {
    onChange && onChange(e.target.value)
  }

  const handleIconClick = () => {
    onIconClick && onIconClick(textInput.current.value)
  }

  useEffect(() => {
    autoFocus && textInput.current.focus()
  }, [])
  return <Container>
    <input
      className={classnames('xInputInner', className)}
      type={type} 
      id={id}
      ref={textInput}
      style={style}
      placeholder={placeholder} 
      value={value || typeof value === 'undefined' ? defaultValue : ''} 
      onChange={handleChange}
    />
    {
      !!icon && <span className="xIconInput" onClick={handleIconClick}>{ icon }</span>
    }
  </Container>
}

Input.propTypes = {
  icon: PropTypes.element,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func
}

export default Input

