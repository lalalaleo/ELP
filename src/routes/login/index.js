import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less'
import { Button, Row, Form, Input } from 'antd'


function Login(){
    return(
        <div className="login">
            <div className="logo">
                <img src="../public/logo.png"/>
                <span>Enterprise learning platform</span>
            </div>
            <Input size="large"  placeholder="Username" />
            <Input size="large" type="password"  placeholder="Password" />
            <Row>
                <Button type="primary" size="large" >
                    Sign in
                </Button>
            </Row>
        </div>
    );
}

// ReactDOM.render(<Login />,document.getElementById('#root'));
export default Login;