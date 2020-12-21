import React from 'react';
import { Card, Descriptions, Avatar, Rate } from 'antd';
import cookie from "react-cookies";
import LoginForm from "./components/LoginForm"

export default () => {
    return (
        <Card style={{ width: 600 }}>
            <LoginForm />
        </Card>
    )
}