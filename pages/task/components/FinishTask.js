import { Button } from 'antd';
import React, { useState } from "react";
import BaseForm from "./BaseForm";

const FinishTask = (props) => {
    const [visible, setVisible] = useState(false);
    const handleClick = (props) => {
        const { key } = props;
        if (key === "operate") {
            setVisible(true);
        }
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
                批量交付
            </Button>
            <BaseForm
                title="批量交付"
                visible={visible}
                handleCancel={handleCancel}
                handleOk={handleOk}
            />
        </>
    );
}

export default FinishTask;