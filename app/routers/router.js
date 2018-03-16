import React from 'react'
import { Router, Route, IndexRoute,hashHistory } from 'react-router'

import App from '../containers/index.jsx'
import Home from '../containers/Home/Home.jsx'
// import City from '../containers/City'
// import User from '../containers/User'
// import Search from '../containers/Search'
// import Detail from '../containers/Detail'
import NotFound from '../containers/404.jsx'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
           <Router history={hashHistory}>
               <Route path='/' component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path='*' component={NotFound}></Route>
               </Route>
           </Router>
        )
    }
}

export default RouterMap
