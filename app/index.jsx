import React from 'react'
import { render } from 'react-dom'
// 生成store
import configureStore from './store/configureStore.js'
// 第三步 订阅监听
import { Provider } from 'react-redux'

// 通用样式
import './static/css/common.less'
import './static/css/font.css'
//定义组件
import Todo from './containers/Todo/Todo.jsx'
import RouterMap from './routers/router.js'

const store = configureStore();
// redux 
// import fn from './redux-demo.js'
// fn()

// 测试 fetch 的功能
// import {getData , postData} from './fetch/test.js'

// import {getData,postData} from './fetch/data.js'

// getData();
// postData();
render(
    // 将Store 传入 监听里
    <Provider store = {store}>
        <RouterMap />
    </Provider>
    ,
    document.getElementById('root')
)
