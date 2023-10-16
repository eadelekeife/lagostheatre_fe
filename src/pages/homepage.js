import "../assets/css/homepage.css";
import React, { useEffect, useState } from "react";

import Nav from "../components/nav";
import Footer from "../components/footer";

import { Link } from "react-router-dom";

import AppRoute from "../components/routes";

import { ReactComponent as ArrowRight } from "../assets/images/icon/arrow-right.svg";
import _1 from "../assets/images/content/_1.webp";
import Grid1 from "../assets/images/content/grid_1.jpg";
import Grid2 from "../assets/images/content/grid_2.jpg";
import Grid3 from "../assets/images/content/grid_3.jpg";
import Grid4 from "../assets/images/content/grid_4.jpg";

import { notification, Skeleton } from 'antd';
import { DateTime } from 'luxon';

import TheatreImg from "../assets/images/main/events/theatre.jpeg";
import ClassesImg from "../assets/images/main/_16.jpg";
import LTIImage from "../assets/images/main/visual.jpeg";
import VisitImg from "../assets/images/main/visit.jpeg";
import TeamImg from "../assets/images/main/_22.jpg";
import DonationImg from "../assets/images/main/_19.jpg";
import MediaImg from "../assets/images/main/children.JPG";

import { _fetch_all_events_ } from "../components/axios_routes";

