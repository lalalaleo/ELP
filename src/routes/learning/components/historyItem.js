import React from 'react';
import {  Row, Col, Timeline, Icon  } from 'antd'


const HistoryItem = React.createClass({
    render: function(){
        return(
            <Timeline.Item className="historyItem">
                <Col span={4} className="time">{this.props.data.time}</Col>
                <Col span={6} className="cover"><img src={this.props.data.cover} /></Col>
                <Col span={13} className="info">
                    <Row className="title">
                        <a href={this.props.data.classesHref}><span>{this.props.data.classesName}</span></a>
                    </Row>
                    <Row className="desc">
                        <span>{this.props.data.className}</span>
                    </Row>
                    <Row className="historyLi_content">
                        <Col span={16}>进度：{this.props.data.progress}</Col>
                        <Col span={8}><a href={this.props.data.href}>继续学习</a></Col>
                    </Row>
                    <Row className="divide"></Row>
                </Col>
                <Col span={1}>
                    <Row type="flex" justify="center" align="middle"className="delete">
                        <a className="btnDelete" onClick={()=>this.props.historyDelete(this.props.data.classesName)}>
                            <Icon  type="delete" size="large" />
                        </a>
                    </Row>
                </Col>
            </Timeline.Item>
        );
    }
});

export {HistoryItem};
