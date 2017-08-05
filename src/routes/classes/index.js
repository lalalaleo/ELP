import $ from 'jquery';
import React from 'react'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { ClassList } from './components/classList'
import { UserList } from '../discover/components/userList'
import { Icon, Row, Col } from 'antd'

const Classes = React.createClass({
    componentDidMount: function(){
        var userListChange = this.userListChange;
        var classListChange = this.classListChange;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=userList4",
            success: function(data){
                    console.log(data);
                if(data.code==200){
                    userListChange(data.data.userList);
                }
            },
        });
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=classList4",
            success: function(data){
                console.log(data);
                if(data.code==200){
                    classListChange(data.data.classList);
                }
            },
        });
    },
    getInitialState: function(){
        return {
            userList: [ ],
            classList: [ ],
        }
    },
    classListChange: function(data){
        this.setState({
            classList: data,
        });
    },
    userListChange: function(data){
        this.setState({
            userList: data,
        });
    },
    shuffledClassList: function(){
        var classListChange = this.classListChange;
        $.ajax({
            type: "post",
            // url: "http://127.0.0.1:8888/midwayIsland/data",
            url: "http://192.168.0.8:8888/midwayIsland/data",            
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=classList4",
            success: function(data){
                if(data.code==200){
                    classListChange(data.data.classList);
                }
            },
        });
    },
    shuffledStudentList: function(){
        var userListChange = this.userListChange;
        $.ajax({
            type: "post",
            // url: "http://127.0.0.1:8888/midwayIsland/data",
            url: "http://192.168.0.8:8888/midwayIsland/data", 
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=userList4",
            success: function(data){
                if(data.code==200){
                    userListChange(data.data.userList);
                }
            },
        });
    },
    render: function(){
        var classList = this.state.classList.map(function(Classes){
            return(
                <Col span="5" className="class_correlation_item">
                    <img src={Classes.cover} />
                    <h4>{Classes.name}</h4>
                </Col>
            );
        });

        return (
            <div id="Classes" className="page_content">
                <div id="Classes_cover" className="page_content_item">
                    <img src="/image/cover/java.png" />
                </div>
                <div id="Classes_info" className="page_content_item">
                    <h2>Java入门</h2>
                    <p>Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发Android 应用和云计算平台。</p>
                </div>
                <Row type="flex" justify="center" align="top">
                    
                    <Col id="Classes_layout_left" className="page_content_left">
                        
                         <div id="Classes_history" className="page_content_item">
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
                                <a href='/home/classes/class'>继续学习</a>
                            </Row>
                        </div> 
                        <div id="Classes_students" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>学习这门课的学员</h3>
                            </Row>
                            <UserList data={ this.state.userList } />
                            <Row type="flex" justify="end" align="top">
                                <a onClick={ this.shuffledStudentList }>换一批</a>
                            </Row>
                        </div>
                        <div id="Classes_correlation" className="page_content_item">
                            <Row style={{marginBottom:10}}>
                                <h3>相关课程</h3>
                            </Row>
                            <Row  type="flex" justify="space-around" align="top" style={{marginBottom:10}}>
                                { classList }
                            </Row>
                            <Row type="flex" justify="end" align="top">
                                <a onClick={ this.shuffledClassList }>换一批</a>
                            </Row>
                        </div>
                    </Col>

                    <Col id="Classes_layout_right" className="page_content_right">
                        <div id="Classes_item_list" className="page_content_item">
                            <h3>课时目录</h3>
                            <ClassList defaultKey={['4']} />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
});

export { Classes }