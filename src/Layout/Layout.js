import React, {useContext, useEffect, useState} from 'react';
import Header from "./Header/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Order from "../pages/Order/Order";
import Favourites from "../pages/Favourites/Favourites";
import styles from './layout.module.css'
import Cart from "./Cart/Cart";
import axios from "axios";
import {CustomContext} from "../context";

const Layout = () => {

    const [isCart, setIsCart] = useState(false);

    const {setFavorites, getAllFavorites} = useContext(CustomContext)

    useEffect(() => {
       getAllFavorites()
    }, []);

    return (
        <div className={styles.layout}>
           <Header isCart={isCart} setIsCart={setIsCart}/>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/buy' element={<Buy/>}/>
               <Route path='/favourites' element={<Favourites/>}/>
               <Route path='/order' element={<Order/>}/>
           </Routes>
            <Cart isCart={isCart} setIsCart={setIsCart}/>
        </div>
    );
};

export default Layout;