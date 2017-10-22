import {updateObject, updateItemInArray} from '../common/UpdateUtil.js'

// セキュリティ 今日のタスクリスト
const initialTodayTaskList = [
    {
        id: '01',
        content: '乗用トラクターでの公道移動',
        checked: false
    },
    {
        id: '02',
        content: '刈払機による草刈り作業',
        checked: false
    },
    {
        id: '03',
        content: '歩行用トラクターによる耕うん作業',
        checked: false
    },
    {
        id: '04',
        content: '脚立やはしごによる高所作業',
        checked: false
    },
    {
        id: '05',
        content: '重量物の運搬作業',
        checked: false
    },
    {
        id: '06',
        content: '乗用トラクターによる耕うん・代かき作業',
        checked: false
    },
    {
        id: '07',
        content: '田植作業',
        checked: false
    },
    {
        id: '08',
        content: 'コンバインによる収穫作業',
        checked: false
    },
    {
        id: '09',
        content: '大規模畑作・野菜作における機械収穫作業',
        checked: false
    },
    {
        id: '10',
        content: 'スピードスプレーヤによる農薬散布作業',
        checked: false
    },
    {
        id: '11',
        content: 'モノレールによる作業',
        checked: false
    },
    {
        id: '12',
        content: '牧草収穫作業',
        checked: false
    },
    {
        id: '13',
        content: '牛の管理作業',
        checked: false
    }
]

const todayTaskList = (state = initialTodayTaskList, action) => {
    switch (action.type) {
        case 'TASK_CHECK':
            const callback = function(task){
                return updateObject(
                    task, {checked: action.checked}
                    )
            }
            return updateItemInArray(state, action.id, callback)
        default:
            return state
    }
}

export default todayTaskList
