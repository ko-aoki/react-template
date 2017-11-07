import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import VisibleSecurityCheckReport from './VisibleSecurityCheckReport';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore()
let store,container

const testState = {
    todayTaskList:
        [
            {
                id: '01',
                content: '乗用トラクターでの公道移動',
                checked: true
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
                checked: true
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
                checked: true
            }
        ]
}

const filteredState =
[
    {
        id: '01',
        content: '乗用トラクターでの公道移動',
        checked: true
    },
    {
        id: '06',
        content: '乗用トラクターによる耕うん・代かき作業',
        checked: true
    },
    {
        id: '13',
        content: '牛の管理作業',
        checked: true
    }
]

/**
 * VisibleSecurityCheckReportにstore注入
 */
beforeEach(()=>{
    store = mockStore(testState)
    container = shallow(<VisibleSecurityCheckReport store={store} /> )
})

it('propertiesの確認', () => {
    expect(container.prop('checkList')).toEqual(filteredState)
});
