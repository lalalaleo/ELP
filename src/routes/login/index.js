import $ from 'jquery'
import React from 'react'
import styles from './index.less'
import { Content } from '../../components/layout/content.js'
import { Button, Row, Form, Input } from 'antd'

const Login = React.createClass({
    render: function Login(){
        if(sessionStorage.username!=null) window.location.href="/home";
        function btn_Login(){
            var logId=$("input[name='username']").val();
            var pwd=$("input[name='password']").val();
            $.ajax({
                type: "post",
                url: "http://101.70.100.6:9018/elpcon/login",
                dataType: "JSON",
                data: "logId="+logId+"&&pwd="+pwd,
                success: function(data){
                    // console.log(data);
                    if(data.code==200){
                        document.cookie="SessionId="+data.data.SessionId; 
                        sessionStorage.User=data.data.User;            
                        sessionStorage.Office=data.data.Office;
                        // window.location.href="/home";   
                    }
                },
            });
        }
        return(
            <div id="Login" className="Container">
                <content>
                    <div className="login">
                        <div className="login_logo">
                            <img src="/image/logo.png" alt="logo"/>
                            <span>Enterprise learning platform</span>
                        </div>
                        <Input name="username" size="large"  placeholder="Username" />
                        <Input name="password" size="large" type="password"  placeholder="Password" />
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