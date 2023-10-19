import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brands from '../../components/Brands/Brands';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div>
            <Banner></Banner>
           <Brands></Brands>
        </div>
    );
};

export default Home;