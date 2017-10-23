import { connect } from 'react-redux'
import CheckList from '../components/CheckList'

const getVisibleCheckList = (checkList) => {
  return checkList.filter(t => t.checked === true)
}

const mapStateToProps = (state) => ({
    // 前画面のチェック対象
  checkList: getVisibleCheckList(state.todayTaskList)
})

const VisibleCheckList = connect(
  mapStateToProps
)(CheckList)

export default VisibleCheckList
