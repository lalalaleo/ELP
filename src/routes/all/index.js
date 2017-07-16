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
                cover: <img src="/image/cover/java.png" style={{height:90}} />,
                name: <a href="/home/classes"><h4 style={{width:200}}>Java入门</h4></a>,
                info:<p style={{width:320}}>Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发如火如荼</p>
            },
            {
                key:2,
                cover: <img src="/image/cover/java.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Java理解</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:3,
                cover: <img src="/image/cover/java.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Java进阶</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:4,
                cover: <img src="/image/cover/java.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Java实战</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:5,
                cover: <img src="/image/cover/javaee.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>JavaEE入门</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:6,
                cover: <img src="/image/cover/javaee.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>JavaEE理解</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:7,
                cover: <img src="/image/cover/javaee.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>JavaEE进阶</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:8,
                cover: <img src="/image/cover/javaee.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>JavaEE实战</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:9,
                cover: <img src="/image/cover/spring.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Spring入门</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:10,
                cover: <img src="/image/cover/spring.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Spring理解</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:11,
                cover: <img src="/image/cover/spring.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Spring进阶</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:12,
                cover: <img src="/image/cover/spring.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Spring实战</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:13,
                cover: <img src="/image/cover/spring_cloud.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>SpringCloud入门</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:14,
                cover: <img src="/image/cover/spring_cloud.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>SpringCloud理解</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:15,
                cover: <img src="/image/cover/spring_cloud.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>SpringCloud进阶</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:16,
                cover: <img src="/image/cover/spring_cloud.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>SpringCloud实战</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:17,
                cover: <img src="/image/cover/python.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Python入门</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:18,
                cover: <img src="/image/cover/python.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Python理解</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:19,
                cover: <img src="/image/cover/python.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Python进阶</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:20,
                cover: <img src="/image/cover/python.png" style={{height:90}} />,
                name: <h4 style={{width:200}}>Python实战</h4>,
                info:<p style={{width:320}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
        ];
        return(
            <Row id="AllClasses" className="page_content">
                <Col span={4}>
                    <Menu style={{ width: 180 }} defaultSelectedKeys={['1']} mode="inline" style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                        <Menu.Item key="1">后端</Menu.Item>
                        <Menu.Item key="2">前端</Menu.Item>
                        <Menu.Item key="3">数据库</Menu.Item>
                        <Menu.Item key="4">Android</Menu.Item>
                        <Menu.Item key="5">IOS</Menu.Item>
                        <Menu.Item key="6">测试</Menu.Item>
                        <Menu.Item key="7">设计</Menu.Item>
                        <Menu.Item key="8">业务</Menu.Item>
                        <Menu.Item key="9">产品</Menu.Item>
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