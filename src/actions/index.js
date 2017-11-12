/**
 * タスクを有効/無効チェックしたときのアクション.
 *
 * @param id タスクのID
 * @param checked チェックの有効/無効
 */
export const checkTask = (id, checked) => ({
  type: 'TASK_CHECK',
  id,
  checked
})

/**
 * UFOVターゲット移動したときのアクション.
 *
 */
export const moveUfovTarget = (idx) => ({
    type: 'MOVE_UFOV_TARGET',
    idx
})

/**
 * UFOVターゲットにタッチしたときのアクション.
 *
 */
export const touchUfovTarget = () => ({
    type: 'TOUCH_UFOV_TARGET'
})

/**
 * UFOV開始したときのアクション.
 *
 */
export const startUfov = (timer) => ({
    type: 'START_UFOV',
    timer
})

/**
 * UFOV終了したときのアクション.
 *
 */
export const stopUfov =  function(state) {
    return {
        type: 'STOP_UFOV'
    }
}
