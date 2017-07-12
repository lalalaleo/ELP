import React from 'react';
import styles from './content.less';
import {  Row, Col  } from 'antd'

const Content = React.createClass({
    setPageID: function(){
        this.setState({PageID: val});
    },
    render: function(){
        return(
            <Row type="flex" justify="center" align="top" id="content">
                <Col className="page">
                    {this.props.children}
                 </Col>
            </Row>
        );
    }
});

export { Content };