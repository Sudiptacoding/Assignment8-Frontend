import React from 'react';
import useAllData from '../../hooks/useAllData';
import Banner from './Banner/Banner';
import Loader from '../../common/Loader';
import Blog from './Blog/Blog';

const Home = () => {
    const { isPending, error, course } = useAllData();
    // console.log(course)
    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='dark:bg-gray-900'>
            <Banner></Banner>
            <Blog></Blog>
        </div >
    );
}


export default Home;