import './index.html'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Router, Route, Link, IndexRoute } from 'react-router-dom'
import { Login } from './routes/login/index'

const App = function(){
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
      </div>
    );
}

ReactDOM.render((
  <HashRouter>
    <Route path="/" component={Login}>
        {/*<IndexRoute component={Login} />*/}
    </Route>
  </HashRouter>
), document.body)