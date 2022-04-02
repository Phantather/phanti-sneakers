import React, {useContext} from 'react';
import {CustomContext} from "../../context";
import styles from './cart.module.css'
import {useNavigate} from 'react-router-dom'
import cartBox from '../../assets/cartBox.png'

const Cart = ({isCart, setIsCart}) => {

    const {cart, deleteShoesInCart} = useContext(CustomContext);


    const navigate = useNavigate();

    const closeCart = (e) => {
        if (e.target.className === styles.overlay) {
            setIsCart(false)
        }
    };

    return (
        <div onClick={closeCart} className={styles.overlay} style={{display: isCart ? 'flex' : 'none'}}>
            <div className={styles.cart}>
                {
                    cart.length
                        ? <>
                            <div className={styles.cartContent}>
                                <h2 className={styles.cartTitle}>Корзина</h2>
                                <ul className={styles.list}>
                                    {cart.map((el) => (
                                        <li key={el.id} className={styles.item}>
                                            <img className={styles.itemImg} src={el.imageUrl} alt=""/>
                                            <div className={styles.itemCenter}>
                                                <h4 className={styles.itemTitle}>{el.title}</h4>
                                                <p className={styles.itemPrice}>{el.price} руб.</p>
                                            </div>
                                            <button className={styles.itemBtn} onClick={() => deleteShoesInCart(el.id)}>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                                        fill="#B5B5B5"/>
                                                </svg>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.cartFooter}>
                                <div className={styles.cartFooterItem}>
                                    <p className={styles.cartFooterTitle}>Итого</p>
                                    <div className={styles.cartFooterLine}/>
                                    <p className={styles.itemPrice}>{cart.reduce((acc, rec) => acc + rec.price, 0)} руб. </p>
                                </div>
                                <div className={styles.cartFooterItem}>
                                    <p className={styles.cartFooterTitle}>Налог 5 %</p>
                                    <div className={styles.cartFooterLine}/>
                                    <p className={styles.itemPrice}>{Math.ceil(cart.reduce((acc, rec) => acc + rec.price, 0) / 100 * 5)} руб. </p>
                                </div>
                                <button type='button' className={styles.cartFooterBtn} onClick={() => {
                                    setIsCart(false);
                                    navigate('/order')
                                }}>Оформить заказ
                                </button>

                            </div>
                        </>
                        : <div className={styles.empty}>
                            <h2 className={styles.cartTitle}>Корзина</h2>
                            <div className={styles.emptyRow}><img src={cartBox} alt="cart box"/>
                                <h3 className={styles.emptyTitle}>Корзина пустая</h3>
                                <p className={styles.emptySubtitle}>Добавьте хотя бы одну пару <br/> кроссовок, чтобы
                                    сделать заказ.</p>
                                <button className={styles.emptyBtn} type='button' onClick={() => setIsCart(false)}> ←
                                    Вернуться назад
                                </button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;