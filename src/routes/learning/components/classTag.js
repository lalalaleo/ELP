import React from 'react';
import {  Tag  } from 'antd'

const ClassTag = React.createClass({
    render: function (){
        return (
            <Tag color={this.props.data.color} className="classTag"><a href={this.props.data.courseUrl}>{this.props.data.courseName}</a></Tag>
        );
    }
});


export { ClassTag };