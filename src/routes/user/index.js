import $ from 'jquery'
import React from 'react'
import styles from './index.less'
import { Comments } from './components/comments.js'
import { Row, Col, Icon } from 'antd'

//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/bar') //图表类型 柱状图
require('echarts/lib/component/title') //标题插件

class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.setLeaningStateChartOption = this.setLeaningStateChartOption.bind(this)
        this.getStudyClassesData = this.getStudyClassesData.bind(this)
        this.state = {
            studyClassesData: []
        }
    }

    static defaultProps = {
        data: {
            xAxisData:["2017.7.21","2017.7.22","2017.7.23","2017.7.24","2017.7.25","2017.7.26","2017.7.27","2017.7.28","2017.7.29","2017.7.30"],
            valueDara:[7,3,6,4,2,6,8,0,3,1]
        }
    }
    componentDidMount() {
        var getStudyClassesData = this.getStudyClassesData;
        // echarts图表
        const { data } = this.props
        let learningStateChart = echarts.init(this.refs.learningStateChart)
        let options = this.setLeaningStateChartOption(data)
        learningStateChart.setOption(options)
        // ajax
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=history",
            success: function(data){
                if(data.code==200){
                    getStudyClassesData(data.data.history);
                }
            },
        });
    }
    getStudyClassesData(data){
        this.setState({studyClassesData:data});
    }
    setLeaningStateChartOption(data){
        return {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top:"5px",
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : data.xAxisData,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:data.valueDara
                }
            ]
        };
    }
    render(){
        
        const studyClassesList = this.state.studyClassesData.map(function(classes){
            return(
                <Row className="profileStudyClassesItem" type="flex" justify="statr" align="middle">
                    <Col>
                        <img src={classes.cover} />
                    </Col>
                    <Col>
                        <span>{classes.classesName}</span>
                    </Col>
                </Row>
            );
        });

        return(
            <Row id="UserPage" className="page_content">
                <Row type="flex" justify="center" id="ProfileHeader">
                    <Col id="ProfileCard" span="24">
                        <div>
                            <center>
                                <img src="/image/avatar/test/test_1.png" />
                                <p name="userName">林罡</p>
                                <p name="department">后端部门</p>
                            </center>
                        </div>
                    </Col>
                     <Col id="ProfileInfo" span="24">
                        <Row type="flex" justify="start" align="top">
                            <Col span={5} className="studyClassesNum">
                                <div>
                                    <Icon name="icon" type="book" />
                                    <span>课程：</span>
                                    <span>1</span>
                                </div>
                            </Col>
                            <Col span={5} className="studyClassNum">
                                <div>
                                    <Icon name="icon" type="file-text" />
                                    <span>课时：</span>
                                    <span>4</span>
                                </div>
                            </Col>
                            <Col span={9} className="studyClassesTime">
                                <div>
                                    <Icon name="icon" type="clock-circle-o" />
                                    <span>时间：</span>
                                    <span>0 : 34 : 27</span>
                                </div>
                            </Col>
                            <Col span={5} className="commentNum">
                                <div>
                                    <Icon name="icon" type="edit" />
                                    <span>评论：</span>
                                    <span>2</span>
                                </div>
                            </Col>
                            
                        </Row>
                    </Col> 
                </Row>

                <Row id="ProfileContent">
                    <Row id="ProfileActivityChart">
                        <p name="title">近期学习状况</p>
                        <div ref="learningStateChart" style={{width: "100%", height: "80px"}}></div>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col id="ProfileCommentHistory">
                            <div name="container">
                                <p name="title">动态</p>
                                 <Comments /> 
                            </div>
                        </Col>
                        <Col id="ProfileStudyClasses">
                            <div name="container">
                                <p name="title">正在学习的课程</p>
                                { studyClassesList }
                            </div>
                        </Col>
                    </Row>
                </Row>

                
                
            </Row>
        );
    }
};

export { UserPage }