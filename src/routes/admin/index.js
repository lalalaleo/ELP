import React, { Component } from 'react'
import styles from './index.less'
import { Row, Col, Icon, Menu, Button } from 'antd'

class AdminPage extends Component {
    render() {
        return (
            <Row id="AdminPage" className="page_content">
                <Row type="flex" justify="center" id="Profile">
                    <Col id="ProfileCard" span="24">
                        <div>
                            <center>
                                <img src="/image/avatar/test/test_1.png" />
                                <p name="userName">林罡</p>
                                <p name="department">后端部门</p>
                            </center>
                        </div>
                    </Col>
                </Row>

                <Row id="AdminContent" type="flex" justify="start">
                    <Col className="adminClassesMenu" span="5">
                        <div name="container">
                            <Menu style={{ width: "100%" }} defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">Java 入门</Menu.Item>
                                <Menu.Item key="2">Java 理解</Menu.Item>
                                <Menu.Item key="3">Java 进阶</Menu.Item>
                                <Menu.Item key="4">Java 实战</Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                    <Col className="adminClassesContent" span="19">
                        <Row className="ctrl" type="flex" justify="end">
                            <Button type="default">管理</Button>
                        </Row>
                        <Row className="classesInfo">
                            <Row className="header" type="flex" justify="start">
                                <Col>
                                    <img src="/image/cover/java.png" />
                                </Col>
                            </Row>
                            <Row className="content" type="flex" justify="start">
                                <Row>
                                    <p name="title">Java 入门</p>
                                </Row>
                                <Row>
                                    <p name="info">Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发Android 应用和云计算平台。</p>
                                </Row>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Row>
        );
    }
}

export { AdminPage };