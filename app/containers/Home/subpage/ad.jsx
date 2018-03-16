// ad

import React,{Component} from 'react'
import {getAdData} from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd/HomeAd.jsx'
import './ad.less'
class Ad extends Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            data :[]
        }
    }
    render (){
        return (
           <div id='Home-ad'>
                <h3>超值特惠</h3>
                <HomeAd data={this.state.data}/>
           </div>
        )
    }
    componentDidMount(){
        // 这里获取数据
        const result = getAdData();
        result.then((res) => {
            return res.json();
        }).then((json)=>{
            let data = json;
            if(data.length){
                this.setState({
                    data
                })
            }
        })

    }
}

export default Ad