import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import {  Row, Col, Icon, Card, Carousel  } from 'antd'
const Recommend = React.createClass({
    render: function (){
        return (
            <div className="recommendBox">
                <div className="contentBox">
                    <Row className="title"><h2>精选与推荐</h2></Row>
                    <Row>
                        <Carousel className="carousel">
                            <div>
                                <CarouselItem />
                            </div>
                            <div>
                                <CarouselItem />
                            </div>
                            <div>
                                <CarouselItem />
                            </div>
                            <div>
                                <CarouselItem />
                            </div>
                        </Carousel>
                    </Row>
                </div>
                <div className="contentBox">
                    <Row className="title"><h2>精选与推荐</h2></Row>
                    <Row>
                        <Col span="12">123</Col>
                        <Col span="12">12</Col>
                    </Row>
                </div>
                <div className="contentBox">
                    <Row className="title"><h2>精选与推荐</h2></Row>
                    <Row>
                        <Col span="12">123</Col>
                        <Col span="12">12</Col>
                    </Row>
                </div>
            </div>
        );
    }
});

const RecmdClassCard = React.createClass({
    render: function(){
        return(
            <Card style={{ width: 440 }} bodyStyle={{ padding: 0 }} className="recmdClassCard">
                <div className="recmdClassCard-image">
                <img width="100%" />
                </div>
                <div className="recmdClassCard-card">
                <h3>React开发教程：从入门到转行</h3>
                <p>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
                </div>
            </Card>
        );
    }
});
const CarouselItem = React.createClass({
    render: function(){
        return(
            <div className="carouselItem">
                <img src="/image/cover_react_blue.png" />
                <Row>
                <div className="carouselContent">
                    <div>
                        <h3>React开发教程：从入门到转行</h3>
                        <p>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
                    </div>
                </div>
                </Row>
            </div>
        );
    }
});

export { Recommend };
