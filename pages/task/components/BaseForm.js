import { Form, Input, Modal, Card } from 'antd';
import React from "react";

const { Item } = Form;
const { TextArea } = Input;

const BaseForm = (props) => {
    const { visible, handleCancel, handleOk, title } = props;
    const [form] = Form.useForm();;

    const onOk = () => {
        const values = form.getFieldsValue();
        // console.info('values are', values);

        handleOk();
    }

    return (
        <Modal
            closable={false}
            visible={visible}
            onCancel={handleCancel}
            onOk={onOk}>
            <Card title={title}>
                <Form form={form}>
                    <Item name="name" label="名称" required={true}>
                        <Input />
                    </Item>
                    <Item name="description" label="描述" required={true}>
                        <TextArea row={4} />
                    </Item>
                </Form>
            </Card>
        </Modal>
    );
}

export default BaseForm;