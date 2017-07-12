import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import {  Row, Col, Icon, Card, Carousel, Table ,Radio } from 'antd'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Recommend = React.createClass({
    render: function (){
        
        return (
            <div className="recommendBox">
                {/*精选与推荐*/}
                <div className="contentBox">
                    <Row className="title"><h2>精选</h2></Row>
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
                {/*热门课程*/}
                <PopularClasses />
                {/*学霸们*/}
                <div className="contentBox">
                    <Row className="title"><h2>学霸们</h2></Row>
                    <Row type="flex" justify="center" align="top" style={{marginLeft:50,marginRight:50}}>
                        <GlegooderItem />
                        <GlegooderItem />
                        <GlegooderItem />
                        <GlegooderItem />
                        <GlegooderItem />
                        <GlegooderItem />
                        <GlegooderItem />
                        <GlegooderItem />
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
const PopularClasses = React.createClass({
    render: function(){
        const columns = [
            {
                title: 'Cover',
                dataIndex: 'cover',
            }, 
            {
                title: 'Name',
                dataIndex: 'name',
            }, 
            {
                title: 'Info',
                dataIndex: 'info',
            }
        ];
        const data = [
            {
                key:1,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:2,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:3,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:4,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:5,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:6,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:7,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:8,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:9,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
            {
                key:10,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:480}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。React为程序员提供了一种子组件不能直接影响外层组件（"data flows down"）的模型，数据改变时对HTML文档的有效更新，和现代单页应用中组件之间干净的分离。</p>
            },
        ];
        return(
            <div className="contentBox">
                <Row className="title"><h2>热门与新开的课程</h2></Row>
                <Row>
                    <RadioGroup defaultValue="a" size="large" style={{marginBottom:20}}>
                        <RadioButton value="a">最热</RadioButton>
                        <RadioButton value="b">最新</RadioButton>
                    </RadioGroup>
                </Row>
                <Row>
                    <Table columns={columns} dataSource={data} size="small" showHeader={false} pagination={{pageSize:5}} />
                </Row>
            </div>
        );
    }
});
const GlegooderItem = React.createClass({
    render: function(){
        return(
            <Col className="glegooderItem" span="6">
                <img src="/image/people_avatar.jpg" />
                <h2>Zuckerberg</h2>
                <h3>前端部门</h3>
            </Col>
        );
    }
});

export { Recommend };
