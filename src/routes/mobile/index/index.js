import $ from 'jquery'
import React from 'react'
import styles from './index.less'
import { Header, IndexToolBar, SegmentCtrl } from '../../../components/layout/header';
import { Content } from '../../../components/layout/content.js';
import {  Row  } from 'antd'

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

const M_IndexPage = React.createClass({
    render:
        function (){
            if(getCookie("JSESSIONID")==''){
                window.location.href="/login";
            }
            else if($(document).width()>1000) window.location.href="/home";
            else{
                return(
                    <div id="index" className="Container">
                        <Header type="mobile" />
                        <Content type='mobile'>
                            {this.props.children}
                        </Content>
                    </div>
                );
            }
        }
});
export { M_IndexPage };