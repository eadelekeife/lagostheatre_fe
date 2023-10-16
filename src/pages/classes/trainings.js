import "../../assets/css/mini.css";

import React from 'react';
import { Link } from "react-router-dom";

import TaftaImg from "../../assets/images/main/tafta.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";
import { Divider } from "antd";

const TrainingsPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="TRAINING PROGRAMMES" pageClassTitle="trainings"
                    innerLinks={[{ link: AppRoutes.trainings, title: "Training Programmes" },
                    { link: AppRoutes.lti, title: "LTI" },
                    { link: AppRoutes.tafta, title: "TAFTA" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h4>Explore our Programs and Resources</h4>
                                <div className="media-cover">
                                    <video src="https://lagostheatrevideos.s3.amazonaws.com/training2.mp4" muted controls />
                                </div>
                                <h5>
                                    At the Lagos Theatre, Igando, we strive to engage and uplift all learners though creative education-in ways that 
                                    spark curiosity and build empathy.</h5>
                                <Divider />
                                <h4>LTI Creative Club</h4>
                                <p>The Lagos Theatre Igando, because of its passion for Child and Children development and Empowerment introduced the
                                    LTI Creative Club for the children of Alimosho and every other community. Activities include but are not limited to
                                    Music ,Dance , Drama , Chess , Coding , Tie and Dye , Knitting , Visual arts and painting , Traditional African
                                    Drums (Making & Playing).</p>
                                <Link to={AppRoutes.lti}>Learn More <ion-icon name="arrow-forward-circle-outline"
                                    role="img" class="md hydrated" aria-label="arrow forward circle outline"></ion-icon></Link>
                                <Divider />
                                <div className="media-cover">
                                    <img src={TaftaImg} alt="tafta partnership" />
                                </div>
                                <h4>TAFTA Partnership with Terra Kulture</h4>
                                <p>Leading culture and art centre, Terra Kulture, in partnership with Mastercard Foundation, has announced the launch of
                                    a new learning cohort for its art academy, TAFTA (Terra Academy for the Arts). Applications for the free-to-attend
                                    training would commence soon. Lagos Theatre Igando is proud to be one of the training centers for this initiative.
                                </p>
                                <Link to={AppRoutes.tafta}>Learn More <ion-icon name="arrow-forward-circle-outline"
                                    role="img" class="md hydrated" aria-label="arrow forward circle outline"></ion-icon></Link>
                                <Divider />
                                <div className="media-cover">
                                    <video src="https://lagostheatrevideos.s3.amazonaws.com/training3.mp4" muted controls />
                                </div>
                                <h4>Summer Intensive Program/Summer School Graduation</h4>
                                <p>The Lagos Theatre Igando holds summer intensive program every August. It is a fun and learning program for children
                                    between the ages of 4 and 16. Curricula include music, dance, drama, comedy, visual arts, and coding/robotics. A
                                    graduation ceremony holds after the program and parents of participants at the summer program gets to see their
                                    children on stage.
                                </p>
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

export default TrainingsPage;