import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  margin: 6px 3px;
  display: inline-flex;
  align-items: center;
  .progressBar {
    position: relative;
    display: inline-block;
    height: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    overflow: hidden;
    .progressInnerBar {
      position: absolute;
      height: 100%;
    }
  }
  .progressText {
    margin-left: 6px;
    margin-top: -2px;
    font-size: 14px;
  }
`

// 升序排序
let sortArr = arr => arr.sort((a,b) => a[0] - b[0])

// 检测值所对应的进度条颜色状态
function checkStatus(scope, val, defaultColor) {
  val = +val
  // 从小到大排序
  sortArr(scope)

  if(scope.length === 1) {
    return val < scope[0][0] ? scope[0][1] : defaultColor
  }else if(scope.length === 2) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : defaultColor
  }else if(scope.length === 3) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : scope[1][0] < val && val < scope[2][0] ? scope[2][1]
          : defaultColor
  }
}


/**
 * 进度条组件
 * @param {themeColor} string 进度条的颜色
 * @param {percent} number 进度值百分比
 * @param {autoHidden} boolean 是否进度到100%时自动消失
 * @param {hiddenText} boolean 是否影藏进度条文本
 * @param {width} string|number 进度条的宽度
 * @param {textColor} string 进度文本颜色
 * @param {statusScope} array 状态阈值,分别设置不同进度范围的进度条颜色,最大允许设置3个值, 为一个二维数组
 */
function Progress(props) {
  let { 
    themeColor = '#06f', 
    percent = 0, 
    autoHidden = false, 
    hiddenText = false, 
    width = 320, 
    textColor = '#666',
    statusScope 
  } = props
  return +percent === 100 && autoHidden ? 
    null : 
    <Container>
      <div className="progressBar" style={{ width: typeof width === 'number' ? width + 'px' : width }}>
        <div 
          className="progressInnerBar" 
          style={{
            width: `${percent}%`,
            backgroundColor: statusScope && statusScope.length ? checkStatus(statusScope, percent, themeColor) : themeColor
          }}
        >
        </div>
      </div>
      {
        !hiddenText && <span className="progressText" style={{ color: textColor }}>{percent + '%'}</span>
      }
    </Container>
}

Progress.propTypes = {
  themeColor: PropTypes.string,
  percent: PropTypes.number,
  autoHidden: PropTypes.bool,
  textAlign: PropTypes.string,
  hiddenText: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  statusScope: PropTypes.array
}

export default Progress