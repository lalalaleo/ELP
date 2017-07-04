import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './header.less'
import {  Row, Col,  Input, Button, Icon, Tabs  } from 'antd'
const InputGroup = Input.Group;
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}

function Header(){
    return (
        <Row type="flex" justify="space-around" align="middle" className="hd">
            {/*logo、标题*/}
            <Col span="6">
                <Row className="logo" type="flex" justify="start" align="middle">
                    <img className="logo" src="../public/elp_logo.png" />
                    <span>E L P</span>
                </Row>
            </Col>
            {/*搜索框*/}
            <Col span="8">
                <InputGroup className="search">
                    <Input size="large" placeholder="搜索"></Input>
                    <Button type="primary" size="large"><Icon type="search" /></Button>
                </InputGroup>
            </Col>
            {/*消息、个人信息*/}
            <Col span="10">
                <Row  type="flex" justify="end" align="middle">
                    <Button  className="message" shape="circle" size="large"><Icon type="message" /></Button>
                    <Button  className="avatar" shape="circle" size="large">
                        <img  src="../public/test_avatar.png"></img>
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

function TabBar(){
    return (
        <Row className="tab" type="flex" justify="start" >
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="正在学习" key="1">选项卡一内容</TabPane>
                <TabPane tab="推荐课程" key="2">选项卡二内容</TabPane>
                <TabPane tab="全部课程" key="3">选项卡三内容</TabPane>
            </Tabs>
        </Row>
    );
}

ReactDOM.render(<TabBar />,document.getElementById("root"));