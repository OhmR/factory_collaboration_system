import { Menu, Layout, Breadcrumb } from 'antd';
import React, { useEffect } from "react";
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import cookie from 'react-cookies'

const { Item } = Menu;
const { Item: BreadcrumbItem } = Breadcrumb;
const { Header, Content, Sider, Footer } = Layout;

const MainMenu = (props) => {
    const { content } = props;
    const router = useRouter();
    useEffect(() => {
        // if 判断条件用于判断是否登录
        console.info("in useEffect", cookie.load("HFuserinfo"))
        if (!cookie.load("HFuserinfo")) {
            router.push("/login")
        }
    }, [])

    const handleClick = (props) => {
        const { key } = props;
        console.info(props);
        if (key === "home") {
            router.push("/home");
        } else {
            router.push("/" + key);
        }
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu
                    theme="dark"
                    onClick={handleClick}
                    mode="horizontal"
                // style={{
                //     height: 60,
                //     display: 'flex',
                //     margin: '0 auto',
                //     width: 760
                // }}
                >
                    <Item key="home" icon={<MailOutlined />}>
                        首页
                    </Item>
                    <Item key="history" icon={<SettingOutlined />}>
                        历史记录
                    </Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu
                        onClick={handleClick}
                        mode="inline"
                        style={{
                            height: '100%',
                        }}>
                        <Item key="task" icon={<MailOutlined />}>
                            任务栏
                        </Item>
                        <Item key="state" icon={<MailOutlined />}>
                            工厂信息
                        </Item>
                        <Item key="capability" icon={<MailOutlined />}>
                            生产状态
                        </Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 0px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>SecondLevel</BreadcrumbItem>
                    </Breadcrumb>
                    <Content>
                        {content}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>2020 Created by Ohmr</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default MainMenu;