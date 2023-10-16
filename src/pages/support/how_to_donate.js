import "../../assets/css/mini.css";

import React from 'react';
import { Link } from "react-router-dom";

import Donate1 from "../../assets/images/main/donate1.jpeg";
import Donate2 from "../../assets/images/main/donate2.jpeg";
import Donate3 from "../../assets/images/main/donate3.jpeg";
import Donate4 from "../../assets/images/main/donate4.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";
import { Divider } from "antd";

const HowToDonatePage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="Join our Membership Programs" pageClassTitle="how_to_donate"
                    innerLinks={[{ link: AppRoutes.donate, title: "Donate" },
                    { link: AppRoutes.how_to_donate, title: "How to donate" },
                    { link: AppRoutes.donation_plans, title: "Donation Plans" }
                    ]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h5>These membership programs offer unique opportunities to become an integral part of the LTI community. Support
                                    us and enjoy exclusive benefits.</h5>
                                <div class="grid-2 donation">
                                    <div class="donateCategory _1">
                                        <div>
                                            <div className="donation-header">
                                                <h4>Friends of the theatre</h4>
                                            </div>
                                            <p>#500,000.00</p><Link to={AppRoutes.donation_plans}>See Donation Benefits <ion-icon name="arrow-forward-outline" role="img"
                                                class="md hydrated" aria-label="arrow forward outline"></ion-icon></Link>
                                        </div>
                                    </div>
                                    <div class="donateCategory _2">
                                        <div>
                                            <div className="donation-header">
                                                <h4>Lagos Theatre Igando Partners</h4>
                                            </div>
                                            <p>#1,200,000.00</p><Link to={AppRoutes.donation_plans}>See Donation Benefits <ion-icon name="arrow-forward-outline" role="img"
                                                class="md hydrated" aria-label="arrow forward outline"></ion-icon></Link>
                                        </div>
                                    </div>
                                    <div class="donateCategory _3">
                                        <div>
                                            <div className="donation-header">
                                                <h4>Artistic Director’s Circle</h4>
                                            </div>
                                            <p>#300,000.00</p><Link to={AppRoutes.donation_plans}>See Donation Benefits <ion-icon name="arrow-forward-outline" role="img"
                                                class="md hydrated" aria-label="arrow forward outline"></ion-icon></Link>
                                        </div>
                                    </div>
                                    <div class="donateCategory _4">
                                        <div>
                                            <div className="donation-header">
                                                <h4>Lagos Theatre Igando Virtual worldwide member</h4>
                                            </div>
                                            <p>#100,000.00</p><Link to={AppRoutes.donation_plans}>See Donation Benefits <ion-icon name="arrow-forward-outline" role="img"
                                                class="md hydrated" aria-label="arrow forward outline"></ion-icon></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt_3"></div>
                                <div className="media-cover plan">
                                    <div class="grid-2 images">
                                        <div>
                                            <img src={Donate1} alt="proposed building plan" />
                                        </div>
                                        <div>
                                            <img src={Donate2} alt="proposed building plan" />
                                        </div>
                                        <div>
                                            <img src={Donate3} alt="proposed building plan" />
                                        </div>
                                        <div>
                                            <img src={Donate4} alt="proposed building plan" />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <h5>Sponsor A Recreational/Outdoor Area</h5>
                                <p>Be a part of building our Recreational Area (Food Court, Art Gallery, Lounge, Café) and give your brand an
                                    opportunity to be seen by over a hundred (100) thousand people throughout the year by being a major sponsor for
                                    developing our recreational area.</p>
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

export default HowToDonatePage;