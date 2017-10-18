import { connect } from 'react-redux'
import { taskCheck } from '../actions'
import SecurityCheckList from '../components/SecurityCheckList'

const getVisibleSecurityCheckList = (securityCheckList) => {
  return securityCheckList.filter(t => t.checked === true)
}

const mapStateToProps = (state) => ({
  checkList: getVisibleSecurityCheckList(state.securityTodayTaskList)
})

const VisibleSecurityCheckList = connect(
  mapStateToProps
)(SecurityCheckList)

export default VisibleSecurityCheckList
