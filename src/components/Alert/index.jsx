import { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styled from 'styled-components'
const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 5px 12px;
  margin-bottom: 16px;
  border-radius: 3px;
  &.success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
  }
  &.info {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }
  &.error {
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
  }
  &.warning {
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
  }

  .alertMes {
    margin-bottom:5px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5em;
  }
  .alertDesc {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5em;
    word-break: break-all;
  }
  .closeBtn {
    position: absolute;
    right: 8px;
    top: 5px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`

/**
 * 警告提示组件
 * @param {style} object 更改Alert样式
 * @param {closable} bool 是否显示关闭按钮, 默认不显示
 * @param {closeText} string|reactNode 自定义关闭按钮
 * @param {message} string 警告提示内容
 * @param {description} string 警告提示的辅助性文字
 * @param {type} string 警告的类型
 * @param {onClose} func 关闭时触发的事件
 */
function Alert(props) {
  const {
    style,
    closable,
    closeText,
    message,
    description,
    type,
    onClose
  } = props
  let [visible, setVisible] = useState(true)

  const handleColse = () => {
    setVisible(false)
    onClose && onClose()
  }
  return visible ? 
    <Container 
      className={classnames( type || 'warning')}
      style={{
        opacity: visible ? '1' : '0',
        ...style
      }}
    >
      <div className='alertMes'>{ message }</div>
      <div className='alertDesc'>{ description }</div>
      {
        !!closable && <span className='closeBtn' onClick={handleColse}>{ closeText ? closeText : 'x' }</span>
      }
    </Container> : null
}

Alert.propTypes = {
  style: PropTypes.object,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
}

export default Alert

