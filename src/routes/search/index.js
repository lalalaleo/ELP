import React from 'react'
import ReactDOM from 'react-dom'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Table, Row, Col } from 'antd'

const Search = React.createClass({
    render: function(){
        return (
            <div>
                <Header>
                    <IndexToolBar />
                </Header>
                <Row type="flex" justify="center" align="top" className="content">
                    <Col style={{width:1000,height:200,backgroundColor:'#000000'}}></Col>
                </Row>
            </div>
        );
    }
});

export { Search }