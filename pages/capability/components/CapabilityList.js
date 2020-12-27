import { useState, useEffect, useRef } from 'react';
import { Table, Card, Button, Tag } from 'antd';
import Link from 'next/link';
import UpdateCapability from './UpdateCapability';

const TaskList = (props) => {
    const { data } = props;
    const [tableData, setTableData] = useState([...data]);
    const [selectedRowKeys, setselectedRowKeys] = useState([]);
    const columns = [
        {
            title: '名称',
            align: 'center',
            dataIndex: 'name',
            render: (name) => {
                console.info(name);
                return (
                    <div>
                        <Link href={{ pathname: '/basket', query: { name: name } }}>
                            <a>{name}</a>
                        </Link>
                    </div>
                )
            }
        },
        {
            title: '描述',
            align: 'center',
            dataIndex: 'description'
        },
        {
            title: '生产能力',
            align: 'center',
            dataIndex: 'capability'
        },
        {
            title: '操作',
            align: 'center',
            dataIndex: '',
            render: (e) => {
                console.info(e);
                return (
                    <>
                        <Button style={{ marginLeft: 10 }} size="small" danger>删除</Button>
                    </>);
            }
        }
    ];
    useEffect(() => {
        setTableData(data);
    }, [data])

    const rowSelelction = {
        onChange: rowKeys => {
            setselectedRowKeys(rowKeys);
            console.info(`rowKeys: ${rowKeys}`);
        },
        selectedRowKeys,
    }

    return (
        <Card
            // style={{ height: "%100" }}
            title={<>任务列表</>}
            extra={
                <>
                    <UpdateCapability data={tableData} />
                    <Button type="primary" style={{ marginRight: 10 }}>新增产能</Button>
                    <Button type="danger" style={{ marginRight: 10 }}>批量删除</Button>
                </>
            }>

            <Table columns={columns} dataSource={tableData} rowSelection={rowSelelction} />
        </Card >
    )
}

export default TaskList;