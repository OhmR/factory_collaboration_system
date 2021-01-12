import { useState, useEffect } from 'react';
import TaskList from './components/CapabilityList';
import Layout from "../../components/Layout"

const Capability = () => {
    const [capability, setCapability] = useState([]);
    useEffect(() => {
        fetch("./capability.json", {
            method: "GET",
        }).then(e => e.json())
            .then(e => {
                // console.info("json data is ", e.data);
                setCapability(e.data);
            })
    }, []);

    return (
        <Layout BreadcrumbName="Capability" content={
            <TaskList data={capability} />
        } />
    );
}

export default Capability;