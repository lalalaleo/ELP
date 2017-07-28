import React from 'react'
import style from './comments.less'
import { Icon, Menu, Row, Col, Input, Button } from 'antd'

const CommentsData = [
            {
                id: '1',
                classesName: "Java入门",
                className:"Java 中的异常抛出以及自定义异常",
                sender: {
                    name: '林罡',
                    avatar: '/image/avatar/test/test_1.png',
                },
                answerID: '',
                content: '其实很多人觉得难懂。我是觉得听不懂的你就多听听，去别的网站上面听，很多东西除非是天才，不然像第一次听你就听懂还是有难度的，我就是这种学习网站多找几个，一个内容听不懂就多去听不同版本的讲解，不要觉得累，学习源于热爱，汗水是不会骗人的，想要学得好就要花功夫，还有要自己动手打代码！！！！！',
                time:"两天前",
            },
            {
                id: '2',
                classesName: "Java入门",
                className:"Java 中的异常抛出以及自定义异常",
                sender: {
                    name: '陈文军',
                    avatar: '/image/avatar/test/test_2.png',
                },
                answerID: '1',
                content: '自定义异常一般适用于大工程  所以对我等菜鸟来说  很少能见到   所以这一章只是了解就行',
                time:"一天前",
            },
            {
                id: '3',
                classesName: "Java入门",
                className:"Java 中的异常抛出以及自定义异常",
                sender: {
                    name: '杨攻',
                    avatar: '/image/avatar/test/test_3.png',
                },
                answerID: '',
                content: '老师非常的棒，我是先看书再看这个视频正好起到相辅相成的作用，感谢。',
                time:"3小时",
            },
            {
                id: '4',
                classesName: "Java入门",
                className:"Java 中的异常抛出以及自定义异常",
                sender: {
                    name: '林罡',
                    avatar: '/image/avatar/test/test_1.png',
                },
                answerID: '2',
                content: '确实是这样',
                time:"16分钟",
            },
        ]

const Comments = React.createClass({
    render: function(){
        const CommentsList = CommentsData.map(function(comment){
            if(comment.sender.name=="林罡"){
                return(
                    <CommentItem data={ comment } />
                );
            }
        });
        return(
            <div>
                { CommentsList }
                <Row type="flex" justify="center" align="middle" style={{lineHeight:4,marginBottom:20}}><p>没有了呢 ╮(╯▽╰)╭</p></Row>
            </div>
        );
    }
});

const AnswerContent = React.createClass({
    render: function(){
        if(this.props.answerID!=''){
            for(var i in CommentsData){
                const obj = CommentsData[i];
                if(obj.id==this.props.answerID){
                    return(
                        <Row className="answerItem">
                             {/* <CommentItem data={ obj } /> */}
                            <div>
                                <Row>
                                    <p name="hd">回复 @<span name="userName">{obj.sender.name}</span> 评论的：</p>
                                    <p name="content">{obj.content}</p>
                                </Row>
                            </div> 
                        </Row>
                    );
                }
            }
        }
        else return(<Row></Row>) ;
    }
});

const CommentItem = React.createClass({
    render: function(){
        return(
            <div className="class_comments_item">
                <a href='/home/classes'><p name="classesName">{this.props.data.classesName}</p></a>
                <a href='/home/class'><p name="className">{this.props.data.className}</p></a>
                <Row type="flex" justify="start" className="class_comments_item_hd">
                    <Col span={8}>
                        <Row type="flex" justify="start">
                            <Col>
                                <img src={ this.props.data.sender.avatar } />
                            </Col>
                            <Col>
                                <span name="sender_name">{ this.props.data.sender.name }</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <p name="sender_time">{ this.props.data.time }</p>
                    </Col>
                </Row>
                < AnswerContent answerID={this.props.data.answerID} />
                <Row className="class_comments_item_content">
                    <p name="content">{ this.props.data.content }</p>
                </Row>
                <Row type="flex" justify="end" align="bottom" className="class_comments_item_ft">
                    <Col><a name="report"><Icon type="flag" /><span>举报</span></a></Col>
                    <Col><a name="answer"><Icon type="edit" /><span>回复</span></a></Col>
                </Row>
            </div>
        );
    }
});

export { Comments }