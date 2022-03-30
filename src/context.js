import React, {createContext, useState} from 'react'
import axios from "axios";

export const CustomContext = createContext();

export const Context = (props) => {

    const [shoes, setShoes] = useState([]);
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [orders, setOrders] = useState([]);


    const getAllShoes = (title = '') => {
        axios(`https://basketshoes.herokuapp.com/api/sneakers?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err)  => console.log('Произошла ошибка') )
    };

    const getAllFavorites = () => {
        axios.get('https://basketshoes.herokuapp.com/api/favorites')
            .then(({data}) => setFavorites(data))
            .catch((err) => console.log('Error'))
    };



    const postFavorites = (item) => {
        axios.post('https://basketshoes.herokuapp.com/api/favorites', {...item})
            .then(() => getAllFavorites())
    };

    const getAllOrders = () => {
        axios.get('https://basketshoes.herokuapp.com/api/orders')
            .then(({data}) => setOrders(data))
            .catch((err) => console.log('Error'))
    };

    const postOrders = (item) => {
        axios.post('https://basketshoes.herokuapp.com/api/orders', {...item})
            .then(() => getAllOrders())
    };



    const deleteFavorites = (id) => {
      axios.delete(`https://basketshoes.herokuapp.com/api/favorites/${id}`)
          .then(() => getAllFavorites())
    };

    const addShoesInCart = (id) => {
        let idx = shoes.findIndex((item) => item.id === id);
        setCart([...cart, shoes[idx]])
    };

    const deleteShoesInCart = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id
        }))
    };



   const value = {
       shoes,
       setShoes,
       getAllShoes,
       cart,
       setCart,
       addShoesInCart,
       deleteShoesInCart,
       getAllFavorites,
       postFavorites,
       favorites,
       setFavorites,
       deleteFavorites,
       getAllOrders,
       postOrders,
       orders,
       setOrders
   };

    return <CustomContext.Provider value={value}>
              {props.children}
    </CustomContext.Provider>
};