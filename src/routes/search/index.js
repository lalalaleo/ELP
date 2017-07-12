import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Table, Row, Col } from 'antd'

const Search = React.createClass({
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
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:2,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:3,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:4,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:5,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:6,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:7,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:8,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:9,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:10,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:11,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:12,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:13,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:14,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
            {
                key:15,
                cover: <img src="/image/cover_react_blue.png" style={{height:90}} />,
                name: <h4 style={{width:240}}>React开发教程：从入门到转行</h4>,
                info:<p style={{width:440}}>React（有时叫React.js或ReactJS）是一个为数据提供渲染为HTML视图的开源JavaScript 库。React视图通常采用包含以自定义HTML标记规定的其他组件的组件渲染。</p>
            },
        ];
        return (
            <div>
                <Header>
                    <IndexToolBar />
                </Header>
                <Content>
                    <div id="Search" className="page_content">
                        <Row>
                            <Table columns={columns} dataSource={data} size="small" showHeader={false} pagination={{pageSize:10}} />
                        </Row>
                    </div>
                </Content>
            </div>
        );
    }
});

export { Search }