import "../../assets/css/mini.css";

import React from 'react';

import GeneralImg from "../../assets/images/main/visit1.jpeg";
import SchoolImg from "../../assets/images/main/visit2.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";

const GeneralInfoPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="The Theatre" pageClassTitle="general"
                    innerLinks={[{ link: AppRoutes.general_info, title: "General Info" },
                    { link: AppRoutes.rent, title: "Rent our space" },
                    { link: AppRoutes.description, title: "How to get here" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <div className="media-cover">
                                    <img src={GeneralImg}
                                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                                        alt="girl looking at camera" />
                                </div>
                                <h4>Explore the interior and exterior outdoor ground of the Lagos Theatre, Igando.</h4>
                                <p>The Lagos Theatre, Igando is one of the four theatres set up by the Lagos State government - Ministry of Tourism,
                                    Arts and Culture. Since activities commenced in the Second Quarter of 2021, the Lagos Theatre Igando has hosted
                                    several art-themed and entertainment events including exhibitions, plays, shows, community celebrations, and
                                    activities for children. Plan your own type of visit to this must-see in Alimosho.</p>
                                <p>The current hours of public access are Monday - Sunday, 9a.m. - 6p.m.</p>
                                <div className="media-cover final-school">
                                    <img src={SchoolImg}
                                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                                        alt="girl looking at camera" />
                                </div>
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

export default GeneralInfoPage;