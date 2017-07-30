import React, { Component } from 'react';
import styles from './index.less'
import { Row, Col, Icon, Menu, Button, Tabs } from 'antd'
import { StudentsPage } from './components/studentsPage.js'
import { StatisticsPage } from './components/statisticsPage.js'


const TabPane = Tabs.TabPane;

class ClassesManage extends Component {
    render() {
        return (
            <Row id="ClassesManagePage" className="page_content">
                <Row type="flex" justify="center" id="ClassesInfo">
                    <Col className="header" span="24">
                        <img src="/image/cover/java.png" />
                    </Col>
                    <Col className="content">
                        <p name="title">Java 入门</p>
                        <p name="info">Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发Android 应用和云计算平台。</p>
                    </Col>
                </Row>

                <Row id="ClassesContent">
                    <Tabs defaultActiveKey="1" onChange="">
                        <TabPane tab="学员" key="1"><StudentsPage /></TabPane>
                        <TabPane tab="统计" key="2"><StatisticsPage /></TabPane>
                        <TabPane tab="课时管理" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Row>
            </Row>
        );
    }
}

export { ClassesManage };