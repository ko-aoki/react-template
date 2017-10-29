import { connect } from 'react-redux'
import SecurityCheckReport from '../components/SecurityCheckReport'

// stateを表示コンポーネントにバインドします.
// 本appでは、ビジネスロジックをここで記載します.

const getVisibleCheckList = (checkList) => {
  return checkList.filter(t => t.checked === true)
}

/**
 * state[今日のタスクリスト]を農作業安全確認コンポーネントのプロパティにマップします.
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
)(SecurityCheckReport)

export default VisibleCheckList
