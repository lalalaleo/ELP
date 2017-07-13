import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './header.less'
import {  Row, Col,  Input, Button, Icon, Radio } from 'antd'

const InputGroup = Input.Group
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const IndexToolBar = React.createClass({
    render: function (){
        function messageShow(){
            if($("#coverLayer").length==0){
                $('body').append("<div id='coverLayer' />");
                $("#messageIcon").append("<div class='arrow' />");
                ReactDOM.render(<Message />,document.getElementById("messageBox"));
                $("#coverLayer").click(function(){messageRemove();});
            }
        }
        function messageRemove(){
            $(".arrow").remove();
            $("#messageBox").children().remove();
            $("#coverLayer").remove();
        }
        function btnSaerch(){
            window.location.href="/home/search";
        }
        return (
            <Row type="flex" justify="center" align="middle" className="indexToolBar">
                <Row type="flex" justify="space-around" align="middle" className="toolBar">
                    {/*logo、标题*/}
                    <Col span="1">
                        <Row className="header_logo" type="flex" justify="start" align="middle">
                            <a href="/home"><img src="/image/elp_logo.png" /></a>
                        </Row>
                    </Col>
                    {/*导航*/}
                    <Col span="8">
                        <SegmentCtrl />
                    </Col>
                    {/*搜索框*/}
                    <Col span="9">
                        <InputGroup className="search">
                            <Input size="large" placeholder="搜索"></Input>
                            <Button type="primary" size="large" onClick={btnSaerch}><Icon type="search" /></Button>
                        </InputGroup>
                    </Col>
                    {/*消息、个人信息*/}
                    <Col span="6">
                        <Row  type="flex" justify="end" align="middle">
                            <div id="messageIcon" onClick ={messageShow}>
                                <Button  shape="circle" size="large" ><Icon type="message" /></Button>
                            </div>
                            <Button  className="avatar" shape="circle" size="large">
                                <img  src="/image/test_avatar.png"></img>
                            </Button>
                        </Row>
                    </Col>
                    <Col span="16" />
                    <Col span="8"  id="messageBox">
                    </Col>
                </Row>
            </Row>
        )
    }
});
const SegmentCtrl = React.createClass({
    onChange(e){
        this.setState({
            value: e.target.value
        });
        window.location.href="/home/"+e.target.value;
    },
    render: function (){
        return (
            <Row type="flex" justify="center" align="middle" className="segmentCtrl">
                <Row type="flex" justify="center" align="middle" className="segmentCtrlBar">
                    <RadioGroup  size="large" onChange={this.onChange}  >
                        <RadioButton value="learning">正在学习</RadioButton>
                        <RadioButton value="discover">推荐课程</RadioButton>
                        <RadioButton value="all">全部课程</RadioButton>
                    </RadioGroup>
                </Row>
            </Row>
        )
    }
});

const Message = React.createClass({
   render: function(){
       return(
           <div className="message">
                <div className="messageHeader">
                    <h3>消息</h3>
                </div>
           </div>
       );
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