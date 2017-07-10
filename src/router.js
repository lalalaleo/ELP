import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'dva/router';
import { IndexPage } from './routes/index/index';
import { Learning } from './routes/learning/index';
import { All } from './routes/all/index';
import { Recommend } from './routes/recommend/index';
import { Login } from './routes/login/index';
import {Test} from './routes/test/index';
import {ErrorPage} from './routes/404/index';

const App = React.createClass({
    render:function(){
      window.location.href="/home";
    }
});

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="home" component={IndexPage}>
        <IndexRoute component={Learning} />
        <Route path="learning" component={Learning} />
        <Route path="recommend" component={Recommend} />
        <Route path="all" component={All} />
      </Route>
      <Route path="login" component={Login} />
      <Route path="*" component={ErrorPage} />
    </Router>
  );
}

export default RouterConfig;