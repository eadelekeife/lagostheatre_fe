import "../../assets/css/mini.css";

import React from 'react';

import Tafta2 from "../../assets/images/main/tafta2.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";

const TaftaPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="TAFTA" pageClassTitle="tafta"
                    innerLinks={[{ link: AppRoutes.trainings, title: "Training Programmes" },
                    { link: AppRoutes.lti, title: "LTI" },
                    { link: AppRoutes.tafta, title: "TAFTA" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h4>Explore our Programs and Resources</h4>
                                <div className="media-cover">
                                    <img src={Tafta2}
                                        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                                        alt="girl looking at camera" />
                                </div>
                                <p>Leading culture and art centre, Terra Kulture, in partnership with Mastercard Foundation, has announced the launch of
                                    a new learning cohort for its art academy, TAFTA (Terra Academy for the Arts). Applications for the free-to-attend
                                    training would commence soon. Lagos Theatre Igando is proud to be one of the training centers for this initiative.
                                </p>
                                <button>Click here to register</button>
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

export default TaftaPage;