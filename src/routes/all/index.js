import $ from 'jquery';
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
    componentDidMount: function(){
        var classesListChange = this.classesListChange;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=hotAE",
            success: function(data){
                    console.log(data);
                if(data.code==200){
                    classesListChange(data.data.classesList);
                }
            },
        });
    },
    getInitialState:function(){
        return{
            classesData: []
        }
    },
    classesListChange: function(data){
        this.setState({
            classesData: data,
        });
    },
    handleListChange: function(e){
        var classesListChange = this.classesListChange;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type="+e.target.value+"AE",
            success: function(data){
                    console.log(data);
                if(data.code==200){
                    classesListChange(data.data.classesList);
                }
            },
        });
    },
    handleMenuChange: function(){
        var classesListChange = this.classesListChange;
        this.refs.tags.value = "hot";
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=hotFE",
            success: function(data){
                if(data.code==200){
                    classesListChange(data.data.classesList);
                }
            },
        });
    },
    render: function(){
        return(
            <Row id="AllClasses" className="page_content">
                <Col span={4}>
                    <Menu ref="menu" style={{ width: 180 }} defaultSelectedKeys={['AE']} mode="inline" style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}} onClick={this.handleMenuChange}>
                        <Menu.Item key="AE">后端</Menu.Item>
                        <Menu.Item key="FE">前端</Menu.Item>
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
                        <RadioGroup ref="tags" defaultValue="hot" size="large" style={{marginBottom:20}} onChange={this.handleListChange}>
                            <RadioButton value="hot">最热</RadioButton>
                            <RadioButton value="new">最新</RadioButton>
                        </RadioGroup>
                    </Row>
                    <ClassesList data={this.state.classesData} pageSize={10} />
                </Col>
            </Row>
        );
    }
});

export { All };