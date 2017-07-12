import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Table, Row, Col } from 'antd'

const Classes = React.createClass({
    render: function(){
        return (
            <div>
                <Header>
                    <IndexToolBar />
                </Header>
                <Content>
                    <div id="Classes" className="page_content">
                        123
                    </div>
                </Content>
            </div>
        );
    }
});

export { Classes }