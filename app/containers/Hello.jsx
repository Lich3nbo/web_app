import React from 'react'

import { connect }  from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo.js'

import A from '../components/A.jsx'
import B from '../components/B.jsx'
import C from '../components/C.jsx'

// 定义组件
class Hello extends React.Component{
    render (){
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>                
                <C actions={this.props.userinfoActions}/> >
            </div>
        )
    }
    componentDidMount(){
        // 模拟登陆
        this.props.userinfoActions.login({
            userid:'abc',
            city:'beijing'
        })
    }
}
function mapStateToProps(state){
    // 这个函数里面的key 就会变成 Hello 组件的 Props
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispath){
    return {
        userinfoActions : bindActionCreators(userinfoActions,dispath)
    }
}

// export default Hello (一般情况下吐出)

// 通过 connect  封装 重新吐出来
//  connect 有两个参数
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hello)