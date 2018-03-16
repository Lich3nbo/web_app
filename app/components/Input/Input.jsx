// TODO input 组件

import React,{Component} from 'react'

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }
    }
    render () {
        return (
            <div>
                <input type="text"
                       value={this.state.text}
                       onChange = { this.ChangeHandler}
                       onKeyUp = { this.keyUpSubmit}
                />
            </div>
        )
    }
    ChangeHandler = (e) => {
        let val = e.target.value;
        this.setState({
            text:val
        })
    }
    keyUpSubmit = (e) =>{
        let val = this.state.text;
        // 判断是否为回车  是 就清除 字符串 前后空白
        if(e.keyCode === 13 && val.trim()){
            this.props.submitFn(val);
            this.setState({
                text:''
            })
        }
       
    }
}