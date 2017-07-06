import React from 'react';
import { Router, Route } from 'dva/router';
import {IndexPage} from './routes/index/index';
import {Login} from './routes/login/index';
import './routes/login/index.less'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
