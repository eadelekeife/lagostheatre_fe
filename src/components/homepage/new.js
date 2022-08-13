import "./_1.css";

import React from 'react';

import { Link } from "react-router-dom";
import Footer from '../../utils/footer';

import _1 from '../../assets/images/content/_1.avif';
import _2 from '../../assets/images/content/_2.avif';
import _3 from '../../assets/images/content/_3.avif';
import _4 from '../../assets/images/content/_4.avif';

import explore1 from '../../assets/images/homepage/explore1.jpg';
import explore2 from '../../assets/images/homepage/explore2.jpg';
import explore3 from '../../assets/images/homepage/explore3.jpg';
import explore4 from '../../assets/images/homepage/explore4.jpg';

import Giraffe from '../../assets/images/homepage/giraffe.jpg';
import Holiday from '../../assets/images/homepage/holiday.jpg';
import Morocco from '../../assets/images/homepage/morocco.jpg';

import Training1 from '../../assets/images/real/training1.jpg';
import Training2 from '../../assets/images/real/training2.jpg';
import Training3 from '../../assets/images/real/training3.jpg';

import Shows1 from '../../assets/images/real/shows1.jpg';
import Shows2 from '../../assets/images/real/shows2.jpg';
import Shows3 from '../../assets/images/real/shows3.jpg';


import Video1 from '../../assets/images/real/video.mp4';

import Nav from "../../utils/nav";

const Homepage = () => {
    return (
        <div>
            <Nav />
            <div className="new_header">
                <video src={Video1} width="600" height="300" className="video" controls="controls" muted loop autoPlay />
                {/* <iframe
                    src="https://player.vimeo.com/video/700882546?h=0719d4ae33&amp;loop=1&amp;background=1&amp;app_id=122963pd"
                    frameborder="0" width="426" height="240" allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen="" className="video" title="DTH_Sizzle Reel_" data-ready="true"></iframe> */}
            </div>
            <div className="quick_events mt_5">
                <div className="contain">
                    <div className="content_display">
                        <div className="grid_2">
                            <div>
                                <h3>Make the switch from cable.</h3>
                                <div className="stylish grid_3">
                                    <div>
                                        <p className="recoleta">2018</p>
                                        <p>started</p>
                                    </div>
                                    <div>
                                        <p className="recoleta">86+</p>
                                        <p>started</p>
                                    </div>
                                    <div>
                                        <p className="recoleta">2018</p>
                                        <p>started</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live
                                    sports, news, and events - plus the entire Hulu streaming library.</p>
                                <p>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live
                                    sports, news, and events - plus the entire Hulu streaming library. With Unlimited
                                    DVR, store Live TV recordings for up to nine months and fast-forward through your
                                    DVR content.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid_flex">
                            <h3 style={{fontSize: '1.5rem', marginBottom: 0}}>Recent Events</h3>
                            <p style={{fontSize: '1.5rem', marginBottom: 0}}>See more</p>
                        </div>
                        <div className="grid_4">
                            <div className="event_data_box">
                                <Link to="/">
                                    <div className="event_header">
                                        <img src={_1} className="events_img" alt="_1" />
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
                                        <img src={_2} className="events_img" alt="_1" />
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
                                        <img src={_3} className="events_img" alt="_1" />
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
                                        <img src={_4} className="events_img" alt="_1" />
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
            {/* <div className="props black_bg mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <h4>Stream full seasons of exclusive series, current-season episodes</h4>
                            <p>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and
                                events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for
                                up to nine months and fast-forward through your DVR content. Access endless entertainment with
                                Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</p>
                            <button>View Channels in your area →</button>
                        </div>
                        <div>
                            <div className="grid_3">
                                <img src={Giraffe} alt="explore1" />
                                <img src={Holiday} alt="explore1" />
                                <img src={Morocco} alt="explore1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="props mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <div className="grid_3">
                                <img src={explore1} alt="explore1" />
                                <img src={explore2} alt="explore1" />
                                <img src={explore3} alt="explore1" />
                            </div>
                        </div>
                        <div>
                            <h4>Stream full seasons of exclusive series, current-season episodes</h4>
                            <p>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and
                                events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for
                                up to nine months and fast-forward through your DVR content. Access endless entertainment with
                                Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</p>
                            <button>View Channels in your area →</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="props black_bg mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <h4>Stream full seasons of exclusive series, current-season episodes</h4>
                            <p>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and
                                events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for
                                up to nine months and fast-forward through your DVR content. Access endless entertainment with
                                Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</p>
                            <button>View Channels in your area →</button>
                        </div>
                        <div>
                            <div className="grid_3">
                                <img src={Training1} alt="explore1" />
                                <img src={Training2} alt="explore1" />
                                <img src={Training3} alt="explore1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="props mt_5">
                <div className="contain">
                    <div className="grid_2">
                        <div>
                            <div className="grid_3">
                                <img src={Shows1} alt="explore1" />
                                <img src={Shows2} alt="explore1" />
                                <img src={Shows3} alt="explore1" />
                            </div>
                        </div>
                        <div>
                            <h4>Stream full seasons of exclusive series, current-season episodes</h4>
                            <p>Make the switch from cable. Get 75+ top channels on Hulu with your favorite live sports, news, and
                                events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for
                                up to nine months and fast-forward through your DVR content. Access endless entertainment with
                                Disney+ and live sports with ESPN+. All three for a new price of $69.99/month.</p>
                            <button>View Channels in your area →</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default Homepage;