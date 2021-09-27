import { useState } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'


const Container = styled.div`
display: inline-block;
  .xSwitchInner {
    width: 48px;
    height: 24px;
    border-radius: 30px;
    overflow: hidden;
    vertical-align: middle;
    position: relative;
    display: inline-block;
    font-size: 12px;
    color: #fff;
    background:#ccc;
    box-shadow: 0 0 1px #36a6d4;
    &.large {
      width: 60px;
      height: 30px;
      .xSwitchAnimatingNode {
        &::before {
          line-height: 30px;
          text-indent: 5px;
        }
      }
      .offText {
        line-height: 30px;
        margin-right: 6px;
      }
    }
    &.small {
      width: 42px;
      height: 21px;
      .xSwitchAnimatingNode {
        &::before {
          line-height: 21px;
          text-indent: 3px;
        }
      }
      .offText {
        line-height: 21px;
        margin-right: 4px;
      }
    }
    & > input {
      visibility: hidden;
    }
    & > input:checked +span{
      transform: translateX(100%);
    }
  }
  .xSwitchAnimatingNode {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 50%;
    height: 100%;
    transition: all linear 0.2s;
    &::before {
      position: absolute;
      top: 0;
      left: -100%;
      content: attr(data-onText);
      width: 200%;
      height: 100%;
      line-height: 2;
      text-indent: 5px;
      border-radius: 30px;
      background:inherit;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background:#fff;
    }
  }
  .offText {
    line-height: 2;
    float: right;
    margin-right: 5px;
  }
`

/**
 * switch
 * @param {onClick} func 对外暴露的点击事件
 * @param {checked} bool 是否被选中
 * @param {disabled} bool 是否被禁用
 * @param {onText} string 开启状态的文本
 * @param {offText} string 关闭状态的文本
 * @param {onChange} func 状态切换时的文本
 * @param {size} string 组件的尺寸
 */
export default function Switch(props) {
  let { color = '#09f', className, checked, disabled, onText, offText, onChange, size } = props
  let handleChange = (e) => {
    e.persist()
    onChange && onChange(e.target.checked)
  }
  return <Container className={classnames(className)}>
    <label className={classnames('xSwitchInner', size)} style={{pointerEvents: disabled ? 'none' : 'default', cursor: disabled ? 'not-allowed' : 'pointer'}}>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span 
        className="xSwitchAnimatingNode"
        style={{ backgroundColor: color }} data-onText={onText}>
      </span>
      <span className="offText">{ offText }</span>
    </label>
  </Container>
}