import { Button } from 'antd';
import React, { useState } from "react";
import BaseForm from "./BaseForm";

const UpdateCapability = (props) => {
    const { data } = props;
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true);
    }

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={handleClick}
                style={{
                    marginRight: 10
                }}
            >
                修改产能
            </Button>
            <BaseForm
                title="修改产能"
                visible={visible}
                handleCancel={handleCancel}
                handleOk={handleOk}
                data={data}
            />
        </>
    );
}

export default UpdateCapability;