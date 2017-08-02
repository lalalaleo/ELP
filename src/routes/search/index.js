import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Table, Row, Col } from 'antd'
import ClassList from './components/classList'

const Search = React.createClass({
    componentDidMount: function(){
        var resultChange = this.resultChange;
        var searchInfo = this.props.location.state.searchInfo;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8888/midwayIsland/data",
            // url: "http://192.168.100.192:8888/midwayIsland/data",
            dataType: "JSON",
            data: "type=search&&searchInfo="+searchInfo,
            success: function(data){
                    console.log(data);
                if(data.code==200){
                    resultChange(data.data.result);
                }
            },
        });
    },
    getInitialState: function(){
        return{
            searchInfo:"",
            result:[]
        }
    },
    resultChange:function(data){
        this.setState({
            result:data
        });
    },
    render: function(){
        return (
            <div id="Search" className="page_content">
                <ClassList data={this.state.result} />
            </div>
        );
    }
});

export { Search }