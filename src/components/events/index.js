import './style.css';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Input, Rate, Skeleton, notification } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Controller, useForm } from 'react-hook-form';
// import { DateTime } from 'luxon';
// import axios from '../../axioscall';
// import NumberFormat from 'react-number-format';

import _1 from '../../assets/images/content/_1.avif';
import _2 from '../../assets/images/content/_2.avif';
import _3 from '../../assets/images/content/_3.avif';
import _4 from '../../assets/images/content/_4.avif';
import _5 from '../../assets/images/content/_5.avif';
import _6 from '../../assets/images/content/_6.avif';
import _7 from '../../assets/images/content/_7.avif';
import _8 from '../../assets/images/content/_8.avif';
import _9 from '../../assets/images/content/_1.avif';
import _10 from '../../assets/images/content/_2.avif';
import _11 from '../../assets/images/content/_3.avif';
import _12 from '../../assets/images/content/_4.avif';

import ArrowDown from '../../assets/images/icons/chevron-down.svg';

import Category from '../../assets/images/icons/archive.svg';
import Compass from '../../assets/images/icons/compass.svg';
import VideoIcon from '../../assets/images/icons/video.svg';
import Calendar from '../../assets/images/icons/calendar.svg';
import CreditCard from '../../assets/images/icons/credit-card.svg';
import Banner from '../../assets/images/content/mock3.webp';

import ArrowNext from '../../assets/images/icons/chevron-right.svg';
import ArrowPrevious from '../../assets/images/icons/chevron-left.svg';

import Footer from '../../utils/footer';
import Nav from '../../utils/nav';

