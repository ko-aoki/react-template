import { combineReducers } from 'redux'
import todayTaskList from './todayTaskList'
import checkList from './checkList'
// import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
  todayTaskList,
  checkList
//  visibilityFilter
})

export default reducer