const Homepage = () => {

    const [allEvents, setAllEvents] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    const openNotificationWithIcon = (type, errMessage) => {
        notification[type]({
            message: '',
            description: errMessage
        });
    };

    const fetchAllEvents = async () => {
        try {
            let eventData = await _fetch_all_events_();
            if (eventData.data.statusMessage === "success") {
                setAllEvents(eventData.data.message);
                setLoadingData(false);
            } else {
                openNotificationWithIcon('error', 'An error occurred while loading events. Please reload page to try again')
            }
        } catch (err) {
            openNotificationWithIcon('error', 'An error occurred while loading events. Please reload page to try again')
        }
    }
    let skeleton = [];
    for (let i = 0; i < 8; i++) {
        skeleton.push(
            <div>
                <Skeleton.Image active />
                <div style={{ marginTop: 10 }}></div>
                <Skeleton.Button style={{ width: '100%' }} active />
            </div>
        )
    }
    useEffect(() => {
        fetchAllEvents();
    })
    return (
        <div>
            <Nav />
            <div className="homepage-hero-sect">
                <div className="homepage-hero-sect-inner">
                    <div className="homepage-welcome-message">
                        <h2>Welcome to the Lagos State Theatre Igando</h2>
                        <p>We are committed to collaborating with the people of Alimosho community and the Lagos State
                            Government towards artistic talent discovery, promotion and presentation, subsequent community
                            development as well as facilitating job creation for the creative youths.</p>
                        <Link to={AppRoute.about}>Read more about us <ArrowRight /></Link>
                    </div>
                    <video src="https://lagostheatrevideos.s3.amazonaws.com/_1.mp4" muted controls={false} autoPlay loop />
                    <div class="black_overlay"></div>
                </div>
            </div>
            <div className="homepage-links-sect recent-events">
                <div className="contain">
                    <h2 className="tile-header">Recent Events</h2>
                    {
                        loadingData ?
                            <div>
                                <div className="grid-4">
                                    {
                                        skeleton.map((skeletonCheck, index) => (
                                            <div key={index}>
                                                {skeletonCheck}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <div className="grid-4">
                                {
                                    allEvents.slice(0, 8).map((events, index) => (
                                        <div key={index} className="homepage-links-grid-cover">
                                            <img src={events.displayImage} alt={events.eventTitle} />
                                            <div className="links-text-cover">
                                                <h3 className="tile-header">{events.eventTitle}</h3>
                                                <p className="tile-date">{DateTime.fromISO(events.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>
                                                <p className="tile-story">{events.eventDescription}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="img-cover">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            {/* <h2>Rent our Space for your Events</h2> */}
                            <h2>Explore Our Theatre Space Rentals Page for Detailed Booking Information!</h2>
                        </div>
                        <div>
                            <p>The Lagos Theatre Igando has hosted several art-themed and entertainment events including
                                exhibitions, plays, shows, community celebrations, and activities for children. Plan your
                                own type of visit to this must-see in Alimosho.</p>
                            <Link to={AppRoute.rent}>See our Rental Pricing</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-links-sect">
                <div className="contain">
                    <h2 className="tile-header">Our committment to the community</h2>
                    <div className="grid-4">
                        <div className="homepage-links-grid-cover">
                            <img src={_1} alt="people smiling" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">Who we are</h3>
                                <p className="tile-story">The Lagos Theatre, Igando is one of four theatres set up by the Lagos State
                                    government - Ministry of Tourism, Arts and Culture. It is managed by Corporate Dance World and Entertainment.</p>
                                <Link to={AppRoute.about}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={ClassesImg} alt="children on stage" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">Classes and Trainings</h3>
                                <p className="tile-story">At the Lagos Theatre, Igando, we strive to engage and uplift all learners though creative
                                    education-in ways that spark curiosity and build empathy.</p>
                                <Link to={AppRoute.trainings}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={TheatreImg} alt="man smiling while drumming" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">General Rental Information</h3>
                                <p className="tile-story">The Lagos Theatre, Igando is one of the four theatres set up by the Lagos State
                                    government - Ministry of Tourism, Arts and Culture. Since activities commenced in the Second Quarter of 2021, the
                                    Lagos Theatre Igando has hosted several art-themed and entertainment events including exhibitions</p>
                                <Link to={AppRoute.general_info}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={VisitImg} alt="outside view of the Lagos Theatre Igando building" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">Our Rental Pricing</h3>
                                <p className="tile-story">The main hall is a 405 seater with AV equipment ( including lighting, screen, sound, and
                                    a live music set). It is suitable for auditions, events / shows and corporate meetings.</p>
                                <Link to={AppRoute.rent}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={LTIImage} alt="display of art drawings" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">LTI Creative Club</h3>
                                <p className="tile-story">The Lagos Theatre Igando, because of its passion for Child and Children development and
                                    Empowerment introduced the LTI Creative Club for the children of Alimosho and every other community.</p>
                                <Link to={AppRoute.lti}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={TeamImg} alt="people posing for a picture" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">Our Administrative Team</h3>
                                <p className="tile-story">For the smooth running of the theatre, we have a team of experts working diligently to ensure all
                                    things function properly. From Advisory to our Administrative and technical teams, these team of experts are always on ground
                                    to ensure our users are well attended to.</p>
                                <Link to={AppRoute.team}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={DonationImg} alt="children playing in the compound" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">Support our activities</h3>
                                <p className="tile-story">At the Lagos Theatre Igando, we are committed to collaborating with the
                                    people of Alimosho community and the Lagos State Government towards artistic talent discovery, promotion
                                    and presentation, subsequent community development as well as facilitating job creation for the creative
                                    youths.</p>
                                <Link to={AppRoute.donate}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                        <div className="homepage-links-grid-cover">
                            <img src={MediaImg} alt="child posing for picture" />
                            <div className="links-text-cover">
                                <h3 className="tile-header">Appearance in the media</h3>
                                <p className="tile-story">This season-long program immerses one fellow in the fast-paced Encores!
                                    production process, as they receive first-hand training and direction.</p>
                                <Link to={AppRoute.newsletter}>Learn More <ArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-sect">
                <div className="contain">
                    <div className="center">
                        <h2>#WHATWEHAVEBEENUPTO</h2>
                        <p className="tile-story">This season-long program immerses one fellow in the fast-paced Encores!
                            production process, as they receive first-hand training, direction, and guidance while working
                            alongside renowned artists and professionals.</p>
                        {/* <div className="social-bar">
                            <div className="social-icon">
                                <FacebookIcon />
                            </div>
                            <div className="social-icon">
                                <InstagramIcon />
                            </div>
                            <div className="social-icon">
                                <YoutubeIcon />
                            </div>
                        </div> */}
                        <div className="grid-4">
                            <div>
                                <img src={Grid1} alt="recent event image" />
                            </div>
                            <div>
                                <img src={Grid2} alt="recent event image" />
                            </div>
                            <div>
                                <img src={Grid3} alt="recent event image" />
                            </div>
                            <div>
                                <img src={Grid4} alt="recent event image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="final-homepage-message">
                <div className="contain">
                    <div className="grid-flex">
                        <h2>Support</h2>
                        <div className="links-cover">
                            <Link to={AppRoute.donate}>Make a Donation <ArrowRight /></Link>
                            <Link to={AppRoute.donation_plans}>Become a Member <ArrowRight /></Link>
                            <Link to={AppRoute.rent}>Rent our Space <ArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer noMargin={true} />
        </div>
    )
}

export default Homepage;