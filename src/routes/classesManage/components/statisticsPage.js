import React, { Component } from 'react';
import styles from './statisticsPage.less'
import { Row, Col, Radio } from 'antd'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

//导入echarts
var echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/pie') //图表类型 柱状图
require('echarts/lib/chart/scatter') //图表类型 柱状图
require('echarts/lib/chart/bar') //图表类型 柱状图
require('echarts/lib/chart/line') //图表类型 柱状图
require('echarts/lib/chart/effectScatter') //图表类型 柱状图
require('echarts/lib/component/title') //标题插件

class StatisticsPage extends Component {
    constructor(props){
        super(props);
        this.setOption = this.setOption.bind(this)
    }
    componentDidMount(){
        function getVirtulData(year) {
            year = year || '2017';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate((+year + 1) + '-01-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data;
        }
        var data = getVirtulData(2016);

        let myChart = echarts.init(this.refs.myChart)
        let options = this.setOption(data,2)
        myChart.setOption(options)
    }
    setOption(data,type){
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        var courNum = 20;
        var learned = [5, 2, 1, 0, 13, 17, 12, 6, 20, 15, 5, 2];
        var comple = [];
        for (var i=0;i<12;i++) {
            comple.push((learned[i] / courNum) * 100);
        }
        switch(type){
            case 1:
                return{
                    backgroundColor: '#404a59',
                    title: {
                        top: 30,
                        text: '2016年某人每天的步数',
                        subtext: '数据纯属虚构',
                        left: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    legend: {   
                        top: '30',
                        left: '100',
                        data:['步数', 'Top 12'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    calendar: [{
                        top: 100,
                        left: 'center',
                        range: ['2016-01-01', '2016-06-30'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#000',
                                width: 4,
                                type: 'solid'
                            }
                        },
                        yearLabel: {
                            formatter: '{start}  1st',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#323c48',
                                borderWidth: 1,
                                borderColor: '#111'
                            }
                        }
                    }, {
                        top: 340,
                        left: 'center',
                        range: ['2016-07-01', '2016-12-31'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#000',
                                width: 4,
                                type: 'solid'
                            }
                        },
                        yearLabel: {
                            formatter: '{start}  2nd',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#323c48',
                                borderWidth: 1,
                                borderColor: '#111'
                            }
                        }
                    }],
                    series : [
                        {
                            name: '步数',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            data: data,
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ddb926'
                                }
                            }
                        },
                        {
                            name: '步数',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data,
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ddb926'
                                }
                            }
                        },
                        {
                            name: 'Top 12',
                            type: 'effectScatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data.sort(function (a, b) {
                                return b[1] - a[1];
                            }).slice(0, 12),
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        },
                        {
                            name: 'Top 12',
                            type: 'effectScatter',
                            coordinateSystem: 'calendar',
                            data: data.sort(function (a, b) {
                                return b[1] - a[1];
                            }).slice(0, 12),
                            symbolSize: function (val) {
                                return val[1] / 500;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: '#f4e925',
                                    shadowBlur: 10,
                                    shadowColor: '#333'
                                }
                            },
                            zlevel: 1
                        }
                    ]
                };
                break;
            case 2:
                return{
                    title : {
                        text: '各职位学员比例',
                        x:'center',
                        y:'5%'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        x : 'center',
                        y : 'bottom',
                        data:['后端','前端','数据库','android','IOS','测试','设计','业务','产品']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                    
                        {
                            name:'面积模式',
                            type:'pie',
                            radius : [30, 200],
                            center : ['50%', '50%'],
                            roseType : 'area',
                            data:[
                                {value:50, name:'后端'},
                                {value:20, name:'前端'},
                                {value:40, name:'数据库'},
                                {value:5, name:'android'},
                                {value:10, name:'IOS'},
                                {value:35, name:'测试'},
                                {value:10, name:'设计'},
                                {value:25, name:'业务'},
                                {value:32, name:'产品'}
                            ]
                        }
                    ]
                };
                break;
            case 3:
                return{
                    color: colors,
                    title: [{
                        text: '学习情况',
                        y: '5%',
                        x: '50%',
                        textAlign: 'center'
                    }],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        top: '20%',
                        right: '10%',
                        bottom: '20%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    legend: {
                        data: ['完成课程数', '完成率']
                    },
                    xAxis: [{
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: ['林罡', '陈文军', '石丹云', '朱克然', '苏春福', '李英爽', '洪滨', '杨攻', '朱小龙', '张秀洁', '连君龙', '常蕾']
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '完成课程数',
                        min: 0,
                        max: courNum,
                        position: 'right',
                        axisLine: {
                            lineStyle: {
                                color: colors[0]
                            }
                        },
                        axisLabel: {
                            formatter: '{value} 课时'
                        }
                    }, {
                        type: 'value',
                        name: '完成率',
                        min: 0,
                        max: 100,
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: colors[2]
                            }
                        },
                        axisLabel: {
                            formatter: '{value}%'
                        }
                    }],
                    series: [{
                        name: '完成课程数',
                        type: 'bar',
                        data: learned
                    }, {
                        name: '完成率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: comple
                    }]
                }
                break;
        }
    
    }
    render() {
        return (
            <Row id="StatisticsPage">
                <Row id="StatisticsMenu" type="flex" justify="center">
                    <RadioGroup defaultValue="a" size="large">
                        <RadioButton value="a">学习情况</RadioButton>
                        <RadioButton value="b">学员比例</RadioButton>
                        {/* <RadioButton value="c">Beijing</RadioButton> */}
                        {/* <RadioButton value="d">Chengdu</RadioButton> */}
                    </RadioGroup>
                </Row>
                <Row>
                    <div ref="myChart" style={{width:"100%",height:"600px"}}></div>
                </Row>
            </Row>
        );
    }
}

export { StatisticsPage };