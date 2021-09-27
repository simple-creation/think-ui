import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'


const Container = styled.div`
  margin-bottom: 8px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background-color: #fafafa;
  &.xTagHasColor {
    border-color: transparent;
    color: #fff;
    .closeBtn {
      color: rgba(255, 255, 255, .6)
    }
  }
  .closeBtn {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
  }
`



/**
 * 标签组件
 * @param {closable} boolean 是否可关闭
 * @param {onClose} func 标签关闭时的回调
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */
export default function Tag(props) {
  let { children, closable, onClose, color } = props
  let tag = React.createRef()
  let handleClose = () => {
    onClose && onClose()
    tag.current.style.display = 'none'
  }
  return <Container 
    className={classnames(color ? 'xTagHasColor' : '')} 
    style={{ backgroundColor: color }}
    ref={tag}>
    { children } 
    { closable && <span className="closeBtn" onClick={handleClose}>x</span> }
  </Container>
}