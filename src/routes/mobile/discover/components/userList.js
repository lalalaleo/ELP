import React from 'react'
import style from './userList.less'
import {  Row, Col, Icon, Card, Carousel, Table ,Radio } from 'antd'

const UserList = React.createClass({
    render: function(){
        const handleUserList = this.props.data.map(function(User){
            return(
                <UserItem data={ User } />
            );
        });
        return(
            <Row type="flex" justify="space-around" align="top">
                { handleUserList }
            </Row>
        );
    }
});

const UserItem = React.createClass({
    render: function(){
        return(
            <div className="userItem">
                <center>
                    <img src={ this.props.data.avatar } />
                    <p name='name'>{ this.props.data.name }</p>
                    <p name='department'>{ this.props.data.department }</p>
                </center>
            </div>
        );
    }
});

export { UserList }