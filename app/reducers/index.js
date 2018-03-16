//  自己理解为规则的集合

import { combineReducers} from 'redux'

import userinfo from './userinfo.js'

const rootReducer = combineReducers({
    userinfo
})

export default rootReducer