import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'dva/router';

import { IndexPage } from './routes/index/index';
import { Learning } from './routes/learning/index';
import { Login } from './routes/login/index';
import {Test} from './routes/test/index';
import {ErrorPage} from './routes/404/index';

const App = React.createClass({
    render:function(){
      window.location.href="/login";
    }

});

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="home" component={IndexPage}>
        <IndexRoute component={Learning} />
        <Route path="/learning" component={Learning} />
        <Route path="test" component={Test} />
      </Route>
      <Route path="login" component={Login} />
      {/*<Route path="test" component={Test} />*/}
      <Route path="*" component={ErrorPage} />
    </Router>
  );
}

export default RouterConfig;