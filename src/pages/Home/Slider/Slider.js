import React from 'react';
import styles from './Slider.module.css'
import slideLogo from '../../../assets/slideLogo.png'
import sliderImage from '../../../assets/sliderImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

const Slider = () => {
const {slider,sliderLeft,sliderTitle,sliderBtn,sliderContent,sliderInfo} = styles;
    return (
        <section className={slider}>
            <Swiper  navigation={true}
                     modules={[Navigation, Autoplay]}
                     loop={true}
                     spaceBetween={30}
                     centeredSlides={true}
                     autoplay={{ delay: 2500}}
                     speed={1500}
                     className="mySwiper">
                <SwiperSlide>
                    <div className={sliderContent}>
                        <div className={sliderLeft}>
                            <img src={slideLogo} alt=""/>
                            <div className={sliderInfo}>
                                <h2 className={sliderTitle}><span>Stan Smith</span>,
                                    Forever!</h2>
                                <button className={sliderBtn} type='button'>Купить</button>
                            </div>
                        </div>
                        <div>
                            <img src={sliderImage} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={sliderContent}>
                        <div className={sliderLeft}>
                            <img src={slideLogo} alt=""/>
                            <div className={sliderInfo}>
                                <h2 className={sliderTitle}><span>Stan Smith</span>,
                                    Forever!</h2>
                                <button className={sliderBtn} type='button'>Купить</button>
                            </div>
                        </div>
                        <div>
                            <img src={sliderImage} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={sliderContent}>
                        <div className={sliderLeft}>
                            <img src={slideLogo} alt=""/>
                            <div className={sliderInfo}>
                                <h2 className={sliderTitle}><span>Stan Smith</span>,
                                    Forever!</h2>
                                <button className={sliderBtn} type='button'>Купить</button>
                            </div>
                        </div>
                        <div>
                            <img src={sliderImage} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={sliderContent}>
                        <div className={sliderLeft}>
                            <img src={slideLogo} alt=""/>
                            <div className={sliderInfo}>
                                <h2 className={sliderTitle}><span>Stan Smith</span>,
                                    Forever!</h2>
                                <button className={sliderBtn} type='button'>Купить</button>
                            </div>
                        </div>
                        <div>
                            <img src={sliderImage} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Slider;