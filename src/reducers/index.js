import todayTaskList from './todayTaskList'
import checkList from './checkList'

const reducer = (state = {}, action) => {
    return {
        todayTaskList: todayTaskList(state.todayTaskList, action),
        checkList: checkList(state.checkList, action)
    }
}

export default reducer
