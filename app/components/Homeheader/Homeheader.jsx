// 404页面

import React,{Component} from 'react'
import './Homeheader.less'
class HomeHeader extends Component {
    render (){
        return (
            <div id ='Home-header' className = 'clear-fix'>
                <div className='Home-left float-left'>
                    <span>{ this.props.cityName }</span>
                    &nbsp;
                    <i className= 'icon-angle-down'></i>
                </div>
                <div className='Home-right float-right'>
                    <i className='icon-user'></i>                    
                </div>
                <div className='Home-middle'>
                    <i className='icon-search'></i>
                    <input type="text" placeholder='请输入关键字'/>
                </div>
            </div>
        )
    }
}
export default  HomeHeader