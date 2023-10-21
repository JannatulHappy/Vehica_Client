import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brands from '../../components/Brands/Brands';
import Banner from '../../components/Banner/Banner';
import IndexPage from '../../components/IndexPage/IndexPage';

const Home = () => {
    const products = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Brands products={products}></Brands>
            <IndexPage></IndexPage>
        </div>
    );
};

export default Home;