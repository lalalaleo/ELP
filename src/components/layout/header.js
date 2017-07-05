import React from 'react'
import ReactDOM from 'react-dom'
import styles from './header.less'
import {  Row, Col,  Input, Button, Icon  } from 'antd'

const InputGroup = Input.Group
const ButtonGroup = Button.Group

function Header(){
    return (
        <Row type="flex" justify="center" align="middle" className="hd">
            <Row type="flex" justify="space-around" align="middle" className="hdbar">
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
        </Row>
    )
}

function SegmentCtrl(){
    return (
        <Row type="flex" justify="center" align="middle" className="segmentCtrl">
            <Row type="flex" justify="center" align="middle" className="segmentCtrlBar">
                <ButtonGroup>
                    <Button size="large" type="primary" >正在学习</Button>
                    <Button size="large" type="primary" ghost>推荐课程</Button>
                    <Button size="large" type="primary" ghost>全部课程</Button>
                </ButtonGroup>
            </Row>
        </Row>
    )
}

export default { Header,SegmentCtrl }