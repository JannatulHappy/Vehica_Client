import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='text-white bg-black01 font-mulish'>
            <Header></Header>
        <div className="">
          <Outlet></Outlet>
            </div>
            <Footer></Footer>
      </div>
    );
};

export default Root;