import React, {useContext} from 'react';
import {CustomContext} from "../../context";
import styles from './Header.module.css'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai'
import logo from '../../assets/image 4.png'
import {Link} from 'react-router-dom'

const Header = ({isCart, setIsCart}) => {
    const {cart, favorites} = useContext(CustomContext);
    const {header, headerNav, headerLeft, headerRight, headerLeftInfo, headerLeftSubtitle, headerRightPrice, list, item} = styles;
    return (
        <header className={header}>
            <div className="container">
                <nav className={headerNav}>
                    <Link style={{color: '#000000'}} to='/'>
                        <div className={headerLeft}>
                            <img src={logo} alt="logo"/>
                            <div className={headerLeftInfo}>
                                <h1>REACT SNEAKERS</h1>
                                <span className={headerLeftSubtitle}>Магазин лучших кроссовок</span>
                            </div>
                        </div>
                    </Link>
                    <div className={headerRight}>
                        <ul className={list}>
                            <li className={item}>
                                <span style={{cursor: 'pointer'}} onClick={() => setIsCart(true)}>
                                    <MdOutlineLocalGroceryStore/>
                                </span>
                                <p className={headerRightPrice}>{cart.reduce((acc, rec) => acc + rec.price, 0)} руб.</p>
                            </li>
                            <li className={item}>
                                <Link style={{color: '#9B9B9B'}} to='/favourites'>
                                    <AiOutlineHeart/>
                                    <sup style={{fontSize: '12px'}}>{favorites.length > 9 ? '9+' : favorites.length ? favorites.length : ''}</sup>
                                </Link>
                            </li>
                            <li className={item}>
                                <Link style={{color: '#9B9B9B'}} to='/buy'>
                                    <AiOutlineShopping/>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;