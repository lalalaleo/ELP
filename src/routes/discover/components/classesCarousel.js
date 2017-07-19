import React from 'react'
import {  Row, Col, Icon, Card, Carousel, Table ,Radio } from 'antd'

const ClassesCarousel = React.createClass({
    render: function(){
        const ClassesData = [
            {
                classesName:"产品设计入门",
                classesInfo:"本门课将向大家介绍互联网产品是诞生的流程，以及产品经理的工作职责，产品团队构成等等，让大家对产品经理这个岗位有一个初步的了解，并对后续课程的学习做好准备。",
                classesCover:"/image/cover/product.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"Java入门",
                classesInfo:"Java是一种跨平台的语言，一次编写，到处运行，在世界编程语言排行榜中稳居第二名（第一名是C语言）。Java用途广泛，可以用来开发传统的客户端软件和网站后台，也可以开发Android 应用和云计算平台。",
                classesCover:"/image/cover/java.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"Python入门",
                classesInfo:"本系类视频针对没有任何python基础的小白，从python基础的规范和语法开始讲起，循序渐进地学习一些最最基础的python小实例，让你在不知不觉就掌握最最基础的python语法，少理论多实例是本视频的特色。",
                classesCover:"/image/cover/python.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"React入门",
                classesInfo:"由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。",
                classesCover:"/image/cover/react.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"Spring实战",
                classesInfo:"课程主要介绍声明式事务管理、注解事务管理。SSH xml整合、SSH注解整合",
                classesCover:"/image/cover/spring.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"Android开发入门",
                classesInfo:"由浅到深，带你进入Android开发世界。该课程需要有面向对象编程基础和熟悉Java语言",
                classesCover:"/image/cover/android.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"IOS开发入门",
                classesInfo:"零基础iOS开发爱好者，任何喜爱编程的初学者，期待创新学习模式的学习者",
                classesCover:"/image/cover/ios.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"设计冲刺入门",
                classesInfo:"谷歌风投投资的公司每天都会面对各种至关重要的难题：应该把主要的人力物力用于何处，应该如何起步？脑袋里的创意进入现实生活后有多大的成功率？",
                classesCover:"/image/cover/design.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"单元测试入门",
                classesInfo:"对单元测试基本知识进行概述，包括单元测试目标、单元测试任务、单元测试原则",
                classesCover:"/image/cover/unit_test.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"Mysql入门",
                classesInfo:"学习之前：学习过数据库基本原理，理解关系型数据库的概念，包括数据结构、索引、日志等内容",
                classesCover:"/image/cover/sql.png",
                classesHref:"/home/classes",
            },
        ];

        const ClassesList = ClassesData.map(function(classes){
            return(
                <div>
                    <ClassesCarouselItem data={classes} />
                </div>
            );
        });

        return(
            <Carousel autoplay className="show_carousel">
                { ClassesList }
            </Carousel>
        );
    }
});

const ClassesCarouselItem = React.createClass({
    render: function(){
        return(
            <div className="show_carousel_item">
                <a href={this.props.data.classesHref}>
                    <img src={this.props.data.classesCover} />
                    <Row>
                    <div className="show_carousel_item_info">
                        <div>
                            <h3>{this.props.data.classesName}</h3>
                            <p>{this.props.data.classesInfo}</p>
                        </div>
                    </div>
                    </Row>
                </a>
            </div>
        );
    }
});

export { ClassesCarousel };