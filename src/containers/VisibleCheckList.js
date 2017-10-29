import { connect } from 'react-redux'
import CheckList from '../components/CheckList'

// stateを表示コンポーネントにバインドします.
// 本appでは、ビジネスロジックをここで記載します.

const getVisibleCheckList = (checkList) => {
  return checkList.filter(t => t.checked === true)
}

/**
 * state[今日のタスクリスト]をチェックリストコンポーネントのプロパティにマップします.
 * @param state
 */
const mapStateToProps = (state) => ({
    // 前画面のチェック対象
  checkList: getVisibleCheckList(state.todayTaskList)
})

/**
 * redux stateと表示コンポーネントを結合したcontainer.
 */
const VisibleCheckList = connect(
  mapStateToProps
)(CheckList)

export default VisibleCheckList
