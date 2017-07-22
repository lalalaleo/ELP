import React from 'react'
import styles from './index.less'
import { Header, IndexToolBar, SegmentCtrl } from '../../../components/layout/header';
import { Content } from '../../../components/layout/content.js';
import {  Row  } from 'antd'

const M_IndexPage = React.createClass({
    render:
        function (){
            if(sessionStorage.username==null) window.location.href="/login";
            return(
                <div id="index" className="Container">
                    <Header type="mobile" />
                    <Content type='mobile'>
                          {this.props.children}
                    </Content>
                </div>
            );
        }
});
export { M_IndexPage };