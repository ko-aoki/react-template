import { connect } from 'react-redux'
import { taskCheck } from '../actions'
import CheckList from '../components/CheckList'

const getVisibleCheckList = (checkList) => {
  return checkList.filter(t => t.checked === true)
}

const mapStateToProps = (state) => ({
  checkList: getVisibleCheckList(state.todayTaskList)
})

const VisibleCheckList = connect(
  mapStateToProps
)(CheckList)

export default VisibleCheckList
