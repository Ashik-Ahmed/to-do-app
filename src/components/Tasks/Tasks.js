import React, { useEffect, useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://calm-garden-99828.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }, [tasks])

    const handleTaskDelete = (id) => {

        const proceed = window.confirm("Are you sure??");
        if (proceed) {
            const url = `https://calm-garden-99828.herokuapp.com/task/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = tasks.filter(task => task._id !== id);
                        setTasks(remaining);
                    }
                })
        }

    }

    const handleTaskComplete = (id) => {
        const complete = 'completed';

        const updatedTask = { complete };

        //send data to server
        const url = `https://calm-garden-99828.herokuapp.com/task/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert("Task Updated successfully");
            })
    }

    return (
        <div className='mt-14'>
            <h2>Tasks List</h2>

            <div class="relative w-3/4 mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Task name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task => <>
                                <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {task.name}
                                    </th>
                                    <td style={task.complete && { 'text-decoration': 'line-through' }} class="px-6 py-4">
                                        {task.description}
                                    </td>
                                    <td class="px-6 py-4 flex gap-x-2">
                                        <button onClick={() => handleTaskDelete(task._id)} className='btn btn-sm bg-red-500  p-1 rounded text-white'>Delete</button>
                                        <button onClick={() => handleTaskComplete(task._id)} className='btn btn-sm bg-green-500  p-1 rounded text-white'>Complete</button>
                                    </td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default Tasks;