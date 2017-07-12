import React from 'react';
import styles from './index.less';
import { Header, IndexToolBar, SegmentCtrl } from '../../components/layout/header.js';
import { Content } from '../../components/layout/content.js';
import { Test } from '../test/index'
import {  Row  } from 'antd'

const IndexPage = React.createClass({
    render:
        function (){
            if(sessionStorage.username==null) window.location.href="/login";
            return(
                <div id="index" className="Container">
                    <Header>
                            <IndexToolBar />
                    </Header>
                    <Content>
                          {this.props.children}
                    </Content>
                </div>
            );
        }
});
export { IndexPage };