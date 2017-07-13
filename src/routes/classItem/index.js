import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.less'
import { Header,IndexToolBar } from '../../components/layout/header'
import { Content } from '../../components/layout/content'
import { Icon, Menu, Row, Col } from 'antd'
import PDFObject from '../../utils/pdfobject.min.js'

const Class = React.createClass({
    render: function(){
        $("#page_content").ready(function(){
            PDFObject.embed("/files/test.pdf", "#Class_content",{width: "100%"});
            $("#Class_content").append("<div><a id='btnscreen'></a></div>");
            ReactDOM.render(<Icon type="arrows-alt" />,document.getElementById("btnscreen"));
            $("#btnscreen").click(function(){
                if($("#Class_content").width()<=1000){
                    $("#Class_content").css({
                        "position": "fixed",
                        "top":0,
                        "left": 0,
                        "z-index": 999,
                        "height":"100%"
                    });
                    $("body").css({
                        "overflow": "hidden"
                    });
                    ReactDOM.render(<Icon type="shrink" />,document.getElementById("btnscreen"));
                }
                else{
                    $("#Class_content").css({
                        "position": "relative",
                        "z-index": 10,
                        "height": "540px"
                    });
                    $("body").css({
                        "overflow": ""
                    });
                    ReactDOM.render(<Icon type="arrows-alt" />,document.getElementById("btnscreen"));
                }
            });
        });
        return(
            <div id="Class" className="page_content">
                <div id="Class_content" className="page_content_item">
                     {/*<img src="/image/cover_react_blue.png" /> */}
                     {/* <iframe src="https://www.youtube.com/embed/YWaptz0EUCk" frameborder="0" allowfullscreen></iframe>  */}
                    
                </div>
            </div>
        );
    }
});

export { Class }