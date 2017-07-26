import $ from 'jquery'
import React from 'react';
import styles from './index.less';
import { HistoryItem } from './components/historyItem';
import { ClassTag } from './components/classTag';
import {  Row, Col, Timeline, Icon, Tag  } from 'antd'

const Learning = React.createClass({
    getInitialState: function(){
        return { 
            recommendData: [],
            hotSearchData: [],
        };
    },
    _recommendChange: function(data){
        this.setState({recommendData:data});
    },
    render: function Learning(){
        var recommendData = [];
        var User = JSON.parse(localStorage.User); 
        var getRecommendData = this._recommendChange;
        // $.ajax({
        //     type: "post",
        //     // url: "http://101.70.100.6:9018/elpcon/viewrecommendcourse",
        //     url: "http://127.0.0.1:8888/midwayIsland/data",
        //     dataType: "JSON",
        //     data: "userId="+User.objectId,
        //     success: function(data){
        //             console.log(data);
        //         if(data.code==200){
        //             recommendData = data.data;
        //             getRecommendData(data.data);
        //         }
        //     },
        // });
        

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

        var hotSearchData = [
            {
                color: "blue",
                courseName: "React",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "Java",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "MySQL",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "PhotoShop",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "PHP",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "需求分析",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "Express",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "产品设计",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "Axure RP",
                courseUrl: "/home/classes",
            },
            {
                color: "blue",
                courseName: "JavaEE",
                courseUrl: "/home/classes",
            }
        ]

        // this.setState={recommendData : recommendData};
        this.state.hotSearchData = hotSearchData;

        var HistoryList = historyData.map(function(history){
            return(
                <HistoryItem data={history}/>
            );
        });

        var recommendTagList = this.state.recommendData.map(function(recommend){
            recommend.color="yellow";
            return(
                <ClassTag data={recommend}/>
            );
        });

        var hotSearchTagList = this.state.hotSearchData.map(function(recommend){
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
