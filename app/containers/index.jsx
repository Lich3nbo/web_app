import React,{Component} from 'react'

import LocalStore from '../util/localStore.js'
import {CITYNAME} from '../config/localStoreKey.js'

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import * as userActionsUpdate from '../actions/userinfo.js'
console.log(userActionsUpdate);

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            initDone : false
        }
    }
    render (){
        return (
            <div>
                {
                    this.state.initDone?
                    this.props.children:
                    <div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount(){
        // 从 localStore 获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        console.log(cityName)
        if( cityName == null) {
            cityName = '北京'
        console.log(cityName)        
        }
        console.log(cityName)        
        // 将城市信息 存入到 redux 
        this.props.userInfoActions.update({
            cityName: cityName
        })

        setTimeout(() => {
            this.setState({
                initDone:true
            })
        }, 1000);
    }
}

//  redux - 绑定react

//  数据
function mapStateToProps(state){
    return {

    }
}
//  传数据
function mapDispatchToProps(dispatch){
    return {
        userInfoActions : bindActionCreators(userActionsUpdate,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)