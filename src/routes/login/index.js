import $ from 'jquery'
import React from 'react'
import styles from './index.less'
import { Content } from '../../components/layout/content.js'
import { Button, Row, Form, Input, message } from 'antd'

function getCookie(cookieName){  
    var cookieContent = '';  
    var cookieAry = document.cookie.split("; ");//得到Cookie数组  
    for(var i=0;i<cookieAry.length;i++){  
        var temp = cookieAry[i].split("=");  
        if(temp[0] == cookieName){  
            cookieContent = unescape(temp[1]);  
        }  
    }  
    return cookieContent;
}

const Login = React.createClass({
    render: function Login(){
        function btn_Login(){
            var logId=$("input[name='username']").val();
            var pwd=$("input[name='password']").val();
            if(logId==''||pwd==''){
                message.warn("用户名和密码不能为空");
            }
            else{
                $.ajax({
                    type: "post",
                    // url: "http://101.70.100.6:9018/elpcon/login",
                    // url: "http://127.0.0.1:8888/midwayIsland/user",
                    url: "http://192.168.0.8:8888/midwayIsland/user",                    
                    // url: "http://192.168.100.192:8888/midwayIsland/user",
                    dataType: "JSON",
                    // data: "logId="+logId+"&&pwd="+pwd,
                    data: "type=login&logId="+logId+"&pwd="+pwd,
                    success: function(data){
                        console.log(data);
                        if(data.code==200){
                            if(data.result=="ok"){
                                message.success("登陆成功");
                                document.cookie="JSESSIONID="+data.data.SessionId; 
                                localStorage.User=JSON.stringify(data.data.User);            
                                localStorage.Office=JSON.stringify(data.data.User);
                                window.location.href="/home";   
                            }
                            else {
                                message.error(data.errorInfo);
                            }
                        }
                    },
                });
            }
        }
        if(getCookie("JSESSIONID")!='') window.location.href="/home"; 
        else {
            return(
                <div id="Login" className="Container" style={{backgroundImage:"url(/image/background/bg_login.png)"}}>
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
    }
});

export { Login };