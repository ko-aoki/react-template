import { connect } from 'react-redux'
import { checkTask } from '../actions'
import TaskChoice from '../components/TaskChoice'

/**
 * state[今日のタスクリスト]をタスク選択コンポーネントのプロパティにマップします.
 * @param state
 */
const mapStateToProps = (state) => ({
    todayTaskList: state.todayTaskList
})

/**
 * アクション[checkTask]をタスク選択コンポーネントのプロパティにマップします.
 */
const mapDispatchToProps = {
  onCheckChange: checkTask
}

/**
 * redux state、アクションを「今日の作業の選択」表示コンポーネントと結合したcontainer.
 */
const VisibleTaskChoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskChoice)

export default VisibleTaskChoice
