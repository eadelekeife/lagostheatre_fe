import React from "react";

import { Link } from "react-router-dom";

const HeroSect = props => {
    return (
        <div>
            <div className={`mini-bg ${props.pageClassTitle}`}>
                <h2>{props.pageTitle}</h2>
            </div>
            <div className="mini_bg_links">
                <ul>
                    {
                        props.innerLinks.map((links, index) => (
                            <li key={index}>
                                <Link to={links.link}>{links.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeroSect;