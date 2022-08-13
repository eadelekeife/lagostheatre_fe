import "./utils.css";

import React from 'react';
import { Link } from 'react-router-dom';

import AppRoute from './routes';

const Footer = props => {
    return (
        <div className={`footer ${props.margin ? 'margin' : ''}`}>
            <div className="contain">
                <div className="biased_grid_4">
                    <div>
                        <h3>Lagos Theatre Igando</h3>
                        <p>Backstage has the most jobs, the best tools, and expert advice to help you get cast. Backstage
                            has the most jobs, the best tools, and expert advice to help you get cast.</p>
                    </div>
                    <div>
                        <h5>FOR FINDING JOBS</h5>
                        <ul>
                            <li>
                                <Link to={AppRoute.events}>Events</Link>
                            </li>
                            <li>
                                <Link to={AppRoute.about}>About Us</Link>
                            </li>
                            <li>
                                <Link to={AppRoute.ourteam}>Our Team</Link>
                            </li>
                            <li>
                                <Link to={AppRoute.trainings}>Trainings</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>FOR FINDING JOBS</h5>
                        <ul>
                            <li>
                                <Link to={AppRoute.tour}>Tour</Link>
                            </li>
                            <li>
                                <Link to={AppRoute.donate}>Donate</Link>
                            </li>
                            <li>
                                <Link to={AppRoute.privacy}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={AppRoute.terms}>Terms of use</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Social</h5>
                        <div>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                        <a href="/">+234 813 227 7316</a>
                        <p>5, Onike street, NYSC bus stop, Igando Ikotun Lagos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;