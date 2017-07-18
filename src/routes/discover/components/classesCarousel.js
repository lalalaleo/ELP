import React from 'react'
import {  Row, Col, Icon, Card, Carousel, Table ,Radio } from 'antd'

const ClassesCarousel = React.createClass({
    render: function(){
        const ClassesData = [
            {
                classesName:"Android开发入门",
                classesInfo:"2",
                classesCover:"/image/cover/android.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"IOS开发入门",
                classesInfo:"2",
                classesCover:"/image/cover/ios.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"设计冲刺入门",
                classesInfo:"2",
                classesCover:"/image/cover/design.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"单元测试入门",
                classesInfo:"2",
                classesCover:"/image/cover/unit_test.png",
                classesHref:"/home/classes",
            },
            {
                classesName:"Mysql入门",
                classesInfo:"2",
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