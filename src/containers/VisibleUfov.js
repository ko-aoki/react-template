import { connect } from 'react-redux'
import { startUfov, stopUfov, moveUfovTarget, touchUfovTarget } from '../actions'
import Ufov from '../components/Ufov'

/**
 * state[ufov]をUfovコンポーネントのプロパティにマップします.
 * @param state
 */
const mapStateToProps = (state) => ({
    ufov: state.ufov
})

let lastRandomInt;

// min から max までの乱数を返す関数
function getRandomInt(min, max) {
    let randomInt = Math.floor( Math.random() * (max - min + 1) ) + min;
    if (randomInt === lastRandomInt) {
        console.log("same random")
        return getRandomInt(min, max)
    }
    console.log("random" + randomInt)
    lastRandomInt = randomInt
    return randomInt;
}

/**
 * アクションをタスク選択コンポーネントのプロパティにマップします.
 */
const mapDispatchToProps = (dispatch, props) => ({
    onStart: () => {
        const timer = setInterval(() => dispatch(moveUfovTarget(getRandomInt(0, 4))), 1000)
        dispatch(startUfov(timer))
    },
    onStop: () => {
        dispatch(stopUfov())
    },
    onTouch: () => {
        dispatch(touchUfovTarget())
    }
})

/**
 * redux state、アクションを「UFOV」表示コンポーネントと結合したcontainer.
 */
const VisibleUfov = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ufov)

export default VisibleUfov
