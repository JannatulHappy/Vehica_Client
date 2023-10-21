import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Brands from '../../components/Brands/Brands';
import Banner from '../../components/Banner/Banner';
import IndexPage from '../../components/IndexPage/IndexPage';
import Testimonial from '../../components/Testimonial/Testimonial';
import Stat from '../Stat/Stat';
import NewsLetter from "../../components/NewsLetter/NewsLetter"

const Home = () => {
    const products = useLoaderData();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
   
    return (
        <div>
            <Banner></Banner>
            <Brands products={products}></Brands>
            <IndexPage></IndexPage>
            <Testimonial></Testimonial>
            <Stat></Stat>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;