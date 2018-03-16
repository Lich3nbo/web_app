// homeAd 组件

import React,{Component} from 'react'
import './HomeAd.less'
class HomeAd extends Component {
    constructor(props,context){
        super(props,context)
    }
    render (){
        let data =this.props.data;
        let createItem = function(item,index){
            return <li key={index}>
                        <a href={item.link}>
                            <img src={item.img} alt={item.title}/>
                        </a>
                   </li>
        }
        return (
            <div className="HomeAd-container">
                {   data.length?
                    <ul className='clear-fix'>
                        {data.map(createItem)}
                    </ul>:
                    <div>正在加载...</div>
                }
            </div>
        )
    }
}

export default HomeAd