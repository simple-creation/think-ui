import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  top: 0;
  height: 100vh;
  overflow: hidden;
  .xDrawerMask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
  }
  .xDrawerContent {
    position: absolute;
    top: 0;
    padding: 16px;
    height: 100%;
    transition: all .3s;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0, .2);
    .xCloseBtn {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #ccc;
      cursor: pointer;
    }
}
`

/**
 * Drawer 抽屉组件
 * @param {visible} bool 抽屉是否可见
 * @param {closable} bool 是否显示右上角的关闭按钮
 * @param {destroyOnClose} bool 关闭时销毁里面的子元素
 * @param {getContainer} HTMLElement 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom
 * @param {maskClosable} bool 点击蒙层是否允许关闭抽屉
 * @param {mask} bool 是否展示遮罩
 * @param {drawerStyle} object 用来设置抽屉弹出层样式
 * @param {width} number|string 弹出层宽度
 * @param {zIndex} number 弹出层层级
 * @param {placement} string 抽屉方向
 * @param {onClose} string 点击关闭时的回调
 */
function Drawer(props) {
  const { 
    closable = true, 
    destroyOnClose, 
    getContainer = document.body, 
    maskClosable = true, 
    mask = true, 
    drawerStyle, 
    width = '300px',
    zIndex = 10,
    placement = 'right', 
    onClose,
    children
  } = props

  let [visible, setVisible] = useState(props.visible)
  let [isDesChild, setIsDesChild] = useState(false)

  const handleClose = () => {
    onClose && onClose()
    setVisible((prev) => {
      if(getContainer !== false && prev) {
        getContainer.style.overflow = 'auto'
      }
      return false
    })
    if(destroyOnClose) {
      setIsDesChild(true)
    }
  }

  useEffect(() => {
    setVisible(() => {
      if(getContainer !== false && props.visible) {
        getContainer.style.overflow = 'hidden'
      }
      return props.visible
    })
    setIsDesChild(false)
  }, [props.visible, getContainer])

  const childDom = (
    <Container 
      style={{
        position: getContainer === false ? 'absolute' : 'fixed',
        width: visible ? '100%' : '0',
        zIndex
      }}
    >
      { !!mask && <div className="xDrawerMask" onClick={maskClosable ? handleClose : null}></div> }
      <div 
        className="xDrawerContent" 
        style={{
          width,
          [placement]: visible ? 0 : '-100%',
          ...drawerStyle
        }}>
        {
          isDesChild ? null : children
        }
        {
          !!closable && <span className="xCloseBtn" onClick={handleClose}>X</span>
        }
      </div>
    </Container>
  )

  return getContainer === false ? childDom : ReactDOM.createPortal(childDom, getContainer)
}

Drawer.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool, 
  destroyOnClose: PropTypes.bool, 
  getContainer: PropTypes.element, 
  maskClosable: PropTypes.bool, 
  mask: PropTypes.bool, 
  drawerStyle: PropTypes.object, 
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  zIndex: PropTypes.number,
  placement: PropTypes.string, 
  onClose: PropTypes.func
}

export default Drawer