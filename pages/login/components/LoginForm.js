import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import cookie from "react-cookies"

const NormalLoginForm = (props) => {
    const router = useRouter();
    const onFinish = values => {
        console.log('Received values of form: ', values);
        fetch("./user.json", {
            method: "GET",
        }).then(e => e.json())
            .then(e => {
                console.info("json data is ", e.data);
                e.data.forEach((value) => {
                    if (value.name && value.name == values.name &&
                        value.password && value.password == values.password) {
                        console.info("currect user");
                        cookie.save("HFuserinfo", value, { path: "/" })
                        router.push("/home")
                    }
                })
            })
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};

export default NormalLoginForm;