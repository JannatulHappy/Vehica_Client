import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const cartData= useLoaderData();
    console.log("user in cart",user)
    console.log("user in cart",cartData)
    return <div className=''>/myCart</div>;
};

export default MyCart;