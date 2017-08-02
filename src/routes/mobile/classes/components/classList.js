import React from 'react'
import style from './classList.less'
import { Icon, Menu, Row, Col } from 'antd'
import nzhcn from "nzh/cn";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const ClassList = React.createClass({
    render: function(){
        const classListData = [
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
            
        ]

        const ChooseSub = classListData.map(function(Sub){
            const ChooseClass = Sub.data.map(function(Class){
                return (
                    <Menu.Item key={Class.no}>
                        <Row type='flex' justify='start' align='middle'>
                            <Col span={16}>
                                <p>{Class.className}</p>
                            </Col>
                            <Col span={8}>
                                <Row type='flex' justify='end' align='middle'>
                                    <Icon type="clock-circle-o" />
                                    <span>{Class.classTime}</span>
                                </Row>
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
            <Menu style={{border:'none'}} defaultSelectedKeys={this.props.defaultKey} defaultOpenKeys={['sub1']} mode="inline"  id='ClassList'>
                { ChooseSub }
            </Menu>
        );
    }
});

export { ClassList };