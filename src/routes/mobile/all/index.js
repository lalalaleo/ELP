import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { ClassesList } from './components/classesList'
import { Menu, Col, Row, Table, Radio } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const All = React.createClass({
    render: function(){
        const test_ClassesData = [
            {
                cover: '/image/cover/java.png',
                name: 'Java入门',
                info: 'Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发Android 应用和云计算平台。'
            },
            {
                cover: '/image/cover/java.png',
                name: 'Java理解',
                info: 'java是一种面向对象的编程语言，优点是可移植性比较高，最初设计时就是本着一次编写到处执行设计的。可以开发各种应用程序和游戏'
            },
            {
                cover: '/image/cover/java.png',
                name: 'Java进阶',
                info: '通过对本课程的学习，简化Java EE和Java SE应用开发。用操作实体对象，执行CRUD操作，框架在后台替代我们完成所有的事情。让开发者最大限度的使用面向对象的模型设计企业应用，而不需要自行处理这些特性在关系数据库的持久化'
            },
            {
                cover: '/image/cover/java.png',
                name: 'Java实战',
                info: '让每一位读者真正做到“轻松学Java、从零开始学Java”，以优质的视频教学为每一位读者提供最大的支持'
            },
            {
                cover: '/image/cover/javaee.png',
                name: 'JavaEE入门',
                info: '问答形式 在讲解一些重要知识点时，老师会提出一些问题并引导大家思考，而这些问题将是您理解这些知识点时要产生的疑问，通过课程学习老师会告诉您如何理解和解决这些问题'
            },
            {
                cover: '/image/cover/javaee.png',
                name: 'JavaEE理解',
                info: '内容全面，包括了目前J2EE比较流行的框架，如：Struts框架、Hibernate框架、JavaEE框架、表示层框架（EL、JSTL、AJAX）EJB框架和辅助工具等；'
            },
            {
                cover: '/image/cover/javaee.png',
                name: 'JavaEE进阶',
                info: '讲解深刻 在一些重难点知识以及各种框架的精华方面，老师都将帮助您剖析本质'
            },
            {
                cover: '/image/cover/javaee.png',
                name: 'JavaEE实战',
                info: '实战性强 理论和实践的比例约为1：4，现场给大家从无到有编写代码，让大家完整了解一个项目如何开发'
            },
            {
                cover: '/image/cover/spring.png',
                name: 'Spring入门',
                info: '课程主要介绍框架介绍，IoC思想、DI依赖注入、Bean的实例方式、Bean种类、Bean作用域范围、Bean生命周期管理'
            },
            {
                cover: '/image/cover/spring.png',
                name: 'Spring理解',
                info: '课程主要介绍依赖注入、注解装配Bean、整合Junit测试、WEB开发集成spring、AOP思想、AOP原理解剖'
            },
            {
                cover: '/image/cover/spring.png',
                name: 'Spring进阶',
                info: '课程主要介绍spring 传统aop开发、JdbcTemplate模板使用、C3P0数据源配置'
            },
            {
                cover: '/image/cover/spring.png',
                name: 'Spring实战',
                info: '课程主要介绍声明式事务管理、注解事务管理。SSH xml整合、SSH注解整合'
            },
            {
                cover: '/image/cover/spring_cloud.png',
                name: 'SpringCloud入门',
                info: '第1节、Springcloud介绍 第2节、Eureka的使用 第3节、Eureka集群 第4节、restful请求 第5节、restful请求负载均衡 第6节、配置中心'
            },
            {
                cover: '/image/cover/spring_cloud.png',
                name: 'SpringCloud理解',
                info: '第7节、获取配置中心数据 第8节、配置中心高可用 第9节、消息总线实战 第10节、feign请求内幕 第11节、断路器（Hystrix） 第12节、断路器的监控(Hystrix Dashboard) 第13节、断路器聚合监控(Hystrix Turbine) 第14节、服务调用追踪(Spring Cloud Sleuth) 第15节、Spring Cloud Stream rabbitmq上'
            },
            {
                cover: '/image/cover/spring_cloud.png',
                name: 'SpringCloud进阶',
                info: '第16节、Spring Cloud Stream rabbitmq下 第17节、Spring Cloud Stream kafka实战 第18节、Spring Data Flow Server 第19节、Spring Data Flow source实战'
            },
            {
                cover: '/image/cover/spring_cloud.png',
                name: 'SpringCloud实战',
                info: '第20节、Spring Data Flow processor实战 第21节、Spring Data Flow sink实战 第22节、Spring cloud task 第23节、课程总结和下回预告'
            },
            {
                cover: '/image/cover/python.png',
                name: 'Python入门',
                info: '本系类视频针对没有任何python基础的小白，从python基础的规范和语法开始讲起，循序渐进地学习一些最最基础的python小实例，让你在不知不觉就掌握最最基础的python语法，少理论多实例是本视频的特色。'
            },
            {
                cover: '/image/cover/python.png',
                name: 'Python理解',
                info: 'Python是一种面向对象、直译式计算机程序设计语言，因语法简捷而清晰，常被昵称为胶水语言，它能够很轻松地把用其他语言制作的各种模块（尤其是C/C++）轻松地联结在一起。'
            },
            {
                cover: '/image/cover/python.png',
                name: 'Python进阶',
                info: '本课程主要讲解了虚拟机安装和配置Kali Linux、基于VS code构建Python开发环境，Python运行时与包管理工具、使用WireShark联系网络协议分析等内容'
            },
            {
                cover: '/image/cover/python.png',
                name: 'Python实战',
                info: '项目实战，积累经验。就业没砝码？跳槽没经验？上千行代码，几十万数据，大项目有大经验'
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
                    <ClassesList data={ test_ClassesData } pageSize={10} />
                </Col>
            </Row>
        );
    }
});

export { All };