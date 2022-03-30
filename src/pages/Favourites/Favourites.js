import React, {useContext} from 'react';
import {CustomContext} from "../../context";
import styles from "../Favourites/favourites.module.css";
import {BsHeartFill} from "react-icons/bs";
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import cryEmoji from "../../assets/cryEmoji.png";

const Favourites = () => {

    const {favorites, cart, deleteShoesInCart, addShoesInCart, deleteFavorites} = useContext(CustomContext);

    const navigate = useNavigate();

    return (
        <section>
            {
                favorites.length
                ? <>
                        <div className={styles.back}>
                            <Link to='/' style={{color: '#C8C8C8'}}>
                                <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                            </Link>
                            <h2 className={styles.title}>Мои избранные</h2>
                        </div>

                        <div className={styles.row}>
                            {
                                favorites.map(item => (

                                    <div className={styles.card} key={item.id}>
                                        <button className={styles.cardLike} type='button' style={{background: '#FEF0F0', color: '#FF8585', border: 'none'}} onClick={() => deleteFavorites(item.id)}><BsHeartFill/></button>
                                        <img className={styles.cardImg}  src={item.imageUrl} alt={item.title}/>
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

                                ))
                            }
                        </div>
                    </>
                    :  <div className={styles.empty}>
                        <div className={styles.emptyRow}><img src={cryEmoji} alt="cry emoji"/>
                            <h3 className={styles.emptyTitle}>Закладок нет :(</h3>
                            <p className={styles.emptySubtitle}>Вы ничего не добавляли в закладки</p>
                            <button className={styles.emptyBtn} type='button' onClick={() => navigate('/')}> ← Вернуться назад</button>
                        </div>

                    </div>
            }

        </section>
    );
};

export default Favourites;