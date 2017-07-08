import React from 'react'
import ReactDOM from 'react-dom'
import styles from './header.less'
import {  Row, Col,  Input, Button, Icon, Radio } from 'antd'
const InputGroup = Input.Group
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const IndexToolBar = React.createClass({
    render: function (){
        return (
            <Row type="flex" justify="center" align="middle" className="indexToolBar">
                <Row type="flex" justify="space-around" align="middle" className="toolBar">
                    {/*logo、标题*/}
                    <Col span="6">
                        <Row className="header_logo" type="flex" justify="start" align="middle">
                            <img src="/elp_logo.png" />
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
                                <img  src="/test_avatar.png"></img>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Row>
        )
    }
});

const SegmentCtrl = React.createClass({
    render: function (){
        return (
            <Row type="flex" justify="center" align="middle" className="segmentCtrl">
                <Row type="flex" justify="center" align="middle" className="segmentCtrlBar">
                    <RadioGroup defaultValue="a" size="large">
                        <RadioButton value="a">正在学习</RadioButton>
                        <RadioButton value="b">推荐课程</RadioButton>
                        <RadioButton value="c">全部课程</RadioButton>
                    </RadioGroup>
                </Row>
            </Row>
        )
    }
});

const Header = React.createClass({
    render: function (){
        return(
            <div>
                <div className="vhd" />
                <div className="hd">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export  { Header,IndexToolBar,SegmentCtrl };