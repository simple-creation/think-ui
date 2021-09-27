import classnames from 'classnames'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: 6px 1em;
  line-height: 1.4999em;
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  font-family: inherit;
  background-color: #000;
  user-select:none;   // 禁止用户选中
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;


  &.primary {
    background-color: #09f;
  }
  &.warning {
    background-color: #F90;
  }
  &.info {
    background-color: #C03;
  }
  &.pure {
    border: 1px solid #ccc;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    &::after {
      background-image: radial-gradient(circle, #ccc 10%, transparent 11%);
    }
  }

  // 形状
  &.circle {
    border-radius: 1.5em;
  }

  // 适应其父元素
  &.block {
    // width: 100%;
    display: block;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 11%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(12, 12);
    opacity: 0;
    transition: transform .6s, opacity .6s;
  }
  &:active::after {
    transform: scale(0, 0);
    opacity: .3;
    //设置初始状态
    transition: 0s;
  }
`
/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | warning | info | default | pure
 * @param {shape} string 按钮形状 circle | radius(默认)
 */
export default function Button(props) {
  let { children, onClick, className, type, shape, block } = props
  return <Container className={classnames(type, shape, block ? 'block' : '', className)} onClick={onClick}>
    { children }
  </Container>
}