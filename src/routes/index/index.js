import $ from 'jquery'
import React from 'react';
import styles from './index.less';
import { Header, IndexToolBar, SegmentCtrl } from '../../components/layout/header.js';
import { Content } from '../../components/layout/content.js';
import {  Row  } from 'antd'

const IndexPage = React.createClass({
    render:
        function (){
            if($(document).width()<1000) window.location.href="/m";
            else if(sessionStorage.username==null) window.location.href="/login";
            else{
                return(
                    <div id="index" className="Container">
                        <Header type='desktop' />
                        <Content type='desktop'>
                            {this.props.children}
                        </Content>
                    </div>
                );
            }
        }
});
export { IndexPage };