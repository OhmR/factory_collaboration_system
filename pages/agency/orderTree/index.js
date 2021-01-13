import { useState, useEffect } from 'react';
import TreeOrder from '../components/TreeOrder';
import Layout from "../../../components/Layout"

const Task = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch("../agency.json", {
            method: "GET",
        }).then(e => e.json())
            .then(e => {
                console.info("json data is ", e);
                setChartData(e);
            })
    }, []);

    return (
        <Layout BreadcrumbName="Agency" content={
            chartData.length !== 0 ? <TreeOrder data={chartData} /> : null
        } />
    );
}

export default Task;