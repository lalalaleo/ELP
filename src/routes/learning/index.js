import React from 'react';
import styles from './index.less';
import { HistoryItem } from './components/historyItem';
import { ClassTag } from './components/classTag';
import {  Row, Col, Timeline, Icon, Tag  } from 'antd'

const Learning = React.createClass({
    render: function Learning(){
        var historyData = [
            {
                "classesName":"Java入门",
                "classesHref":"/home/classes",
                "className":"第二章 第二课时",
                "cover":"/image/cover/java.png",
                "progress":"85%",
                "href":"/home/classes/class",
                "time":"2017-07-04"
            },
            {
                "classesName":"JavaEE理解",
                "classesHref":"/home/classes",
                "className":"第一章 第三课时",
                "cover":"/image/cover/javaee.png",
                "progress":"5%",
                "href":"/home/classes/class",
                "time":"2017-07-03"
            },
            {
                "classesName":"Spring入门",
                "className":"第一章 第二课时",
                "cover":"/image/cover/spring.png",
                "progress":"10%",
                "href":"/home/classes/class",
                "time":"2017-07-03"
            },
            {
                "classesName":"Python入门",
                "className":"第一章 第一课时",
                "cover":"/image/cover/python.png",
                "progress":"35%",
                "href":"/home/classes/class",
                "time":"2017-07-01"
            },
            {
                "classesName":"JavaEE理解",
                "className":"第一章 第一课时",
                "cover":"/image/cover/javaee.png",
                "progress":"20%",
                "href":"/home/classes/class",
                "time":"2017-07-01"
            },
        ]

        var recommendData = [
            {
                color: "yellow",
                classesName: "SpringCloud入门",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "React入门",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "Spring理解",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "SpringCloud理解",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "JavaEE进阶",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "Python进阶",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "MySQL进阶",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "Spring实战",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "JavaEE实战",
                classesHref: "/home/classes",
            },
            {
                color: "yellow",
                classesName: "Java实战",
                classesHref: "/home/classes",
            },
        ]

        var hotSearchData = [
            {
                color: "blue",
                classesName: "React",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "Java",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "MySQL",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "PhotoShop",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "PHP",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "需求分析",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "Express",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "产品设计",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "Axure RP",
                classesHref: "/home/classes",
            },
            {
                color: "blue",
                classesName: "JavaEE",
                classesHref: "/home/classes",
            }
        ]

        var HistoryList = historyData.map(function(history){
            return(
                <HistoryItem data={history}/>
            );
        });

        var recommendTagList = recommendData.map(function(recommend){
            return(
                <ClassTag data={recommend}/>
            );
        });

        var hotSearchTagList = hotSearchData.map(function(recommend){
            return(
                <ClassTag data={recommend}/>
            );
        });

        return (
            <Row type="flex" justify="center" align="top" id="learningBox" className="page_content">
                <Col id="history" className="page_content_left">
                    <Timeline className="timeLine">
                        { HistoryList }
                        <Timeline.Item className="end"><center>没有了哦~~~~( •̀ ω •́ )✧</center></Timeline.Item>
                    </Timeline>
                </Col>
                <Col id="hot" className="page_content_right">
                    <Col className="hotClasses">
                        <Row className="title">
                            <center><span>为你推荐</span></center>
                        </Row>
                        <Row type="flex" justify="center">
                            { recommendTagList }
                        </Row>
                    </Col>
                    <Col className="hotClasses">
                        <Row className="title">
                            <center><span>热搜词</span></center>
                        </Row>
                        <Row type="flex" justify="center">
                            { hotSearchTagList }
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

export { Learning };
