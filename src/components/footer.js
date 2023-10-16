import React from 'react';
import { Link } from 'react-router-dom';

import AppRoute from './routes';

import { ReactComponent as FacebookIcon } from "../assets/images/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/icon/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/icon/youtube.svg";
import { ReactComponent as PhoneIcon } from "../assets/images/icon/phone.svg";

const Footer = props => {
    return (
        <div className={`footer ${props.noMargin ? 'noMargin' : ''}`}>
            <div className="contain">
                <div className="footer-flex">
                    <div className="inner-footer-flex">
                        <div>
                            <ul>
                                <li>
                                    <Link to={AppRoute.trainings}>Classes and Trainings</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.about}>Who we are</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.team}>Our Administrative Team</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.general_info}>General Rental Information</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to={AppRoute.description}>How to get here</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.team}>LTI Creative Club</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.trainings}>Donate to us</Link>
                                </li>
                                <li>
                                    <Link to={AppRoute.trainings}>Donation Plans</Link>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <a href="/">+234 813 227 7316</a>,
                            <a href="/">+234 813 227 7316</a> <br />
                            <a href="mailTo:lagostheatreigando@gmail.com.">lagostheatreigando@gmail.com.</a>
                            <p>5, Onike street, NYSC bus stop, Igando Ikotun Lagos</p>
                        </div>
                    </div>
                    <div>
                        <button className="newsletter-button">Sign up to our Newsletter</button>
                        <div className='social-bar'>
                            <div className="social-icon">
                                <FacebookIcon />
                            </div>
                            <div className="social-icon">
                                <InstagramIcon />
                            </div>
                            <div className="social-icon">
                                <YoutubeIcon />
                            </div>
                            <div className="social-icon">
                                <PhoneIcon />
                            </div>
                            <div className="social-icon">
                                <TwitterIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <div className="outer-footer-flex">
                        <div>
                            <h3>Lagos Theatre Igando</h3>
                            <p>The Lagos Theatre, Igando is one of four theatres set up by the Lagos State government - Ministry of Tourism, Arts and
                                Culture. It is managed by Corporate Dance World and Entertainment. Since its unveiling in 2019, the Lagos
                                Theatre, Igando has been identified as a centre for recreation, community development, job creation and promotion of
                                the arts. Since activities commenced in the Second Quarter of 2021, the Lagos Theatre Igando has hosted several
                                art-themed and entertainment events including exhibitions, plays, shows, community celebrations, and activities for
                                children.</p>
                        </div>
                        <div className="grid-flex">
                            <div>
                                <h3 style={{ visibility: 'hidden' }}>Lagos Theatre Igando</h3>
                                <ul>
                                    <li>
                                        <Link to={AppRoute.newsletter}>Our Newsletter</Link>
                                    </li>
                                    <li>
                                        <Link to={AppRoute.donation_plans}>Donation Plans</Link>
                                    </li>
                                    <li>
                                        <Link to={AppRoute.tafta}>TAFTA</Link>
                                    </li>
                                    <li>
                                        <Link to={AppRoute.how_to_donate}>How to donate</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h3 style={{ visibility: 'hidden' }}>Lagos Theatre Igando</h3>
                                    <li>
                                        <a href="/">+234 813 227 7316</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;