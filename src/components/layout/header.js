import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
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
            var searchInfo = $("#SearchInput").val();
            browserHistory.push({
                pathname:'/home/search',
                state:{searchInfo:searchInfo}
            });
        }
        function LinkToAdmin(){
            window.location.href="/home/admin";
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
                            <Input id="SearchInput" size="large" placeholder="搜索"></Input>
                            <Button type="primary" size="large" onClick={btnSaerch}><Icon type="search" /></Button>
                        </InputGroup>
                    </Col>
                    {/*消息、个人信息*/}
                    <Col span="6">
                        <Row  type="flex" justify="end" align="middle">
                            <div id="messageIcon" onClick ={messageShow}>
                                <Button  shape="circle" size="large" ><Icon type="message" /></Button>
                            </div>
                            <Button  className="avatar" shape="circle" size="large" onClick={LinkToAdmin}>
                                <img  src="/image/avatar/test/test_1.png"></img>
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
        var terminal = this.props.type;
        if(terminal=="mobile") terminal="/m/";
        else terminal="/home/";
        this.setState({
            value: e.target.value
        });
        window.location.href=terminal+e.target.value;
    },
    render: function (){
        return (
            <Row type="flex" justify="center" align="middle" className="segmentCtrl"style={{height:this.props.size}}>
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
        var testData = [
            {
                id: '2',
                sender: {
                    name: '陈文军',
                    avatar: '/image/avatar/test/test_2.png',
                },
                answerID: '1',
                content: '自定义异常一般适用于大工程  所以对我等菜鸟来说  很少能见到   所以这一章只是了解就行',
                time:"一天前",
            },
        ]
        function messageRemove(){
            $(".arrow").remove();
            $("#messageBox").children().remove();
            $("#coverLayer").remove();
        }
        function LinkHref(){
            browserHistory.push({
                pathname: "/home/classes/class",
                state: {
                    data:JSON.stringify(testData[0])
                },
            });
            messageRemove();
        }
        const messageList = testData.map(function(message){
            return(
                <Row className="messageItem" type="flex" justify="start" align="middle" onClick={ LinkHref }>
                    <Col span="4" className="mAvatar">
                        <img src={message.sender.avatar} />
                    </Col>
                    <Col offset="2" span="14"  className="mContent">
                        <p name="userName">{message.sender.name}</p>
                        <p name="content" >{message.content.substring(0,25)+"..."}</p>
                    </Col>
                    <Col span="4" className="mTime">
                        <p>{message.time}</p>
                    </Col>
                </Row>
            );
        });
        return(
            <div className="message">
                <div className="messageHeader">
                    <h3>消息</h3>
                </div>
                <div className="messageContent">
                    { messageList }
                </div>
            </div>
        );
   }         
});

const M_IndexToolBar = React.createClass({
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
                    <Col span="12">
                        <Row className="header_logo" type="flex" justify="start" align="middle">
                            <a href="/home"><img src="/image/elp_logo.png" /></a>
                            <span >ELP</span>
                        </Row>
                    </Col>
                    {/*消息、个人信息*/}
                    <Col span="12">
                        <Row  type="flex" justify="end" align="middle">
                            <div id="searchIcon" onClick ={messageShow}>
                                <Button  shape="circle" size="large" ><Icon type="search" /></Button> 
                            </div>
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

const Header = React.createClass({
    render: function (){
            switch(this.props.type){
                case 'desktop' : return(
                    <div>
                        <div className="vhd" style={{height:64}} />
                        <div className="hd">
                            <IndexToolBar />
                        </div>
                    </div>
                );
                case 'mobile' : return(
                    <div>
                        <div className="vhd" style={{height:112}} />
                        <div className="hd">
                            <M_IndexToolBar />
                            <SegmentCtrl size={48} type="mobile" />
                        </div>
                    </div>
                );
                default: return;
            }
    }
});

export  { M_IndexToolBar,Header,IndexToolBar,SegmentCtrl };