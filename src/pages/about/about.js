import "../../assets/css/mini.css";

import React from 'react';
import { Link } from "react-router-dom";

import BallImg from "../../assets/images/main/ball.jpg";
import Image1 from "../../assets/images/real/training3.jpg";
import Image2 from "../../assets/images/real/training1.jpg";
import Image3 from "../../assets/images/real/training2.jpg";
import Image4 from "../../assets/images/real/training4.jpg";

import TheatreImg1 from "../../assets/images/main/theatre1.png";
import TheatreImg2 from "../../assets/images/main/theatre2.png";
import TheatreImg3 from "../../assets/images/main/theatre3.png";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import { ReactComponent as SvgCurve } from "../../assets/images/main/curve/curve.svg";
import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";

const AboutUsPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="About Us" pageClassTitle="about_us"
                    innerLinks={[{ link: AppRoutes.about, title: "Our Story" },
                    { link: AppRoutes.team, title: "Administrative Staff" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <p><span>The Lagos Theatre, Igando</span> is one of four theatres set up by the Lagos State
                                    government - Ministry of Tourism, Arts and Culture. It is managed by Corporate Dance World
                                    and Entertainment. Since its unveiling in 2019, the Lagos Theatre, Igando has been identified
                                    as a centre for recreation, community development, job creation and promotion of the
                                    arts. Since activities commenced in the Second Quarter of 2021, the Lagos Theatre Igando has
                                    hosted several art-themed and entertainment events including exhibitions, plays, shows, community celebrations, and
                                    activities for children.</p>
                                <div className="grid-4">
                                    <img src={Image1} alt="child with face painting posing for camera" />
                                    <img src={Image2} alt="two children posing for picture withh trophy" />
                                    <img className="desktop-only" src={Image3} alt="summer school poster" />
                                    <img className="desktop-only" src={Image4} alt="children playing in the playing ground" />
                                </div>
                                <p>We are committed to collaborating with the people of Alimosho community and the Lagos State Government towards
                                    artistic talent discovery, promotion and presentation, subsequent community development as well as facilitating job
                                    creation for the creative youths. It is our belief that this platform is integral to youth development and the
                                    enabling and reinforcement of positive behaviours among children and youths of Alimosho.</p>
                                <h4>Our achievements</h4>
                                <p>We have engaged and entertained our customers via a Fitness Marathon Event, Children's Day Celebration including two
                                    stage plays, Eid El Fitri Event featuring two stage plays, Arts Exhibitions, a one-month Summer School Programme for
                                    Children where 20 children from 10 families were each given a scholarship by the theatre. We also hold weekly
                                    activities which includes; Performing Arts Classes in Dance and Music, LTI Creative Club and Hall Rentals.</p>
                                <div className="grid-3">
                                    <img src={TheatreImg1} alt="outside of the theatre" />
                                    <img src={TheatreImg2} alt="seats in the theatre" />
                                    <img className="desktop-only" src={TheatreImg3} alt="theatre stage" />
                                </div>
                                <p>Our Facilities includes a Theatre of over four hundred (400) seats, two (2) conference rooms, a green room, a
                                    restaurant, a lobby/art gallery, AV equipment (including, lighting, screen, sound, and a live music set).</p>
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

export default AboutUsPage;