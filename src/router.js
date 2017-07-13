import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'dva/router';
import { IndexPage } from './routes/index/index';
import { Learning } from './routes/learning/index';
import { All } from './routes/all/index';
import { Discover } from './routes/discover/index';
import { Login } from './routes/login/index';
import { Classes } from './routes/classes/index';
import { Class } from './routes/classItem/index';
import { Search } from './routes/search/index';
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
        <Route path="discover" component={Discover} />
        <Route path="all" component={All} />
        <Route path="search" component={Search} />
        <Route path="classes" component={Classes} />
        <Route path="classes/class" component={Class} />
       </Route>
      <Route path="login" component={Login} />
      <Route path="*" component={ErrorPage} />
    </Router>
  );
}

export default RouterConfig;