import React, { Component } from 'react';
import styles from './studentsPage.less'
import { Row, Col } from 'antd'
import { UserList } from '../../discover/components/userList'

class StudentsPage extends Component {
    
    render() {
        const test_studentData = [
            {
                avatar:'/image/avatar/test/test_1.png',
                name:'林罡',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_2.png',
                name:'陈文军',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_9.png',
                name:'石丹云',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_10.png',
                name:'朱克然',
                department:'后端',
            },
            {
                avatar:'/image/avatar/test/test_3.png',
                name:'杨攻',
                department:'前端',
            },
            {
                avatar:'/image/avatar/test/test_4.png',
                name:'连君龙',
                department:'数据库',
            },
            {
                avatar:'/image/avatar/test/test_7.png',
                name:'韩悦',
                department:'测试',
            },
        ]
        return (
            <Row id="StudentPage">
                <UserList data={ test_studentData } />
            </Row>
        );
    }
}

export { StudentsPage };