import "../../assets/css/mini.css";

import React from 'react';
import { Divider } from 'antd';

import Lti1 from "../../assets/images/main/lti1.jpeg";
import Lti2 from "../../assets/images/main/lti2.jpeg";
import Lti3 from "../../assets/images/main/lti3.jpeg";
import Lti4 from "../../assets/images/main/lti4.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";

const LTIPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="LTI Creative Club" pageClassTitle="lti"
                    innerLinks={[{ link: AppRoutes.trainings, title: "Training Programmes" },
                    { link: AppRoutes.lti, title: "LTI" },
                    { link: AppRoutes.tafta, title: "TAFTA" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h4 class="page_summary">Explore our Programs and Resources</h4>
                                <div className="media-cover">
                                    <div className="grid-2 lti_grid">
                                        <img src={Lti1} alt="" />
                                        <img src={Lti2} alt="" />
                                    </div>
                                </div>
                                <p>The Lagos Theatre Igando, because of its passion for Child and Children development and Empowerment introduced the
                                    LTI Creative Club for the children of Alimosho and every other community. Activities include but are not limited to
                                    Music ,Dance , Drama , Chess , Coding , Tie and Dye , Knitting , Visual arts and painting , Traditional African
                                    Drums (Making & Playing).</p>
                                <p>There are lots of benefits attached to joining the LTI Creative Club. To mention a few are: Joining the LTI Creative
                                    Club gives your child the opportunity to participate in International Chess Tournaments. ,Membership of the LTI
                                    Creative Club gives your child 20% discount on all theatre events/shows.</p>
                                <ul>
                                    <li>Families of the LTI Creative club automatically have a 20% discount on the use of the theatre.</li>
                                    <li>LTI Creative Club membership gives your child the access to the theatre’s Recreation Park.</li>
                                    <li>Also, members are awarded with amazing gifts such as LTI T-shirts, backpacks, water bottles and stationaries.
                                    </li>
                                    <li>Your child becomes a professional in Dance, Drama and Music.</li>
                                    <li>Joining the LTI Creative Club accords your child the privilege of being a top-notch coding expert.</li>
                                    <li>Not forgetting that this Creative Club aids in boosting your child’s self-esteem, confidence and improve their
                                        social and networking skills.</li>
                                </ul>
                                <button>Click here to register</button>
                                <Divider />
                                <div className="media-cover">
                                    <div className="grid-2 lti_grid">
                                        <img src={Lti3} alt="" />
                                        <img src={Lti4} alt="" />
                                    </div>
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

export default LTIPage;