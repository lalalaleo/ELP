import React from 'react'
import styles from './index.less'
import {  Row, Col, Icon, Card, Carousel, Table ,Radio } from 'antd'
import { ClassesCarousel } from './components/classesCarousel'
import { ClassesList } from '../all/components/classesList'
import { UserList } from './components/userList'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Discover = React.createClass({
    render: function (){

        const test_popularClassesData = [
            {
                cover: '/image/cover/react.png',
                name: 'React入门',
                info: '由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。'
            },
            {
                cover: '/image/cover/python.png',
                name: 'Python理解',
                info: 'Python是一种面向对象、直译式计算机程序设计语言，因语法简捷而清晰，常被昵称为胶水语言，它能够很轻松地把用其他语言制作的各种模块（尤其是C/C++）轻松地联结在一起。'
            },
            {
                cover: '/image/cover/sql.png',
                name: 'MySQL进阶',
                info: '回答要具体/建表注意点/列选择/Btree索引与hash索引/Btree索引如何发挥作用/多列索引经典题目/聚簇索引与非聚簇索引/不规则主键的页分裂/索引长度与区分度/伪哈希技巧/索引与排序'
            },
            {
                cover: '/image/cover/android.png',
                name: 'Android开发理解',
                info: '成为真正的Android程序员，希望本课程的深入剖析能够给你起到引导的作用，也希望Sundy的深入浅出，层层分解的讲课风格你能喜欢！'
            },
            {
                cover: '/image/cover/ios.png',
                name: 'IOS开发实战',
                info: '通讯录实战开发，本课实现模拟通讯录的登陆、添加、删除、修改的功能，涉及到第三方类库的使用，数据存储并加深理解代理和 UITableView。'
            },
            {
                cover: '/image/cover/unit_test.png',
                name: '单元测试进阶',
                info: '第三章介绍单元测试方法，包括：语句覆盖、判定覆盖、条件覆盖、判定/条件覆盖、条件组合覆盖和路径覆盖等。'
            },
            {
                cover: '/image/cover/design.png',
                name: '设计冲刺理解',
                info: '从优化产品到制定营销策略，从为公司命名到评估新商机的可行性。设计冲刺都能帮助你快速取得进展，并且非常确定你走的是正确方向'
            },
            {
                cover: '/image/cover/java.png',
                name: 'Java理解',
                info: 'java是一种面向对象的编程语言，优点是可移植性比较高，最初设计时就是本着一次编写到处执行设计的。可以开发各种应用程序和游戏'
            },
            {
                cover: '/image/cover/spring.png',
                name: 'Spring理解',
                info: '课程主要介绍依赖注入、注解装配Bean、整合Junit测试、WEB开发集成spring、AOP思想、AOP原理解剖'
            },
            {
                cover: '/image/cover/spring_cloud.png',
                name: 'SpringCloud进阶',
                info: '第16节、Spring Cloud Stream rabbitmq下 第17节、Spring Cloud Stream kafka实战 第18节、Spring Data Flow Server 第19节、Spring Data Flow source实战'
            },
        ];

        const test_glegooderData = [
            {
                avatar:'/image/avatar/test/test_1.png',
                name:'林罡',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_2.png',
                name:'陈文军',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_3.png',
                name:'杨攻',
                department:'前端',
            },
            {
                avatar:'/image/avatar/test/test_4.png',
                name:'连君龙',
                department:'数据库',
            },
            {
                avatar:'/image/avatar/test/test_5.png',
                name:'张忠柱',
                department:'Android',
            },
            {
                avatar:'/image/avatar/test/test_6.png',
                name:'周国祥',
                department:'IOS',
            },
            {
                avatar:'/image/avatar/test/test_7.png',
                name:'韩悦',
                department:'测试',
            },
            {
                avatar:'/image/avatar/test/test_8.png',
                name:'陈佳华',
                department:'业务',
            },
        ]
        
        return (
            <div id="Discover" className="page_content">
                {/*精选与推荐*/}
                <div id="Discover_recommend" className="page_content_item">
                    <Row className="page_content_item_title"><h2>精选</h2></Row>
                    <Row>
                        <ClassesCarousel />
                    </Row>
                </div>
                {/*热门课程*/}
                <div id="Discover_hot-newclasses" className="page_content_item">
                    <Row className="page_content_item_title"><h2>热门与新开的课程</h2></Row>
                    <Row>
                        <RadioGroup defaultValue="a" size="large" style={{marginBottom:20}}>
                            <RadioButton value="a">最热</RadioButton>
                            <RadioButton value="b">最新</RadioButton>
                        </RadioGroup>
                    </Row>
                    <ClassesList data={ test_popularClassesData } pageSize={5} />
                </div>
                {/*学霸们*/}
                <div id="Discover_glegooder" className="page_content_item">
                    <Row className="page_content_item_title"><h2>学霸们</h2></Row>
                    <UserList data={ test_glegooderData } />
                </div>
            </div>
        );
    }
});



export { Discover };
