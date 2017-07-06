import './index.html'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Router, Route, Link, IndexRoute } from 'react-router-dom'
import { Login } from './routes/login/index'
import { Index } from './routes/index/index'
import { Header } from './components/layout/header.js';

// ReactDOM.render((
//   <HashRouter>
//     <Route path="/" component={ Login }>
//         <IndexRoute component={ Login } />
//         {/*<Route path="index" component={Index} />*/}
//     </Route>
//   </HashRouter>
// ), document.getElementById("#root"))


// function App(){
//     return (
//         <div>
//             <Login />
//         </div>
//     );
// }

ReactDOM.render(<Login />,document.getElementById('root'));