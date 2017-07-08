import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Header, IndexToolBar, SegmentCtrl } from '../../components/layout/header.js';
import { Test } from '../test/index'
import {  Row  } from 'antd'

const IndexPage = React.createClass({
    render:
        function (){
            return(
                <div>
                    <Header>
                            <IndexToolBar />
                            <SegmentCtrl />
                    </Header>
                    <Row type="flex" justify="center" align="top" className="content">
                        {this.props.children}
                    </Row>
                </div>
            );
        }
});
export { IndexPage };