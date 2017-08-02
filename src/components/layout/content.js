import React from 'react';
import styles from './content.less';
import {  Row, Col  } from 'antd'

const Content = React.createClass({
    setPageID: function(){
        this.setState({PageID: val});
    },
    render: function(){
        var chooseContentStyle = 'page';
        if(this.props.type=='mobile'){
            chooseContentStyle = 'm_page';
        }
        return(
            <Row type="flex" justify="center" align="top" id="content">
                <Col id={chooseContentStyle}>
                    {this.props.children}
                 </Col>
            </Row>
        );
    }
});

export { Content };