
// 列表种类

import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'
import './Category.less'

class Category extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            index:0
        }
    }
    render (){
        let opt = {
            auto:2000,
            callback : index => {
                this.setState({
                    index:index
                })
            }
        }
        return (
            <div id='Home-Category'>
                <ReactSwipe className="carousel swiper-list" swipeOptions={opt}>
                    <div className='one'></div>
                    <div className='two'></div>
                    <div className='three'></div>
                </ReactSwipe>
                <div className ='dotList'>
                    <ul className ='clear-fix'>
                        <li className={ this.state.index===0? "current" : ''}></li>
                        <li className={ this.state.index===1? "current" : ''}></li>
                        <li className={ this.state.index===2? "current" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(ReactSwipe)
    }
}
export default Category