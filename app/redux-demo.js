import { createStore } from 'redux' 

export default function(){
    // 一 .定义计算规则, 即 reducer

    function counter(state = 0,action){
        switch (action.type){
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT' :
                return state - 1
            default :
                return state
        }
    }

    // 根据计算规则生成 Store
    let store = createStore(counter)

    // 定义数据(state) 变化后的派发规则 ,监听的函数
    // 色波丝快波 subscribe （）派发
    store.subscribe(()=>{
        console.log('fn1 -> current state', store.getState())
    })
    store.subscribe(()=>{
        console.log('fn2 -> current state', store.getState())
    })

    // 第四部触发数据变化
    store.dispatch({type : "INCREMENT"})
    store.dispatch({type : "INCREMENT"})
    store.dispatch({type : "DECREMENT"})
}