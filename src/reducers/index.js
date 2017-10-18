import { combineReducers } from 'redux'
import securityTodayTaskList from './securityTodayTaskList'
import securityCheckList from './securityCheckList'
// import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
  securityTodayTaskList,
    securityCheckList
//  visibilityFilter
})

export default reducer
