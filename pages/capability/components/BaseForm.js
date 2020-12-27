import { Form, InputNumber, Modal, Card } from 'antd';
import React from "react";

const { Item } = Form;
// const { TextArea } = Input;

const BaseForm = (props) => {
    const { visible, handleCancel, handleOk, title, data } = props;
    console.info("data in form", data);
    const [form] = Form.useForm();

    const onOk = () => {
        const values = form.getFieldsValue();
        console.info('values are', values);

        handleOk();
    }

    return (
        <Modal
            closable={false}
            visible={visible}
            onCancel={handleCancel}
            onOk={onOk}>
            <Card title={title}>
                <Form layout="inline" form={form}>
                    {data.map(element => {
                        return (
                            <Item name={element.name} label={element.description} required={true}>
                                <InputNumber defaultValue={element.capability ? element.capability : 0} />
                            </Item>
                        )
                    })}
                </Form>
            </Card>
        </Modal>
    );
}

export default BaseForm;