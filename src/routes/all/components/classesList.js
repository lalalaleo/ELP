import React from 'react'
import styles from './classesList.less'
import {  Row, Table } from 'antd'

const ClassesList = React.createClass({
    render: function(){
        const columns = [
            {
                title: 'Cover',
                dataIndex: 'cover',
            }, 
            {
                title: 'Name',
                dataIndex: 'name',
            }, 
            {
                title: 'Info',
                dataIndex: 'info',
            }
        ];

        const handleData = function(data){
            var no = 1;
            for(var i in data){
                data[i].key = no++;
                data[i].cover = <img src={data[i].cover} />;
                data[i].name = <h4>{data[i].name}</h4>;
                data[i].info = <p>{data[i].info}</p>
            }
            return data;
        }
        return(
            <Row id="ClassesList">
                <Table 
                    columns={columns} 
                    dataSource={handleData(this.props.data)} 
                    size="small" 
                    showHeader={false} 
                    pagination={{pageSize:this.props.pageSize}} 
                />
            </Row>
        );
    }
});

export { ClassesList }