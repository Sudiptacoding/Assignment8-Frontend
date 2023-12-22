import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>

            <div class="bg-slate-900">
                <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">

                        <div class="flex justify-center">

                        </div>

                        <div class="max-w-3xl text-center mx-auto">
                            <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                Welcome to our Task Management Platform
                            </h1>
                        </div>


                        <div class="max-w-3xl text-center mx-auto">
                            <p class="text-lg text-gray-400">Foster seamless collaboration by creating projects and assigning tasks to team members. Enhance communication within your team, leading to increased efficiency and project success.</p>
                        </div>
                        <div class="text-center">
                            <Link to='/Dashboard' class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                                Let’s Explore
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;