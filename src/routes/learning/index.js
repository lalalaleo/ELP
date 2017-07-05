import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Header, SegmentCtrl } from '../../components/layout/header';
import {  Row, Col, Timeline, Icon, Tag  } from 'antd'

function Learning(){
    return (
        <Row type="flex" justify="center" align="top" id="learningBox">
            <Col span={16} className="history">
                <Timeline className="timeLine">
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
                        <center><span>大家都在学</span></center>
                    </Row>
                    <Row >
                        <ClassTag {...'React'} />
                        <ClassTag {...'React'} />
                        <ClassTag {...'React'} />
                        <ClassTag {...'React'} />
                        <ClassTag {...'React'} />
                        <ClassTag {...'React'} />
                        <ClassTag {...'React'} />
                    </Row>
                </Col>
            </Col>
        </Row>
    );
}

function HistoryLi(){
    return(
        <Timeline.Item className="historyLi">
            <Col span={4} className="time">2017-07-01</Col>
            <Col span={6} className="cover"><img /></Col>
            <Col span={13} className="info">
                <Row className="title">
                    <span>React开发教程：从入门到转行</span>
                </Row>
                <Row className="desc">
                    <span>退学第一课：环境安装</span>
                </Row>
                <Row className="content">
                    <Col span={16}>上次看到：1分钟</Col>
                    <Col span={8}><a>继续观看</a></Col>
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

function ClassTag({classID}){
    return (
        <Tag color="#2db7f5">{classID}</Tag>
    );
}

function App(){
    return(
        <div>
            <Header />
            <SegmentCtrl />
            <Row type="flex" justify="center" align="top" id="content">
                <Learning />
            </Row>
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById('root'));