import './index.css';

import React from 'react';

import { Link } from 'react-router-dom';
import Footer from '../../utils/footer';

import _1 from '../../assets/images/content/_1.avif';
import _2 from '../../assets/images/content/_2.avif';
import _3 from '../../assets/images/content/_3.avif';
import _4 from '../../assets/images/content/_4.avif';
import _5 from '../../assets/images/content/_5.avif';
import _6 from '../../assets/images/content/_6.avif';
import _7 from '../../assets/images/content/_7.avif';
import _8 from '../../assets/images/content/_8.avif';

import Woman from '../../assets/images/homepage/woman.jpg';
import Giraffe from '../../assets/images/homepage/giraffe.jpg';
import Holiday from '../../assets/images/homepage/holiday.jpg';
import Morocco from '../../assets/images/homepage/morocco.jpg';



const Homepage = () => {
    return (
        <div>
            {/* <iframe id="HeroVideo_67041" data-hero-video="" tabindex="-1" width="100%" height="400"
                allow="autoplay"
                data-src="https://www.youtube.com/embed/khIfy_lRZno?autoplay=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;fs=0&amp;iv_load_policy=3&amp;autohide=0&amp;enablejsapi=1&amp;widgetid=1&amp;mute=1&amp;showinfo=0&amp;start=11"
                frameborder="0" allowfullscreen="" data-video-start="11" data-video-end=""
                style={{ width: '100%', height: 400 }}
                src="https://www.youtube.com/embed/khIfy_lRZno?autoplay=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;fs=0&amp;iv_load_policy=3&amp;autohide=0&amp;enablejsapi=1&amp;widgetid=1&amp;mute=1&amp;showinfo=0&amp;start=11"
                title="Broadway Center Stage: &quot;Suddenly Seymour&quot; from Little Shop of Horrors | The Kennedy Center"></iframe> */}
            <div className="header">
                <div className="contain">
                    <div className="header_content">
                        <h1>Get cast in your next role today.</h1>
                        <p>Backstage has the most jobs, the best tools, and expert
                            advice to help you get cast. Backstage has the most jobs, the best tools, and expert
                            advice to help you get cast.</p>
                        <button>See events around you</button>
                    </div>
                </div>
            </div>
            <div className="mt_5">
                <div className="contain">
                    <div className="grid_flex">
                        <h3 className="tile_header">Upcoming events</h3>
                        <div>
                            <ion-icon name="arrow-back-outline"></ion-icon>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div>
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt_3">
                <div className="contain">
                    <div className="grid_flex">
                        <h3 className="tile_header">Upcoming events</h3>
                        <div>
                            <ion-icon name="arrow-back-outline"></ion-icon>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div>
                        <div className="grid_4">
                            <div className="event_data_box">
                                <Link to="/">
                                    <div className="event_header">
                                        <img src={_5} alt="_1" />
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                            <div className="event_data_box">
                                <Link to="/">
                                    <div className="event_header">
                                        <img src={_6} alt="_1" />
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                            <div className="event_data_box">
                                <Link to="/">
                                    <div className="event_header">
                                        <img src={_7} alt="_1" />
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                            <div className="event_data_box">
                                <Link to="/">
                                    <div className="event_header">
                                        <img src={_8} alt="_1" />
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
                                        <p><ion-icon name="ticket-outline"></ion-icon> from NGN5,000.00</p>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="props mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div className="story_div_text">
                            <div>
                                <h3>The New Issue of Kennedy Center News Is Here!</h3>
                                <p>Summer is here and the Kennedy Center is buzzing with activity! See all that’s in
                                    store in the July-August issue of Kennedy Center News. The issue includes a dazzling
                                    array of performances in theater, comedy, National Symphony Orchestra, jazz, and
                                    much more.
                                </p>
                                <button>Read more</button>
                            </div>
                        </div>
                        <div className="story_div_cover">
                            <div className="grid_3">
                                <img src={Giraffe} alt="Giraffe" />
                                <img src={Morocco} alt="Giraffe" />
                                <img src={Holiday} alt="Giraffe" />
                            </div>
                        </div>
                    </div>
                    <div className="mt_5">
                        <div className="grid_3">
                            <div>
                                <h3>Search Casting Calls</h3>
                                <p>Backstage has the most jobs, the best tools, and expert advice to help you get
                                    cast. Backstage has the most jobs, the best tools, and expert advice to help you
                                    get cast.</p>
                            </div>
                            <div>
                                <h3>Search Casting Calls</h3>
                                <p>Backstage has the most jobs, the best tools, and expert advice to help you get
                                    cast. Backstage has the most jobs, the best tools, and expert advice to help you
                                    get cast.</p>
                            </div>
                            <div>
                                <h3>Search Casting Calls</h3>
                                <p>Backstage has the most jobs, the best tools, and expert advice to help you get
                                    cast. Backstage has the most jobs, the best tools, and expert advice to help you
                                    get cast.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div className="image_display">
                            <div className="grid_3">
                                <img src={Giraffe} alt="Giraffe" />
                                <img src={Morocco} alt="Giraffe" />
                                <img src={Holiday} alt="Giraffe" />
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h3>The New Issue of Kennedy Center News Is Here!</h3>
                                <p>Summer is here and the Kennedy Center is buzzing with activity! See all that’s in
                                    store in the July-August issue of Kennedy Center News. The issue includes a dazzling
                                    array of performances in theater, comedy, National Symphony Orchestra, jazz, and
                                    much more.
                                </p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div className="">
                            <div>
                                <h3>The New Issue of Kennedy Center News Is Here!</h3>
                                <p>Summer is here and the Kennedy Center is buzzing with activity! See all that’s in
                                    store in the July-August issue of Kennedy Center News. The issue includes a dazzling
                                    array of performances in theater, comedy, National Symphony Orchestra, jazz, and
                                    much more.
                                </p>
                                <button>Read more</button>
                            </div>
                        </div>
                        <div className="image_display">
                            <div className="grid_3">
                                <img src={Giraffe} alt="Giraffe" />
                                <img src={Morocco} alt="Giraffe" />
                                <img src={Holiday} alt="Giraffe" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div className="">
                            <div>
                                <h3>The New Issue of Kennedy Center News Is Here!</h3>
                                <p>Summer is here and the Kennedy Center is buzzing with activity! See all that’s in
                                    store in the July-August issue of Kennedy Center News.
                                </p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;