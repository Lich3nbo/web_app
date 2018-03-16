/**
 * 定义用户信息规则
 */ 
import * as actionTypes from '../constants/userinfo.js'

const initalState = {}

export default function userinfo(state = initalState , action) {
    switch (action.type){
        // 登陆
        case actionTypes.USERINFO_LOGIN :
            return action.data
        // 修改城市
        case actionTypes.UPDATE_CITYNAME :
            return action.data
        // 存储城市
        case actionTypes.USERINFO_UPDATE :
            return action.data
        default :
            return state 
    }
}