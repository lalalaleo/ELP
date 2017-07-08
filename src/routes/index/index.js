import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Header } from '../../components/layout/header.js';
import {  Row  } from 'antd'

const IndexPage = React.createClass({
    render:
        function (){
            return(
                <div>
                    <Header type='index' />
                    <Row type="flex" justify="center" align="top" className="content">
                        {this.props.children}
                    </Row>
                </div>
            );
        }
});
export default { IndexPage };