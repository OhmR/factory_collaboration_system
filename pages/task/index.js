import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        console.info('in useEffect');
        fetch("./task.json", {
            method: "GET",
        }).then(e => e.json())
            .then(e => {
                console.info("json data is ", e.data);
                setTasks(e.data);
            })
    }, []);

    return (
        <>
            <TaskList data={tasks} />
        </>
    );
}

export default Task;