const Homepage = () => {

    const [eventsCategories, setEventsCategories] = useState([]);
    const [physicalEvents, setPhysicalEvents] = useState([]);
    const [trendingEvents, setTrendingEvents] = useState([]);
    const [eventsData, setEventsData] = useState([]);
    const [stillLoading, setStillLoading] = useState(true);
    const [stillLoadingCategory, setStillLoadingCategory] = useState(true);

    let skeleton = [];
    for (let i = 0; i < 4; i++) {
        skeleton.push(<Skeleton active />)
    }

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            placement: 'bottomRight',
            description:
                message,
        });
    };

    const options = {
        nav: false,
        rewind: true,
        autoplay: false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        dotData: true,
        loop: true,
        margin: 15,
        responsiveClass: true,
        navText: [`<img src=${ArrowPrevious} alt="arrow previous" />`, `<img src=${ArrowNext} alt="arrow next" />`],
        responsive: {
            0: {
                items: 1,
                nav: true,
                stagePadding: 50
            },
            600: {
                items: 1,
                nav: false,
                stagePadding: 50
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    };

    const { handleSubmit, control } = useForm({
    });

    return (
        <div>
            <Nav />
            <div className="events_header">
                <div className="events_align">
                    <div className="event_text_cover">
                        <div className="row-2">
                            <div>
                                <div className="event_header_search event_text_bg">
                                    <div>
                                        <h4>Find the best events to attend</h4>
                                        <div className="">
                                            <form>
                                                <div className="flex_form">
                                                    <div className="form-group space">
                                                        <label htmlFor="date">Event date</label>
                                                        <div className="controller_div">
                                                            <Controller name="date" control={control}
                                                                render={({ field }) => {
                                                                    return (
                                                                        <Input
                                                                            {...field}
                                                                            style={{ height: '5rem' }}
                                                                            prefix={<img src={Calendar} alt="calendar icon" />} />
                                                                    )
                                                                }} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group space">
                                                        <label htmlFor="category">Category</label>
                                                        <Controller name="category" control={control}
                                                            render={({ field }) => {
                                                                return (
                                                                    <Input
                                                                        {...field}
                                                                        style={{ height: '5rem' }}
                                                                        prefix={<img src={Category} alt="category icon" />} />
                                                                )
                                                            }} />
                                                    </div>
                                                </div>
                                                <div className="flex_form">
                                                    <div className="form-group space">
                                                        <label htmlFor="type">Event type</label>
                                                        <Controller name="type" control={control}
                                                            render={({ field }) => {
                                                                return (
                                                                    <Input
                                                                        {...field}
                                                                        style={{ height: '5rem' }}
                                                                        prefix={<img src={VideoIcon} alt="video icon" />} />
                                                                )
                                                            }} />
                                                    </div>
                                                    <div className="form-group space">
                                                        <label htmlFor="price">Price</label>
                                                        <Controller name="price" control={control}
                                                            render={({ field }) => {
                                                                return (
                                                                    <Input
                                                                        {...field}
                                                                        style={{ height: '5rem' }}
                                                                        prefix={<img src={CreditCard} alt="credit-card icon" />} />
                                                                )
                                                            }} />
                                                    </div>
                                                </div>
                                                <button className="btn_main">Find Events</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="events main">
                <div className="contain">
                    <div className="filter mt_3">
                        <div className="filter_box">
                            <ion-icon name="musical-notes-outline"></ion-icon><p>Music</p>
                        </div>
                        <div className="filter_box">
                            <ion-icon name="car-sport-outline"></ion-icon><p>Community</p>
                        </div>
                        <div className="filter_box">
                            <ion-icon name="extension-puzzle-outline"></ion-icon><p>Kids</p>
                        </div>
                        <div className="filter_box">
                            <ion-icon name="accessibility-outline"></ion-icon><p>Religious</p>
                        </div>
                        <div className="filter_box">
                            <ion-icon name="american-football-outline"></ion-icon><p>Sport</p>
                        </div>
                        <div className="filter_box">
                            <ion-icon name="barbell-outline"></ion-icon><p>Fitness</p>
                        </div>
                        <div className="filter_box">
                            <ion-icon name="train-outline"></ion-icon><p>Religious</p>
                        </div>
                    </div>
                    <div>
                        <div className="events_main_tab main_tab mt_3">
                            <h4 className="events_tab_header">Other events</h4>
                            <div className="first_one">
                                <div className="grid_4">
                                    <div className="event_data_box">
                                        <Link to="/">
                                            <div className="event_header">
                                                <img src={_1} alt="_1" />
                                            </div>
                                            <div className="event_body">
                                                <h3>2022 International Crypto Expo Lagos</h3>
                                                <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                <p className="eventExtra">
                                                    This monthly production takes place every third
                                                    Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                </p>
                                            </div>
                                            <div className="event_footer">
                                                <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                <ion-icon class="heart" name="heart-outline"></ion-icon>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="event_data_box">
                                        <Link to="/">
                                            <div className="event_header">
                                                <img src={_2} alt="_1" />
                                            </div>
                                            <div className="event_body">
                                                <h3>2022 International Crypto Expo Lagos</h3>
                                                <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                <p className="eventExtra">
                                                    This monthly production takes place every third
                                                    Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                </p>
                                            </div>
                                            <div className="event_footer">
                                                <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                <ion-icon class="heart" name="heart-outline"></ion-icon>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="event_data_box">
                                        <Link to="/">
                                            <div className="event_header">
                                                <img src={_3} alt="_1" />
                                            </div>
                                            <div className="event_body">
                                                <h3>2022 International Crypto Expo Lagos</h3>
                                                <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                <p className="eventExtra">
                                                    This monthly production takes place every third
                                                    Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                </p>
                                            </div>
                                            <div className="event_footer">
                                                <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                <ion-icon class="heart" name="heart-outline"></ion-icon>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="event_data_box">
                                        <Link to="/">
                                            <div className="event_header">
                                                <img src={_4} alt="_1" />
                                            </div>
                                            <div className="event_body">
                                                <h3>2022 International Crypto Expo Lagos</h3>
                                                <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                <p className="eventExtra">
                                                    This monthly production takes place every third
                                                    Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                </p>
                                            </div>
                                            <div className="event_footer">
                                                <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                <ion-icon class="heart" name="heart-outline"></ion-icon>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Banner} className="banner mt_3" alt="banner" />
                        <div className="events_main_tab main_tab mt_3">
                            <h4 className="events_tab_header">Physical Events</h4>
                            <div className="first_one">
                                <div className="hide_carousel_control show_on_desktop">
                                    <div className="grid_4">
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_1} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_2} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_3} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_4} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_1} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_2} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_3} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="event_data_box">
                                            <Link to="/">
                                                <div className="event_header">
                                                    <img src={_4} alt="_1" />
                                                </div>
                                                <div className="event_body">
                                                    <h3>2022 International Crypto Expo Lagos</h3>
                                                    <p className="eventDate">Tuesday, June 10, 2021 &mdash; 09:00 am</p>
                                                    {/* <p className="eventAddress">Lagos Airport Hotel Ikeja</p>
                                        <p className="eventAddress">Hosted by Renaissanc eHotel</p> */}
                                                    <p className="eventExtra">
                                                        This monthly production takes place every third
                                                        Sunday of the month. It is a great opportunity for production houses out of Alimosho to...
                                                    </p>
                                                </div>
                                                <div className="event_footer">
                                                    <p><ion-icon class="tickets" name="ticket-outline"></ion-icon><p> from NGN5,000.00</p></p>
                                                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 60, display: 'block' }}>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Homepage;