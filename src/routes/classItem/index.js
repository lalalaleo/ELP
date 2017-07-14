import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Icon, Menu, Row, Col } from 'antd'
import PDFObject from '../../utils/pdfobject.min.js'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Class = React.createClass({
    render: function(){
        // $("#page_content").ready(function(){
        //     PDFObject.embed("/files/test.pdf", "#Class_content",{width: "100%"});
        //     $("#Class_content").append("<div><a id='btnscreen'></a></div>");
        //     ReactDOM.render(<Icon type="arrows-alt" />,document.getElementById("btnscreen"));
        //     $("#btnscreen").click(function(){
        //         if($("#Class_content").width()<=1000){
        //             $("#Class_content").css({
        //                 "position": "fixed",
        //                 "top":0,
        //                 "left": 0,
        //                 "z-index": 999,
        //                 "height":"100%"
        //             });
        //             $("body").css({
        //                 "overflow": "hidden"
        //             });
        //             ReactDOM.render(<Icon type="shrink" />,document.getElementById("btnscreen"));
        //         }
        //         else{
        //             $("#Class_content").css({
        //                 "position": "relative",
        //                 "z-index": 10,
        //                 "height": "540px"
        //             });
        //             $("body").css({
        //                 "overflow": ""
        //             });
        //             ReactDOM.render(<Icon type="arrows-alt" />,document.getElementById("btnscreen"));
        //         }
        //     });
        // });
        return(
            <div id="Class" className="page_content">
                <div id="Class_content" className="page_content_item">
                       <iframe src="https://www.youtube.com/embed/YWaptz0EUCk" frameborder="0" allowfullscreen></iframe>   
                </div>
                <Row id="Class_ctrl" className="page_content_item">
                    <Col span="8">
                        <Row type="flex" justify="start" align="middle">
                            <a><span>上一课时：</span>第二课时<span></span></a>
                        </Row>
                    </Col>
                    <Col span="8">
                        <Row type="flex" justify="center" align="middle">
                            <Icon type="clock-circle-o" /><span>102 : 12</span>
                        </Row>
                    </Col>
                    <Col span="8">
                        <Row type="flex" justify="end" align="middle">
                            <a><span>下一课时：</span>第四课时<span></span></a>
                        </Row>
                    </Col>
                </Row>

                <Row type="flex" justify="center" align="top">
                    <Col id="Class_layout_left" className="page_content_left">

                        <Row id="Class_title" className="page_content_item">
                            <Col span="16"><h3>第三课时</h3></Col>
                            <Col span="3" offset="5"><span>127次观看</span></Col>
                        </Row>
                    
                        <Row id="Class_info" className="page_content_item">
                            <h4>发布于 2017年7月12日</h4>
                            <p>利用 JSX 编写 DOM 结构，可以用原生的 HTML 标签，也可以直接像普通标签一样引用 React 组件。这两者约定通过大小写来区分，小写的字符串是 HTML 标签，大写开头的变量是 React 组件。</p>
                        </Row>
                    
                        <Col id="Class_comments" className="page_content_item">
                            <Row></Row>
                        </Col>

                    </Col>
                    
                    <Col id="Class_layout_right" className="page_content_right">
                        <div id="Class_item_list" className="page_content_item">
                            <h3>课时目录</h3>
                            <Menu style={{border:'none'}}  defaultOpenKeys={['sub1']} mode="inline">
                                <SubMenu key="sub1" title={<span>第一章</span>}>
                                    <Menu.Item key="1">第一课时</Menu.Item>
                                    <Menu.Item key="2">第二课时</Menu.Item>
                                    <Menu.Item key="3">第三课时</Menu.Item>
                                    <Menu.Item key="4">第四课时</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span>第二章</span>}>
                                    <Menu.Item key="5">第一课时</Menu.Item>
                                    <Menu.Item key="6">第二课时</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span>第三章</span>}>
                                    <Menu.Item key="7">第一课时</Menu.Item>
                                    <Menu.Item key="8">第二课时</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span>第四章</span>}>
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

export { Class }