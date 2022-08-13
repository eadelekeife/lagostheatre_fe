import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/common/logo.svg';

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
        <div className={`navigation black ${fixedNav ? 'fixed' : ''}`}>
            <div className="innerNav">
                <Link to="/">
                    <img src={Logo} className="logo" alt="logo" />
                </Link>
                <div>
                    <ul>
                        <li><Link to="/">Casting Calls</Link></li>
                        <li><Link to="/">Find talent</Link></li>
                        <li><Link to="/">Magazine</Link></li>
                        <li><Link to="/">Backstage For</Link></li>
                        <li><Link to="/">More</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Sign in</Link></li>
                    <li><Link to="/">Post a Job</Link></li>
                    <li className="finalNavButton"><Link to="/">Join Backstage</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;