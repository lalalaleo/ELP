import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Icon, Menu, Row, Col } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Classes = React.createClass({
    render: function(){
        return (
            <div id="Classes" className="page_content">
                <div id="Classes_cover" className="page_content_item">
                    <img src="/image/cover/java.png" />
                </div>
                <div id="Classes_info" className="page_content_item">
                    <h2>Java入门</h2>
                    <p>Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发如火如荼 Android 应用和云计算平台。</p>
                </div>
                <Row type="flex" justify="center" align="top">
                    
                    <Col id="Classes_layout_left" className="page_content_left">
                        
                         <div id="Classes_history" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>历史纪录</h3>
                            </Row>
                            <Row style={{marginBottom:10}}>
                                <span name="s1">上一次看到：</span>
                                <span name="s2">第二章</span>
                                <span name="s3">第一课时</span>
                                <span name="s4">( 80% )</span>
                            </Row>
                            <Row>
                                <a>继续学习</a>
                            </Row>
                        </div> 
                        <div id="Classes_students" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>学习这门课的学员</h3>
                            </Row>
                            <Row type="flex" justify="space-around" align="top" style={{marginBottom:10}}>
                                <Col span="4" className="class_students_item"><img src="/image/people_avatar.jpg" /><h4>Zuckerberg</h4><p>前端部门</p></Col>
                                <Col span="4" className="class_students_item"><img src="/image/people_avatar.jpg" /><h4>Zuckerberg</h4><p>前端部门</p></Col>
                                <Col span="4" className="class_students_item"><img src="/image/people_avatar.jpg" /><h4>Zuckerberg</h4><p>前端部门</p></Col>
                                <Col span="4" className="class_students_item"><img src="/image/people_avatar.jpg" /><h4>Zuckerberg</h4><p>前端部门</p></Col>
                            </Row>
                            <Row type="flex" justify="end" align="top">
                                <a>换一批</a>
                            </Row>
                        </div>
                        <div id="Classes_correlation" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>相关课程</h3>
                            </Row>
                            <Row  type="flex" justify="space-around" align="top" style={{marginBottom:10}}>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover_react.png" /><h4>React入门</h4></Col>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover_react.png" /><h4>React入门</h4></Col>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover_react.png" /><h4>React入门</h4></Col>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover_react.png" /><h4>React入门</h4></Col>
                            </Row>
                            <Row type="flex" justify="end" align="top">
                                <a>换一批</a>
                            </Row>
                        </div>
                    </Col>

                    <Col id="Classes_layout_right" className="page_content_right">
                        <div id="Classes_item_list" className="page_content_item">
                            <h3>课时目录</h3>
                            <Menu style={{border:'none'}}  defaultOpenKeys={['sub2']} mode="inline">
                                <SubMenu key="sub1" title={<span name="title">第一章</span>}>
                                    <Menu.Item key="1">第一课时</Menu.Item>
                                    <Menu.Item key="2">第二课时</Menu.Item>
                                    <Menu.Item key="3">第三课时</Menu.Item>
                                    <Menu.Item key="4">第四课时</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span name="title">第二章</span>}>
                                    <Menu.Item key="5"><a href='/home/classes/class'><span>第一课时</span></a></Menu.Item>
                                    <Menu.Item key="6">第二课时</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span name="title">第三章</span>}>
                                    <Menu.Item key="7">第一课时</Menu.Item>
                                    <Menu.Item key="8">第二课时</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span name="title">第四章</span>}>
                                <Menu.Item key="9">第一课时</Menu.Item>
                                <Menu.Item key="10">第二课时</Menu.Item>
                                <Menu.Item key="11">第三课时</Menu.Item>
                                <Menu.Item key="12">第四课时</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
});

export { Classes }