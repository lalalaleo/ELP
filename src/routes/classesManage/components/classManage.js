import React, { Component } from 'react';
import styles from './classManage.less'
import nzhcn from "nzh/cn";
import { Row, Col, Menu, Button, Icon, Input } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ClassManage extends Component {
    constructor(){
        super();
        this.state = {
            chooseData:{
                id: null,
                
            },
            classListData: 
                [
                    {
                        no: 1,
                        data:[
                            {
                                no: 1,
                                className: "Java异常简介",
                                classTime: "06:50",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 2,
                                className: "Java中使用try..catch..finally实现异常处理",
                                classTime: "05:08",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 3,
                                className: "Java中通过案例学习 try...catch...finally",
                                classTime: "14:00",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 4,
                                className: "Java 中的异常抛出以及自定义异常",
                                classTime: "04:32",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 5,
                                className: "Java 中的异常链",
                                classTime: "06:09",
                                classHref: "/home/classes/class",
                            },
                        ]
                    },
                    {
                        no: 2,
                        data:[
                            {
                                no: 6,
                                className: "什么是 Java 中的字符串",
                                classTime: "03:20",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 7,
                                className: "Java 中字符串的不变性",
                                classTime: "02:20",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 8,
                                className: "Java 中 String 类的常用方法 Ⅰ",
                                classTime: "04:25",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 9,
                                className: "Java 中 String 类的常用方法 Ⅱ",
                                classTime: "04:16",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 10,
                                className: "认识 Java 中的 StringBuilder 类",
                                classTime: "03:27",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 11,
                                className: "Java 中的 StringBuilder 类的常用方法",
                                classTime: "07:00",
                                classHref: "/home/classes/class",
                            },
                        ]
                    },
                    {
                        no: 3,
                        data:[
                            {
                                no: 12,
                                className: "Java 中的包装类",
                                classTime: "07:17",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 13,
                                className: "Java 中基本类型和包装类之间的转换",
                                classTime: "08:18",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 14,
                                className: "Java 中基本类型和字符串之间的转换",
                                classTime: "06:15",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 15,
                                className: "使用 Date 和 SimpleDateFormat 类表示时间",
                                classTime: "03:20",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 16,
                                className: "Calendar 类的应用",
                                classTime: "06:49",
                                classHref: "/home/classes/class",
                            },
                            {
                                no: 17,
                                className: "使用 Math 类操作数据",
                                classTime: "06:27",
                                classHref: "/home/classes/class",
                            },
                        ]
                    },   
                ],
        }
    }
    componentDidMount(){
    }
    render() {
        const ChooseSub = this.state.classListData.map(function(Sub){
            const ChooseClass = Sub.data.map(function(Class){
                return (
                    <Menu.Item key={Class.no}>
                        <Row type='flex' justify='start' align='middle'>
                            <Col span={20}>
                                <p>{Class.className}</p>
                            </Col>
                        </Row>
                    </Menu.Item>
                );
            });
            return (
                <SubMenu key={"sub"+Sub.no} title={<span name="title">第{nzhcn.encodeS(Sub.no)}章</span>}>
                    { ChooseClass }
                </SubMenu>
            );
        });
        return (
            <Row id="ClassManage">
                <Col span="8" className="classList">
                    <div className="container">
                        <Row type="flex" justify="space-between" align="middle">
                            <Col span="20">
                                <p name="title">目录</p>
                            </Col>
                            <Col span="4">
                                <Button size="small">管理</Button>
                            </Col>
                        </Row>
                        <Menu style={{border:'none'}} defaultSelectedKeys={this.props.defaultKey} defaultOpenKeys={['sub1']} mode="inline"  id='ClassList'>
                            { ChooseSub }
                        </Menu>
                    </div>
                </Col>
                <Col span="16" className="classInfo">
                    <Row className="classInfo-header" type="flex" justify="center" align="middle">
                        <Col span="16">
                            <Input size="large" placeholder="请输入课时名字" value="Java 异常简介" />
                        </Col>
                    </Row>
                    <Row className="classInfo-content">
                        <Col span="6" className="fileIcon">
                            <center>
                                <img src="/image/icon/ppt.png" />
                                <Button>重新上传</Button>
                            </center>
                        </Col>
                        <Col span="18" className="content">
                            <Input type="textarea" placeholder="写下你的评论" autosize={{ minRows: 5, maxRows: 10 }} value="异常指不期而至的各种状况，如：文件找不到、网络连接失败、非法参数等。异常是一个事件，它发生在程序运行期间，干扰了正常的指令流程。Java通 过API中Throwable类的众多子类描述各种不同的异常。因而，Java异常都是对象，是Throwable子类的实例，描述了出现在一段编码中的 错误条件。当条件生成时，错误将引发异常。" />
                        </Col>
                    </Row>

                    <Row type="flex" justify="end">
                        <Button type="primary" style={{marginRight:10}}>查看</Button>
                        <Button type="danger">完成</Button>
                    </Row>

                </Col>
            </Row>
        );
    }
}

export { ClassManage };