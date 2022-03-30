import React, {useEffect, useContext} from 'react';
import styles from './buy.module.css'
import {CustomContext} from "../../context";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import sadEmoji from "../../assets/sadEmoji.png";


const Buy = () => {

    const {orders, getAllOrders} = useContext(CustomContext);

    const navigate = useNavigate();

    useEffect(() => {
        getAllOrders()
    }, []);

    return (
        <section className={styles.section}>
            {
                orders.length
                ? <>
                        <div className={styles.back}>
                            <Link to='/' style={{color: '#C8C8C8'}}>
                                <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                            </Link>
                            <h2 className={styles.title}>Мои покупки</h2>
                        </div>
                        <div className={styles.row}>
                            {orders.map((item) => (
                                <div className={styles.card} key={item.id}>
                                    <h3 className={styles.id}>Номер заказа : {item.id}</h3>
                                    <p className={styles.date}>Дата заказа : {item.date}</p>
                                    <ul className={styles.list}>
                                        {item.order.map((el) => (
                                            <li className={styles.listItem} key={el.title}>
                                                <img className={styles.listItemImg} src={el.imageUrl} alt={el.title}/>
                                                <div className={styles.listItemInfo}>
                                                    <p className={styles.listItemTitle}>{el.title}</p>
                                                    <p className={styles.listItemPrice}>{el.price} руб.</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className={styles.price}>Сумма : {item.price} руб.</p>
                                </div>
                            ))}
                        </div>
                    </>
                    : <div className={styles.empty}>
                        <div className={styles.emptyRow}><img src={sadEmoji} alt="sad emoji"/>
                            <h3 className={styles.emptyTitle}>У вас нет заказов</h3>
                            <p className={styles.emptySubtitle}> Вы нищеброд? <br/>  Оформите хотя бы один заказ.</p>
                            <button className={styles.emptyBtn} type='button' onClick={() => navigate('/')}> ← Вернуться назад</button>
                        </div>

                    </div>
            }

        </section>
    );
};

export default Buy;