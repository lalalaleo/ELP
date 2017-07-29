import React, { Component } from 'react'
import styles from './index.less'
import { Row, Col, Icon } from 'antd'

class AdminPage extends Component {
    render() {
        return (
            <Row id="AdminPage" className="page_content">
                <Row type="flex" justify="center" id="ProfileHeader">
                    <Col id="ProfileCard" span="24">
                        <div>
                            <center>
                                <img src="/image/avatar/test/test_1.png" style={{width:120,height:120,marginBottom:15,borderTopLeftRadius:999,borderTopRightRadius:999,borderBottomLeftRadius:999,borderBottomRightRadius:999}} />
                                <p style={{fontSize:32,fontWeight:"bold",color:"black",marginBottom:10}}>林罡</p>
                                <p style={{fontSize:15,color:"black"}}>后端部门</p>
                            </center>
                        </div>
                    </Col>
                     <Col id="ProfileInfo" span="24">
                        <Row type="flex" justify="start" align="top">
                            <Col span={5} className="studyClassesNum">
                                <div>
                                    <Icon name="icon" type="book" />
                                    <span>课程：</span>
                                    <span>5</span>
                                </div>
                            </Col>
                            <Col span={5} className="studyClassNum">
                                <div>
                                    <Icon name="icon" type="file-text" />
                                    <span>课时：</span>
                                    <span>57</span>
                                </div>
                            </Col>
                            <Col span={9} className="studyClassesTime">
                                <div>
                                    <Icon name="icon" type="clock-circle-o" />
                                    <span>时间：</span>
                                    <span>11 : 14 : 27</span>
                                </div>
                            </Col>
                            <Col span={5} className="commentNum">
                                <div>
                                    <Icon name="icon" type="edit" />
                                    <span>评论：</span>
                                    <span>2</span>
                                </div>
                            </Col>
                            
                        </Row>
                    </Col> 
                </Row>
            </Row>
        );
    }
}

export { AdminPage };