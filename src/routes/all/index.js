import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { Menu, Col, Row, Table, Radio } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const All = React.createClass({
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
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:2,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:3,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:4,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:5,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:6,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:7,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:8,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:9,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:10,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:11,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:12,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:13,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:14,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:15,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:360}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
        ];
        return(
            <Row className="allBox">
                <Col span={4}>
                    <Menu style={{ width: 180 }} defaultSelectedKeys={['1']} mode="inline" style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                        <Menu.Item key="1">前端</Menu.Item>
                        <Menu.Item key="2">后端</Menu.Item>
                        <Menu.Item key="3">设计</Menu.Item>
                        <Menu.Item key="4">原型</Menu.Item>
                        <Menu.Item key="5">App</Menu.Item>
                        <Menu.Item key="6">需求</Menu.Item>
                        <Menu.Item key="7">算法</Menu.Item>
                        <Menu.Item key="8">其他</Menu.Item>
                    </Menu>
                </Col>
                <Col span={20} style={{padding:20}}>
                    <Row>
                        <RadioGroup defaultValue="a" size="large" style={{marginBottom:20}}>
                            <RadioButton value="a">最热</RadioButton>
                            <RadioButton value="b">最新</RadioButton>
                        </RadioGroup>
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={data} size="small" showHeader={false} pagination={{pageSize:10}} />
                    </Row>
                </Col>
            </Row>
        );
    }
});

export { All };