// 404页面

import React,{Component} from 'react'

class Error extends Component {
    constructor(props,context){
        super(props,context)
    }
    render (){
        return (
            <p>
                404 Not Found
            </p>
        )
    }
}

export default Error