import React from 'react'
import style from './comments.less'
import { Icon, Menu, Row, Col, Input, Button } from 'antd'

const Comments = React.createClass({
    render: function(){
        var allData = this.props.data;
        const CommentsList = this.props.data.map(function(comment){
            return(
                <CommentItem data={ comment } allData={ allData } />
            );
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
            for(var i in this.props.allData){
                const obj = this.props.allData[i];
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
                < AnswerContent answerID={this.props.data.answerID} allData={this.props.allData} />
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