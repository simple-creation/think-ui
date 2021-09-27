import styled from 'styled-components'


const Container = styled.div`
@-webkit-keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
              transform: scale(0.4); }
  
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
              transform: scale(1); } }
  
  @keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
              transform: scale(0.4); }
  
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
              transform: scale(1); } }


    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .ball-spin-fade-loader {
        position: absolute;
        left: 50%;
        top: 50%; 
        margin-top: -36px;
        transform: translate(-50%, -50%);
        &.line > div {
            left: 0 !important;
        }
    }
    .ball-spin-fade-loader > div:nth-child(1) {
        top: 25px;
        left: 0;
        -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
                animation: ball-spin-fade-loader 1s 0s infinite linear; 
    }
    .ball-spin-fade-loader > div:nth-child(2) {
        top: 17.04545px;
        left: 17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
                animation: ball-spin-fade-loader 1s 0.12s infinite linear; 
    }
    .ball-spin-fade-loader > div:nth-child(3) {
        top: 0;
        left: 25px;
        -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
                animation: ball-spin-fade-loader 1s 0.24s infinite linear; 
    }
    .ball-spin-fade-loader > div:nth-child(4) {
        top: -17.04545px;
        left: 17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
                animation: ball-spin-fade-loader 1s 0.36s infinite linear; 
    }
    .ball-spin-fade-loader > div:nth-child(5) {
        top: -25px;
        left: 0;
        -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
                animation: ball-spin-fade-loader 1s 0.48s infinite linear; 
    }
    .ball-spin-fade-loader > div:nth-child(6) {
        top: -17.04545px;
        left: -17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
                animation: ball-spin-fade-loader 1s 0.6s infinite linear; 
    }
    .ball-spin-fade-loader > div:nth-child(7) {
        top: 0;
        left: -25px;
        -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
                animation: ball-spin-fade-loader 1s 0.72s infinite linear;
    }
    .ball-spin-fade-loader > div:nth-child(8) {
        top: 17.04545px;
        left: -17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
                animation: ball-spin-fade-loader 1s 0.84s infinite linear; 
    }
    .ball-spin-fade-loader > div {
        background-color: inherit;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
        position: absolute; 
    }
    .x-loading-text {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: 20px;
        margin-left: -28px;
        transform: translateY(-50%, -50%);
    }
  

`

/**
 * Spin组件
 * @param {isLoading} bool 加载中状态，默认为true
 * @param {loadingText} string 加载状态的文本
 * @param {hiddenText} bool 是否隐藏加载状态的文本
 * @param {type} string spin的类型，目前有ball和line两种
 * @param {bgColor} string 加载动画颜色
 */
export default function Spin(props) {
  const spinType = {
    line: 'line'
  }
  const { 
    type,
    isLoading = true, 
    loadingText = '正在加载中...',
    hiddenText = false,
    bgColor = '#06c'
  } = props
  return isLoading ? 
    <Container >
      <div 
        className={`loader-inner ball-spin-fade-loader${spinType[type] ? ' ' + spinType[type] : ''}`}
        style={{backgroundColor: bgColor}}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> 
      {
        !hiddenText && <p className="x-loading-text">{ loadingText }</p>
      }
    </Container> : null
}