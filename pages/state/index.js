import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Card, Descriptions, Avatar, Rate } from 'antd';
import { Chart } from "@antv/g2";
import StateChart from './StateChart';
import Layout from "../../components/Layout"

const { Item } = Descriptions;

export default function FactoryState() {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch("./factoryState.json", {
            method: "GET",
        }).then(e => e.json())
            .then(e => {
                // console.info("json data is ", e.data);
                setState(e.data);
            })
    }, []);

    return (
        <Layout BreadcrumbName="State" content={
            <Card>
                <Descriptions layout="vertical" column={1} style={{ textAlign: "center" }}>
                    <Item style={{ paddingBottom: 8 }}>
                        <Avatar size={90} src="./avatar.jpg" />
                    </Item>
                    <Item style={{ paddingBottom: 8 }}>
                        <div style={{ fontSize: 23 }}>{state.name}</div>
                    </Item>
                    <Item style={{ paddingBottom: 8 }}>
                        <div>{state.description}</div>
                    </Item>
                    <Item style={{ paddingBottom: 8 }}>
                        <div>Member since: {new Date(state.joinDate).toDateString()}</div>
                    </Item>
                    {state.credit ?
                        <Item>
                            <Rate disabled allowHalf defaultValue={state.credit} />
                        </Item> : null}
                </Descriptions>
                <div style={{ textAlign: "center", paddingLeft: "10%", paddingRight: "10%" }} id="container" />
                <StateChart data={state.audit}></StateChart>
            </Card >
        } />
    );
}
