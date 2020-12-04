import { useState } from 'react';
import { Table, Card, Button, Tag } from 'antd';
import Link from 'next/link';
import FinishTask from './FinishTask';

const TaskList = (props) => {
    const { data } = props;
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
            title: '接单时间',
            align: 'center',
            dataIndex: 'startDate',
            render: (startDate) => {
                console.info(startDate);
                return <>{new Date(startDate).toDateString()}</>
            }
        },
        {
            title: '交付时间',
            align: 'center',
            dataIndex: 'ddl',
            render: (ddl) => {
                console.info(ddl);
                return <>{new Date(ddl).toDateString()}</>
            }
        },
        {
            title: '状态',
            align: 'center',
            dataIndex: 'state',
            render: (state) => {
                console.info(state);
                const tag = (state === "finish") ? <Tag color="green">已完成</Tag> :
                    (state === "doing") ? <Tag color="orange">制作中</Tag> :
                        (state === "failed") ? <Tag color="red">已超时</Tag> : <Tag color="blue">审核中</Tag>;
                return tag;
            }
        },
        {
            title: '操作',
            align: 'center',
            dataIndex: '',
            render: (e) => {
                console.info(e);
                return (
                    <>
                        <Button size="small" type="primary" disabled={e.state !== "doing"}>
                            交付
                        </Button>
                        {/* <Button style={{ marginRight: 10 }} size="small" danger>删除</Button> */}
                    </>);
            }
        }
    ];

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
        // extra={
        //     <>
        //         <FinishTask />
        //     </>
        // }>
        >
            <Table columns={columns} dataSource={data} rowSelection={rowSelelction} />
        </Card >
    )
}

export default TaskList;