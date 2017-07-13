import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Icon, Menu, Row, Col } from 'antd'

const Class = React.createClass({
    render: function(){
        return(
            <div id="Class" className="page_content">
                <div id="Class_content" className="page_content_item">
                     {/*<img src="/image/cover_react_blue.png" /> */}
                    <iframe src="https://www.youtube.com/embed/YWaptz0EUCk" frameborder="0" allowfullscreen></iframe>
                    
                </div>
            </div>
        );
    }
});

export { Class }