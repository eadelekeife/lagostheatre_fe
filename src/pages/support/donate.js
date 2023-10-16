import "../../assets/css/mini.css";

import React from 'react';

import DrummerImg from "../../assets/images/main/drummer.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";
import { Divider } from "antd";

const DonatePage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="Support our activities" pageClassTitle="donate"
                    innerLinks={[{ link: AppRoutes.donate, title: "Donate" },
                    { link: AppRoutes.how_to_donate, title: "How to donate" },
                    { link: AppRoutes.donation_plans, title: "Donation Plans" }
                    ]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h5>At the Lagos Theatre Igando, we are committed to collaborating with the people of Alimosho community and the Lagos
                                    State Government towards artistic talent discovery, promotion and presentation, subsequent community development as
                                    well as facilitating job creation for the creative youths.</h5>
                                <p>Our Vision is to foster artistic development, appreciation, and engagement among communities within the Alimosho
                                    Local Govt Area. Your gift today will provide vital support for our artistic and educational programs, both in
                                    person and online. You can also support our activities calendar, artistic and educational programs when you attend
                                    our series of events.</p>
                                <p>The Theatre is happy to accept contributions via your preferred donation channel, such as check, online transfer, or
                                    cash in person.</p>
                                <Divider />
                                <h5>Sponsor A Recreational/Outdoor Area</h5>
                                <p>Be a part of building our Recreational Area (Food Court, Art Gallery, Lounge, Café) and give your brand an
                                    opportunity to be seen by over a hundred (100) thousand people throughout the year by being a major sponsor for
                                    developing our recreational area.</p>
                                <img src={DrummerImg} alt="drummer" />
                                {/* <div className="pt_5"></div> */}
                            </div>
                            <div className="grid_block_left">
                                <SideContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DonatePage;