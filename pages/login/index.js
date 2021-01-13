import React from 'react';
import { Card, Descriptions, Avatar, Rate } from 'antd';
import cookie from "react-cookies";
import LoginForm from "./components/LoginForm"

const Login = () => {
    return (
        <div>
            <div style={{
                // display: 'inline-block',
                height: "100vh",
                filter: "blur(3px)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(./background.jpg)"
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

export default Login;