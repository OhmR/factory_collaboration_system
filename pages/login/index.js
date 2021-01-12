import React from 'react';
import { Card, Descriptions, Avatar, Rate } from 'antd';
import cookie from "react-cookies";
import LoginForm from "./components/LoginForm"

export default () => {
    return (
        <div>
            <div style={{
                // display: 'inline-block',
                height: "100vh",
                filter: "blur(5px)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(./avatar.jpg)"
            }} />
            <Card
                style={{
                    width: 370,
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.9)",
                    position: "absolute",
                    right: 0,
                    top: 0
                }}>
                <LoginForm />
            </Card>
        </div >
    )
}