import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import {  Row, Col, Timeline, Icon, Tag  } from 'antd'
const Learning = React.createClass({
    render: function Learning(){
        return (
            <Row type="flex" justify="center" align="top" className="learningBox">
                <Col span={16} className="history">
                    <Timeline className="timeLine">
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <HistoryLi />
                        <Timeline.Item className="end"><center>没有了哦~~~~( •̀ ω •́ )✧</center></Timeline.Item>
                    </Timeline>
                </Col>
                <Col span={8} className="hot">
                    <Col className="hotClasses">
                        <Row className="title">
                            <center><span>为你推荐</span></center>
                        </Row>
                        <Row type="flex" justify="center">
                            <ClassTag color='yellow' classID='React开发教程：从入门到转行' classLink='http://www.baidu.com' />
                            <ClassTag color='yellow' classID='react-dom教程' />
                            <ClassTag color='yellow' classID='webpack入门' />
                            <ClassTag color='yellow' classID='react-server' />
                            <ClassTag color='yellow' classID='react-native' />
                            <ClassTag color='yellow' classID='react-redux开发' />
                            <ClassTag color='yellow' classID='react-router v4更新' />
                            <ClassTag color='yellow' classID='express轻量node后端框架' />
                            <ClassTag color='yellow' classID='atool-build工具' />
                            <ClassTag color='yellow' classID='jquery框架简介' />
                            <ClassTag color='yellow' classID='echarts入门' />
                        </Row>
                    </Col>
                    <Col className="hotClasses">
                        <Row className="title">
                            <center><span>热搜词</span></center>
                        </Row>
                        <Row type="flex" justify="center">
                            <ClassTag color='blue' classID='react' classLink='http://www.baidu.com' />
                            <ClassTag color='blue' classID='react-dom' />
                            <ClassTag color='blue' classID='webpack' />
                            <ClassTag color='blue' classID='react-redux' />
                            <ClassTag color='blue' classID='react-route' />
                            <ClassTag color='blue' classID='react-server' />
                            <ClassTag color='blue' classID='react-native' />
                            <ClassTag color='blue' classID='express' />
                            <ClassTag color='blue' classID='atool-build' />
                            <ClassTag color='blue' classID='jquery' />
                            <ClassTag color='blue' classID='echarts' />
                        </Row>
                    </Col>
                    <Col className="infoBox">
                        <span>Zero团队 · </span>
                        <span>隐私条例 · </span>
                        <span>© 2017 ELP</span>
                    </Col>
                </Col>
            </Row>
        );
    }
});

function HistoryLi(){
    return(
        <Timeline.Item className="historyLi">
            <Col span={4} className="time">2017-07-01</Col>
            <Col span={6} className="cover"><img src="/image/cover_react_blue.png" /></Col>
            <Col span={13} className="info">
                <Row className="title">
                    <span>React开发教程：从入门到转行</span>
                </Row>
                <Row className="desc">
                    <span>退学第一课：环境安装</span>
                </Row>
                <Row className="historyLi_content">
                    <Col span={16}>上次看到：1分钟</Col>
                    <Col span={8}><a>继续学习</a></Col>
                </Row>
                <Row className="divide"></Row>
            </Col>
            <Col span={1}>
                <Row type="flex" justify="center" align="middle"className="delete">
                    <Icon type="delete" size="large" />
                </Row>
            </Col>
        </Timeline.Item>
    );
}

function ClassTag({color,classID,classLink}){
    return (
        <Tag color={color} className="classTag"><a href={classLink}>{classID}</a></Tag>
    );
}

export { Learning };
