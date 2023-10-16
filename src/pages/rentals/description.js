import "../../assets/css/mini.css";

import React from 'react';

import IgandoMap from "../../assets/images/main/igando_map.png";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";

const DescriptionPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="How to get here" pageClassTitle="description"
                    innerLinks={[{ link: AppRoutes.general_info, title: "General Info" },
                    { link: AppRoutes.rent, title: "Rent our space" },
                    { link: AppRoutes.description, title: "How to get here" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h5>88, College Street, NYSC bus stop Igando.</h5>
                                <p>No matter where you are coming from, we’ve got you covered.</p>
                                <div className="media-cover">
                                    <img src={IgandoMap} alt="map of igando" className="" />
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

export default DescriptionPage;