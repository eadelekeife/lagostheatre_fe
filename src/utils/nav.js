import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Logo from '../assets/images/common/logo.svg';
import Logo from '../assets/images/21.png';
import LogoWhite from '../assets/images/21.png';

import AppRoute from './routes';

const Nav = () => {
    const [fixedNav, setFixed] = useState(false);

    const [visibleNav, setVisibleNav] = useState(false);

    const onCloseNav = () => setVisibleNav(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    const controlNav = () => {
        setVisibleNav(true)
    }
    return (
        <div className={`navigation ${fixedNav ? 'fixed' : ''}`}>
            <div className="innerNav">
                <Link to="/">
                    {!fixedNav ?
                        <img src={Logo} className="logo" alt="logo" />
                        :
                        <img src={LogoWhite} className="logo" alt="logo" />
                    }
                </Link>
                <div>
                    <ul>
                        <li><Link to={AppRoute.events}>Events</Link></li>
                        <li><Link to={AppRoute.about}>About Us</Link></li>
                        <li><Link to={AppRoute.ourteam}>Our Team</Link></li>
                        <li><Link to={AppRoute.trainings}>Trainings</Link></li>
                        <li><Link to={AppRoute.tour}>Tour</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <ul>
                    <li><Link to={AppRoute.donate}>Donate</Link></li>
                    <li><Link to={AppRoute.signin}>Sign In</Link></li>
                    <li className="finalNavButton"><Link to={AppRoute.signup}>Create a free account</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;