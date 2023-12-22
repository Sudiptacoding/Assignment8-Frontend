import React from 'react';
import useAxios from '../../hooks/useAxios';
import useAllData from '../../hooks/useAllData';

const InputToodo = () => {
    const axiosData = useAxios()
    const { isPending, error, course, refetch } = useAllData()
    const handelSubmit = (e) => {
        e.preventDefault()
        const name = e.target.text.value;
        axiosData.post(`/toodo`, { name })
            .then(res => {
                e.target.reset()
                refetch()
            })
    }
    return (
        <div className="dark:bg-gray-900  w-full flex justify-center items-center">
            <div className="max-w-xl mx-auto p-6">
                <form onSubmit={handelSubmit} className="flex items-center mt-1">
                    <input type="text" name='text' className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm" placeholder="Inter your toodo" />
                    <button type='submit' className="h-10 px-4 text-sm bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InputToodo;