/**
 * タスクを有効/無効チェックしたときのアクション.
 *
 * @param id タスクのID
 * @param checked チェックの有効/無効
 */
export const taskCheck = (id, checked) => ({
  type: 'TASK_CHECK',
  id,
  checked
})
