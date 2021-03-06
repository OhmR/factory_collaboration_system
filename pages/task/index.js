import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Layout from "../../components/Layout"

const Task = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("./task.json", {
            method: "GET",
        }).then(e => e.json())
            .then(e => {
                // console.info("json data is ", e.data);
                setTasks(e.data);
            })
    }, []);


    return (
        <Layout BreadcrumbName="Task" content={
            <TaskList data={tasks} />
        } />
    );
}

export default Task;