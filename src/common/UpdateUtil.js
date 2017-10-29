// from http://redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
/**
 * オブジェクトを指定したプロパティのみ変更し、新しいオブジェクトを返却します.
 * reduxのreducerではstateの更新が禁止されているため、当functionを使用してください.
 *
 * @param oldObject 更新対象オブジェクト
 * @param newValues 更新内容
 * @returns {*} 更新結果のオブジェクト
 */
export const updateObject = function(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

/**
 * 配列内のオブジェクトを更新し、新しい配列を返却します.
 * reduxのreducerではstateの更新が禁止されているため、当functionを使用してください.
 *
 * @param array 更新対象配列
 * @param itemId 更新対象要素のID
 * @param updateItemCallback 更新用コールバック関数
 * @returns {Array|Object|*} 更新結果の配列
 */
export const updateItemInArray = function(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
        if(item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });

    return updatedItems;
}