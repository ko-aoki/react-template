import todayTaskList from './todayTaskList'

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
        todayTaskList: todayTaskList(state.todayTaskList, action)
    }
}

export default reducer
