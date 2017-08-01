import React, { Component } from 'react';
import { Row, Col, Table } from 'antd'

class ClassList extends Component {
    render() {
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
                    data[i].info = <p>{data[i].info}</p>;
                }
                return data;
        }
        function LinkHref(){
            window.location.href = "/home/classes"
        }
        return (
            <Row id="ClassesList">
                <Table
                    columns={columns} 
                    dataSource={handleData(this.props.data)} 
                    size="small" 
                    showHeader={false}
                    onRowClick={LinkHref}
                    pagination={{pageSize:10}} 
                />
            </Row>
        );
    }
}

export default ClassList;