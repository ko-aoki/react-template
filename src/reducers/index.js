import todayTaskList from './todayTaskList'
import checkList from './checkList'

/**
 * アクションから、アプリケーション全体のstateを変更します.
 * 管理するstateの増減により、ここを編集します.
 *
 * @param state アプリケーション全体のstate
 * @param action アクション
 * @returns {{todayTaskList: *, checkList: Array}} アプリケーションすべてのstate
 */
const reducer = (state = {}, action) => {
    return {
        /**
         * 今日のタスクリスト
         */
        todayTaskList: todayTaskList(state.todayTaskList, action),
        /**
         * チェックリスト
         */
        checkList: checkList(state.checkList, action)
    }
}

export default reducer
