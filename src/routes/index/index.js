import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Header } from '../../components/layout/header.js';
import { Learning } from '../learning/index.js';
import {  Row  } from 'antd'

function Index(){
    return(
        <div>
            <Header type='index' />
            <Row type="flex" justify="center" align="top" id="content">
                <Learning />
            </Row>
        </div>
    );
}

ReactDOM.render(<Index />,document.getElementById('root'));