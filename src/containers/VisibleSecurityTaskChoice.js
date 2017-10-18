import { connect } from 'react-redux'
import { taskCheck } from '../actions'
import SecurityTaskChoice from '../components/SecurityTaskChoice'

const mapStateToProps = (state) => ({
    securityTodayTaskList: state.securityTodayTaskList
})

const mapDispatchToProps = {
  onCheckClick: taskCheck
}

const VisibleSecurityTaskChoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecurityTaskChoice)

export default VisibleSecurityTaskChoice
