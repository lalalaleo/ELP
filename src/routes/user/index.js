import React from 'react'
import styles from './index.less'
import { Row, Col } from 'antd'

const UserPage = React.createClass({
    render: function(){
        return(
            <Row id="UserPage" className="page_content">
                <Row id="Profile" type="flex" justify="start" align="top">
                    
                    <Col className="ProfileHeader" span={7}>
                        <Row type="flex" justify="center" align="top">
                            <Col className="profileHeader-avatar"><img src='/image/avatar/test_avatar.png' /></Col>
                        </Row>
                    </Col>

                    <Col className="ProfileContent" offset={1} span={16}>
                        <Row className="ProfileContent-info">
                            <span name="userName">Leo.Hu</span>
                            <span name="department">前端部门</span> 
                        </Row>
                    </Col>
                </Row>
                
            </Row>
        );
    }
});

export { UserPage }