import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg'

const Home = () => {
    return (

        <div className="md:flex  items-center mt-14 w-full mx-auto  h-90 bg-white md:flex-row">
            <img class="object-cover w-1/2 mx-auto rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg" src={banner} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-8 text-5xl font-bold tracking-tight text-violet-900 dark:text-white">Your Daily Task Manager</h5>
                <p class="mb-3 italic font-normal text-gray-700 dark:text-gray-400">Best way to manage your daily tasks. No need to worry for missing a single event. Give your headache to us</p>
                <div><button className='btn btn-sm bg-violet-500 rounded-3xl p-2 uppercase shadow-lg text-white font-bold'><Link to='/add'>Add Task</Link></button></div>
            </div>
        </div>

    );
};

export default Home;