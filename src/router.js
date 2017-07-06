import './index.html'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter,Route, Switch,BrowserRouter } from 'react-router-dom'
import { Login } from './routes/login/index'
import { HomePage } from './routes/index/index'
import { Header } from './components/layout/header.js';
// import './themes/index.less'

function App(){
    return(<div >APP</div>) ;
}

function Test(){
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

ReactDOM.render((
  <BrowserRouter
      basename="/"
      forceRefresh={false}
      keyLength={12}
    >
    <div id="box">
      <Route exact path="/" component={ Login } />
      <Route path="/index" component={ HomePage } />
    </div>
  </BrowserRouter>
),document.getElementById("root"));

// ReactDOM.render(<Index />,document.getElementById("root"));
