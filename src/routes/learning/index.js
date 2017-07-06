import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import {  Row, Col, Timeline, Icon, Tag  } from 'antd'

function Learning(){
    return (
        <Row type="flex" justify="center" align="top" className={styles.learningBox}>
            <Col span={16} className={styles.history}>
                <Timeline className={styles.timeLine}>
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
                    <Timeline.Item className={styles.end}><center>没有了哦~~~~( •̀ ω •́ )✧</center></Timeline.Item>
                </Timeline>
            </Col>
            <Col span={8} className={styles.hot}>
                <Col className={styles.hotClasses}>
                    <Row className={styles.title}>
                        <center><span>大家都在学</span></center>
                    </Row>
                    <Row type="flex" justify="center">
                        <ClassTag classID='react' classLink='http://www.baidu.com' />
                        <ClassTag classID='react-dom' />
                        <ClassTag classID='webpack' />
                        <ClassTag classID='react-redux' />
                        <ClassTag classID='react-route' />
                        <ClassTag classID='react-server' />
                        <ClassTag classID='react-native' />
                        <ClassTag classID='express' />
                        <ClassTag classID='atool-build' />
                        <ClassTag classID='jquery' />
                        <ClassTag classID='echarts' />
                    </Row>
                </Col>
            </Col>
        </Row>
    );
}

function HistoryLi(){
    return(
        <Timeline.Item className={styles.historyLi}>
            <Col span={4} className={styles.time}>2017-07-01</Col>
            <Col span={6} className={styles.cover}><img /></Col>
            <Col span={13} className={styles.info}>
                <Row className={styles.title}>
                    <span>React开发教程：从入门到转行</span>
                </Row>
                <Row className={styles.desc}>
                    <span>退学第一课：环境安装</span>
                </Row>
                <Row className={styles.content}>
                    <Col span={16}>上次看到：1分钟</Col>
                    <Col span={8}><a>继续学习</a></Col>
                </Row>
                <Row className={styles.divide}></Row>
            </Col>
            <Col span={1}>
                <Row type="flex" justify="center" align="middle"className={styles.delete}>
                    <Icon type="delete" size="large" />
                </Row>
            </Col>
        </Timeline.Item>
    );
}

function ClassTag({classID,classLink}){
    return (
        <Tag color="blue" className={styles.classTag}><a href={classLink}>{classID}</a></Tag>
    );
}

export default { Learning };
