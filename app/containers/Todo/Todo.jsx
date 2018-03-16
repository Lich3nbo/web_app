import React,{Component} from "react"

import Input from '../../components/Input/Input.jsx'
import List from '../../components/List/List.jsx'
export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : []
        }
    }
    render () {
        return (
            <div>
                <Input submitFn = {this.submitFn} /> 
                <List todo = {this.state.todo} deleteItem = {this.deleteItem}/>
            </div>
        )
    }
    submitFn = (value) =>{
        let id = this.state.todo.length;
        console.log(id)
        this.setState({
            todo : this.state.todo.concat({
                id : id,
                text:value,
            })
        })  
    }
    deleteItem = (id) => {
        let todo = this.state.todo;

        this.setState({
            todo:todo.filter(item => {
                if(item.id !== id) return item
            })
        })
    }
}