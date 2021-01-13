import { useState, useEffect, useRef } from 'react';
import { Table, Card, Button, Tag } from 'antd';
import { useRouter } from "next/router";

const OrderList = (props) => {
    const router = useRouter();
    const { data } = props;
    console.info('data', data);
    const [tableData, setTableData] = useState([]);
    const [selectedRowKeys, setselectedRowKeys] = useState([]);
    const columns = [
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
                // console.info(startDate);
                return <>{new Date(startDate).toDateString()}</>
            }
        },
        {
            title: '最晚交付时间',
            align: 'center',
            dataIndex: 'ddl',
            render: (ddl) => {
                // console.info(ddl);
                return <>{new Date(ddl).toDateString()}</>
            }
        },
        {
            title: '预计完成时间',
            align: 'center',
            dataIndex: 'predictDate',
            render: (predictDate) => {
                // console.info(ddl);
                return <>{new Date(predictDate).toDateString()}</>
            }
        },
        {
            title: '状态',
            align: 'center',
            dataIndex: 'state',
            render: (state) => {
                // console.info(state);
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
                // console.info(e);
                return (
                    <>
                        <Button size="small" type="primary" disabled={e.state !== "doing"} onClick={() => { router.push("/agency/orderTree") }}>
                            进度查询
                    </Button>
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
            // console.info(`rowKeys: ${rowKeys}`);
        },
        selectedRowKeys,
    }

    return (
        <Card title={<>任务列表</>} >
            {tableData.length !== 0 ? <Table columns={columns} dataSource={tableData} rowSelection={rowSelelction} /> : null}
        </Card >
    )
}

export default OrderList;