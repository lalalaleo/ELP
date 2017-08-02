import $ from 'jquery'
import React, { Component } from 'react';
import style from './index.less'

import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Comments } from './components/comments'
import { ClassList } from '../classes/components/classList'
import { Icon, Menu, Row, Col, Input, Button, message, Modal } from 'antd'

import PDFObject from '../../assets/pdfobject.min.js'
import { Player } from 'video-react'
import "../../assets/video-react.css"


class Class extends Component{
    constructor(props){
        super(props);
        this.handleAnswerComment = this.handleAnswerComment.bind(this);
        this.commnetsListChange = this.commnetsListChange.bind(this);
        this.commentsObjChange = this.commentsObjChange.bind(this);
        this.shareComments = this.shareComments.bind(this);
        this.answerComment = this.answerComment.bind(this);
        this.state={
            answerID:"",
            answerName:"",
            answerContent:"",
            commnetsList:[],
            visible: false
        };
    }
    componentDidMount(){
        var commnetsListChange = this.commnetsListChange;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=commentsList",
            success: function(data){
                if(data.code==200){
                    commnetsListChange(data.data.commentsList);
                }
            },
        });
        if(this.props.location.state.data!=null){
            var data = JSON.parse(this.props.location.state.data);
            this.commentsObjChange(data);
            this.showModal();
            this.props.location.state.data=null;
        }
    }
    commnetsListChange(data){
        this.setState({
            commnetsList:data
        });
    }
    commentsObjChange(data){
        console.log("data:",data);
        this.setState({
            answerID: data.id,
            answerName: data.sender.name,
            answerContent: data.content,
        });
    }
    shareComments(){
        var commnetsListChange = this.commnetsListChange;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=shareComment&&content="+$("#commentTextArea").val(),
            success: function(data){
                console.log(data);
                if(data.code==200){
                    commnetsListChange(data.data.commentsList);
                    $("#commentTextArea").val("");
                    message.success('发布成功');
                }
            },
        });
    }
    answerComment(){
        var commnetsListChange = this.commnetsListChange;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=answerComment&answerID="+this.state.answerID+"&content="+$("#AnswerTextArea").val(),
            success: function(data){
                console.log(data);
                if(data.code==200){
                    commnetsListChange(data.data.commentsList);
                    $("#AnswerTextArea").val("");
                    message.success('回复成功');
                }
            },
        });
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.answerComment();
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleAnswerComment = (e) => {
        
        this.commentsObjChange(e);
        this.showModal();
    }
    render(){
        return(
            <div id="Class" className="page_content">
                <div id="Class_content" className="page_content_item">
                          <Player>
                            <source src="/vedio/test.mp4" />
                        </Player>  
                </div>
                <Row id="Class_ctrl" className="page_content_item">
                    <Col span="8">
                        <Row type="flex" justify="start" align="middle">
                            <a><span>上一课时：</span>Java中通过案例学习 try...catch...finally<span></span></a>
                        </Row>
                    </Col>
                    <Col span="8">
                        <Row id='Class_times' type="flex" justify="center" align="middle">
                            <Icon type="clock-circle-o" /><span>4 : 32</span>
                        </Row>
                    </Col>
                    <Col span="8">
                        <Row type="flex" justify="end" align="middle">
                            <a><span>下一课时：</span>Java 中的异常链<span></span></a>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col id="Class_layout_left" className="page_content_left">

                        <Row id="Class_title" className="page_content_item">
                            <Col span="16"><span name='classes_name'>Java入门</span><span name='class_name'>Java 中的异常抛出以及自定义异常</span></Col>
                            <Col span="8"><p name="pageview">127次观看</p></Col>
                        </Row>
                    
                        <Row id="Class_info" className="page_content_item">
                            <h4>发布于 2017年7月12日</h4>
                            <p>异常指不期而至的各种状况，如：文件找不到、网络连接失败、非法参数等。异常是一个事件，它发生在程序运行期间，干扰了正常的指令流程。Java通 过API中Throwable类的众多子类描述各种不同的异常。因而，Java异常都是对象，是Throwable子类的实例，描述了出现在一段编码中的 错误条件。当条件生成时，错误将引发异常。</p>
                        </Row>
                    
                        <Col id="Class_comment_textarea" className="page_content_item">
                            <Row>
                                <Input id="commentTextArea" type="textarea" placeholder="写下你的评论" autosize={{ minRows: 3, maxRows: 8 }} />
                                </Row>
                                <Row type="flex" justify="end" align="center">
                                <Button type="primary" size="small" onClick={this.shareComments}>发送</Button>
                                </Row>
                        </Col>
                        <Col id="Class_comments" className="page_content_item">
                             <Comments data={this.state.commnetsList} handleAnswerComment={this.handleAnswerComment} /> 
                        </Col>

                    </Col>
                    
                    <Col id="Class_layout_right" className="page_content_right">
                        <div id="Class_item_list" className="page_content_item">
                            <h3>课时目录</h3>
                            <ClassList defaultKey={['4']} />
                        </div>
                    </Col>
                </Row>

                <Modal
                    title={"回复 "+this.state.answerName}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div id="AnswerModal">
                        <div className="answerBox">
                            <p>{this.state.answerContent}</p>
                        </div>
                        <Input id="AnswerTextArea" type="textarea" placeholder="写下你的评论" autosize={{ minRows: 3, maxRows: 8 }} />
                    </div>
                </Modal>
            </div>
        );
    }

}

export { Class }