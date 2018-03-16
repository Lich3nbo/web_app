import React,{Component} from 'react'
import {connect} from 'react-redux'

import HomeHeader from '../../components/Homeheader/Homeheader.jsx'
import Category from '../../components/Category/Category.jsx'
import Ad from './subpage/ad.jsx'

class Home extends Component{
    constructor(props,context){
        super(props,context);
    }
    render (){
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:"15px"}}></div>
                <Ad/>
            </div>
        )
    }
}
//  ------------------- redux react 绑定 ---------------
//  数据
function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}
//  传数据
function mapDispatchToProps(dispatch){
    return {
   
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)