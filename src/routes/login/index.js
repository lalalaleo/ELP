import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less'
import { Button, Row, Form, Input } from 'antd'


function Login(){
    return(
        <div className={styles.form}>
            <Input size="large"  placeholder="Username" />
            <Input size="large" type="password"  placeholder="Password" />
            <Button type="primary" size="large" >
                Sign in
            </Button>
            <p>
                <span>Username：guest</span>
                <span>Password：guest</span>
            </p>
        </div>
    );
}

ReactDOM.render(<Login />, document.getElementById('root'));
