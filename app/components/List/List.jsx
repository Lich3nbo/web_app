// TODO list 组件

import React,{Component} from 'react'


export default class List extends Component{

    render () {
        let data = this.props.todo
        return (
            <div>
                <ul>
                    {data.map((item,index)=> <li key={index} onClick={()=>{ this.deleteItem(item.id) }}>{item.text}</li>)}
                </ul>
            </div>
        )
    }

    deleteItem = (id)=>{
        this.props.deleteItem(id);
    }
}