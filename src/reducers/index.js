import todayTaskList from './todayTaskList'

/**
 * アクションから、アプリケーション全体のstateを変更します.
 * 管理するstateの増減により、ここを編集します.
 * 以下原則を遵守する必要があります.
 *
 * http://redux.js.org/docs/introduction/ThreePrinciples.html
 *
 * @param state アプリケーション全体のstate
 * @param action アクション
 * @returns {{todayTaskList: *}} アプリケーションすべてのstate
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
