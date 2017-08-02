import React from 'react'
import style from './index.less'
import { ClassList } from './components/classList'
import { UserList } from '../discover/components/userList'
import { Icon, Row, Col } from 'antd'

const M_Classes = React.createClass({
    render: function(){

        const test_studentData = [
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
                avatar:'/image/avatar/test/test_9.png',
                name:'石丹云',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_10.png',
                name:'朱克然',
                department:'后端',
            },
        ]

        return (
            <div id="M_Classes" className="page_content">
                <div id="M_Classes_cover" className="page_content_item">
                    <img src="/image/cover/java.png" />
                </div>
                
                <Row type="flex" justify="center" align="top">
                    <Col>
                        {/*简介  */}
                        <div id="M_Classes_info" className="page_content_item">
                            <h2>Java入门</h2>
                            <p>Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发Android 应用和云计算平台。</p>
                        </div>
                        {/*历史纪录  */}
                         <div id="M_Classes_history" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>历史纪录</h3>
                            </Row>
                            <Row style={{marginBottom:10}}>
                                <span name="s1">上一次看到：</span>
                                <span name="s2">第一章</span>
                                <span name="s3">Java 中的异常抛出以及自定义异常</span>
                                <span name="s4">( 80% )</span>
                            </Row>
                            <Row>
                                <a href='/m/classes/class'>继续学习</a>
                            </Row>
                        </div> 
                        {/*课时目录  */}
                        <div id="M_Classes_item_list" className="page_content_item">
                            <h3>课时目录</h3>
                            <ClassList defaultKey={['4']} />
                        </div>
                        {/*学习这门课的学生  */}
                        <div id="M_Classes_students" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>学习这门课的学员</h3>
                            </Row>
                            <UserList data={ test_studentData } />
                            <Row type="flex" justify="end" align="top">
                                <a>换一批</a>
                            </Row>
                        </div>
                        {/*相关课程  */}
                        <div id="M_Classes_correlation" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>相关课程</h3>
                            </Row>
                            <Row  type="flex" justify="space-around" align="top" style={{marginBottom:10}}>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover/javaee.png" /><h4>JavaEE理解</h4></Col>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover/spring.png" /><h4>Spring入门</h4></Col>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover/spring_cloud.png" /><h4>SpringCloud进阶</h4></Col>
                                <Col span="5" className="class_correlation_item"><img src="/image/cover/python.png" /><h4>Python实战</h4></Col>
                            </Row>
                            <Row type="flex" justify="end" align="top">
                                <a>换一批</a>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
});

export { M_Classes }