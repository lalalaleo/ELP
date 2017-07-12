import React from 'react';
import styles from './index.less';
import { Content } from '../../components/layout/content.js';
import { Button, Row, Form, Input } from 'antd';

const Login = React.createClass({
    render: function Login(){
        if(sessionStorage.username!=null) window.location.href="/home";
        function btn_Login(){
            sessionStorage.username="123";
            window.location.href="/home"
        }
        return(
            <div id="Login" className="Container">
                <content>
                    <div className="login">
                        <div className="login_logo">
                            <img src="/image/logo.png" alt="logo"/>
                            <span>Enterprise learning platform</span>
                        </div>
                        <Input size="large"  placeholder="Username" />
                        <Input size="large" type="password"  placeholder="Password" />
                        <Row>
                            <Button type="primary" size="large" onClick={btn_Login}>
                                Sign in
                            </Button>
                        </Row>
                    </div>
                </content>
            </div>
            
        );
    }
});

export { Login };