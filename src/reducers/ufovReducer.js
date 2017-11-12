import {updateObject, updateItemInArray} from '../common/UpdateUtil.js'

/**
 * ufovの初期state
 * @type {[*]}
 */
export let initUfov = {
    timer: 0,
    count: 0,
    touched: false,
    targetList: [],
    point: 0
}

for(let i=0; i < 5; i++) {
    initUfov.targetList[i] = {
        id: i,
        active: false
    }
}

/**
 * UFOVを返却するreducer.
 * @param ufov
 * @param action
 * @returns {*}
 */
const ufovReducer = (ufov = initUfov, action) => {
    let newList
    switch (action.type) {
        case 'MOVE_UFOV_TARGET':
            if (ufov.count === 10) {
                clearInterval(ufov.timer)
            }
            newList = initUfov.targetList.slice()
            // TODO
            for(let i=0; i < 5; i++) {
                newList[i].active = false
            }
            newList[action.idx].active = true
            return updateObject(
                ufov, {
                    targetList: newList,
                    count: ufov.count + 1,
                    touched: false})
        case 'START_UFOV':
            return updateObject(ufov, {timer: action.timer})
        case 'STOP_UFOV':
            clearInterval(ufov.timer)
            newList = initUfov.targetList.slice()
            for(let i=0; i < 5; i++) {
                newList[i].active = false
            }
            return updateObject(ufov, {timer: -1, targetList: newList})
        case 'TOUCH_UFOV_TARGET':
            return updateObject(ufov, {point: ufov.point + 1, touched: true})
        default:
            return ufov
    }
}

export default ufovReducer
