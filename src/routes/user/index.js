import React from 'react'
import styles from './index.less'
import { Row, Col, Icon } from 'antd'

const UserPage = React.createClass({
    render: function(){
        return(
            <Row id="UserPage" className="page_content">
                <Row type="flex" justify="center" id="ProfileHeader">
                    <Col id="ProfileCard" span="24">
                        <div>
                            <center>
                                <img src="/image/avatar/test_avatar.png" style={{width:120,height:120,marginBottom:15,borderTopLeftRadius:999,borderTopRightRadius:999,borderBottomLeftRadius:999,borderBottomRightRadius:999}} />
                                <p style={{fontSize:32,fontWeight:"bold",color:"black",marginBottom:10}}>Leo.Hu</p>
                                <p style={{fontSize:15,color:"black"}}>前端部门</p>
                            </center>
                        </div>
                    </Col>
                     <Col id="ProfileInfo" span="24">
                        <Row type="flex" justify="start" align="top">
                            <Col span={6} className="studyClassesNum">
                                <div>
                                    <Icon name="icon" type="book" />
                                    <span>课程：</span>
                                    <span>12</span>
                                </div>
                            </Col>
                            <Col span={6} className="studyClassNum">
                                <div>
                                    <Icon name="icon" type="file-text" />
                                    <span>课时：</span>
                                    <span>12</span>
                                </div>
                            </Col>
                            <Col span={6} className="studyClassesTime">
                                <div>
                                    <Icon name="icon" type="clock-circle-o" />
                                    <span>时间：</span>
                                    <span>12</span>
                                </div>
                            </Col>
                            <Col span={6} className="commentNum">
                                <div>
                                    <Icon name="icon" type="edit" />
                                    <span>评论：</span>
                                    <span>12</span>
                                </div>
                            </Col>
                            
                        </Row>
                    </Col> 
                </Row>

                <Row id="ProfileContent">
                    <Row id="ProfileActivityChart">
                        <img src="/image/chart/test_user1.png" />
                    </Row>
                </Row>
                
            </Row>
        );
    }
});

export { UserPage }