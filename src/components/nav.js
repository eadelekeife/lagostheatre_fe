import React, { useEffect, useState } from "react";

import { Drawer } from "antd";

import Logo from "../assets/images/logo.jpeg";
import LogoTransparent from "../assets/images/logo.png";
import { ReactComponent as MenuIcon } from "../assets/images/icon/menu.svg";
import { ReactComponent as MenuWhiteIcon } from "../assets/images/icon/menu-white.svg";
import { Link } from "react-router-dom";

import { ReactComponent as FacebookIcon } from "../assets/images/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/icon/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/icon/youtube.svg";
import { ReactComponent as PhoneIcon } from "../assets/images/icon/phone.svg";

import { ReactComponent as TimesSvg } from "../assets/images/icon/times.svg";

import AppRoutes from "../components/routes";

const Nav = props => {

    const [fixedNav, setFixed] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 20) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])
    return (
        <div>
            <div className={`navigation ${fixedNav ? 'fixed' : ''} ${props.pageFixedNav ? 'fixed' : ''}`}>

                {
                    fixedNav ? <Link to="/">
                        <img src={LogoTransparent} alt="logo" />
                    </Link> :
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                }
                {/* <Logo /> */}
                <div className="">
                    <ul>
                        <li className="desktop-only">
                            <Link to={AppRoutes.events}>What's On</Link>
                        </li>
                        <li className="desktop-only">
                            <Link to={AppRoutes.about}>Who We Are</Link>
                        </li>
                        <li className="desktop-only">
                            <Link to={AppRoutes.trainings}>Classes and Trainings</Link>
                        </li>
                        <li className="desktop-only">
                            <Link to={AppRoutes.rent}>Rentals and Visits</Link>
                        </li>
                        <li className="desktop-only">
                            <Link to={AppRoutes.donate}>Support</Link>
                        </li>
                        <li>
                            <div className="menu-bg"
                                onClick={() => setOpenDrawer(true)}>
                                {
                                    fixedNav ? <MenuWhiteIcon /> : <MenuIcon />
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Drawer className="desktop-nav-drawer"
                title={null} placement="right" onClose={() => setOpenDrawer(false)} visible={openDrawer}>
                <div className="desktop-nav">
                    <div className="desktop-nav-header">
                        <div></div>
                        <TimesSvg onClick={() => setOpenDrawer(false)} />
                    </div>
                    <div className="desktop-nav-inner">
                        <ul>
                            <li>
                                <Link to={AppRoutes.about}>What's on</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.about}>About Us</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.about}>Our Team</Link>
                            </li>
                            {/* <li>
                            <Link to={AppRoutes.about}>Our Staff</Link>
                        </li> */}
                            <li>
                                <Link to={AppRoutes.about}>Trainings</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.about}>Creative Club</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.about}>Rent space</Link>
                            </li>
                            {/* <li>
                            <Link to={AppRoutes.about}>How to get here</Link>
                        </li> */}
                            <li>
                                <Link to={AppRoutes.about}>How to donate</Link>
                            </li>
                            <li>
                                <Link to={AppRoutes.about}>Donation plans</Link>
                            </li>
                        </ul>
                        <div className="desktop-social">
                            <div></div>
                            <div className="social-bar">
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
                </div>
            </Drawer>
        </div>
    )
}

export default Nav;