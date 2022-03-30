import React, {useEffect, useContext, useState} from 'react';
import {CustomContext} from "../../context";
import Slider from "./Slider/Slider";
import styles from './home.module.css'
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Home = () => {

    const {getAllShoes, shoes, addShoesInCart, cart,deleteShoesInCart,  postFavorites, favorites, deleteFavorites} = useContext(CustomContext);

    const [search, setSearch] = useState('')

    useEffect(() => {
        if (search !== '') {
            getAllShoes(search)
        } else {
            getAllShoes()
        }
    },[search]);

    return (
        <section>
            <Slider/>
            <div className={styles.action}>
                <h2 className={styles.title}>Все кроссовки</h2>
                <input onChange={(e) => setSearch(e.target.value)} type="search" className={styles.search} placeholder='Поиск...'/>
            </div>




            <div className={styles.row}>
                {shoes.map((item) => (
                    <div className={styles.card} key={item.id}>
                        {
                            favorites.filter(el => el.id === item.id).length
                                ? <button className={styles.cardLike} type='button' style={{background: '#8BB43C50', color: '#FF8585', border: 'none'}} onClick={() => deleteFavorites(item.id)}><BsHeartFill/></button>
                                : <button className={styles.cardLike} type='button' onClick={() => postFavorites(item)}><BsHeart/></button>
                        }

                        <LazyLoadImage effect='blur' className={styles.cardImg} src={item.imageUrl} alt={item.title}/>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена :</h4>
                                <p className={styles.cardPriceNum}>{item.price.toString().slice(0,-3)},{item.price.toString().substr(-3,)} руб.</p>
                            </div>

                            {
                                cart.filter((el) => el.id === item.id ).length
                                    ?  <button type='button' style={{background: 'linear-gradient(180deg, #89F09C 0%, #3CC755 100%)', color: 'white', border: 'none'}} className={styles.cardBtn} onClick={() => deleteShoesInCart(item.id)}>✔</button>
                                    :  <button type='button' className={styles.cardBtn} onClick={() => addShoesInCart(item.id)}>+</button>
                            }
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Home;