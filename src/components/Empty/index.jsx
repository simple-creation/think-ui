import Icon from '../Icon'
import classnames from 'classnames'
import styled from 'styled-components'


const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  font-size: 100px;
  color: #999;
  .emptyInner {
    text-align: center;
  }
  p {
    font-size: 16px;
    text-align: center;
  }
`


/**
 * 空状态组件
 * @param {className} string 自定义类名
 * @param {src} string 空状态的图片地址
 * @param {text} string 空状态文本
 */
export default function Empty(props) {
  let { text, className, src } = props
  
  return <Container className={classnames(className)}>
    <div className="emptyInner">
      {
        src ? <img src={src} alt="空（empty）"/> :
          <Icon type="FaDropbox" />
      }
    </div>
    <p>{ text ? text : '空空如也'}</p>
  </Container>
}