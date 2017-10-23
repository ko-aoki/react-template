import { connect } from 'react-redux'
import { taskCheck } from '../actions'
import TaskChoice from '../components/TaskChoice'

const mapStateToProps = (state) => ({
    todayTaskList: state.todayTaskList
})

const mapDispatchToProps = {
  onCheckChange: taskCheck
}

const VisibleTaskChoice = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskChoice)

export default VisibleTaskChoice
