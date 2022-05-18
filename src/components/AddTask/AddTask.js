import React from 'react';

const AddTask = () => {

    const handleAddTask = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.details.value;

        const task = { name, description };

        //send data to server
        fetch('https://calm-garden-99828.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log('success', data);
                    alert("Task added successfully");
                    e.target.reset();
                }
            })
    }


    return (
        <div>
            <h2>Home Component</h2>

            <form onSubmit={handleAddTask} className=' w-1/2 mx-auto mt-14'>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">Task Name</label>
                    <input type="text" name='name' id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="details" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">Task Details</label>
                    <input type="text" name='details' id="details" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default AddTask;