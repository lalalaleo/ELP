import React from 'react';
import { Router, Route } from 'dva/router';
import {IndexPage} from './routes/index/index';
// import { Learning } from './routes/learning/index.js';
import {Login} from './routes/login/index';
import './routes/login/index.less'

function RouterConfig({ history }) {
  const routes = [
    {
      path: '/',
      component: IndexPage,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./routes/index/') })
        }, 'IndexPage')
      },
      childRoutes: [
        {
          path: '/login',
          component: Login
          // getComponent (nextState, cb) {
          //   require.ensure([], require => {
          //     cb(null, require('./routes/index/'))
          //   }, 'IndexPage')
          // },
        },
      ],
    },
  ],
  return (
    // <Router history={history}>
    //   <Route path="/" component={IndexPage} >
    //   </Route>
    //     <Route path="/learning" component={Learning} />
    //   <Route path="/login" component={Login} />
    // </Router>
    <Router history={history} routes={routes} />
  );
}

export default RouterConfig;
