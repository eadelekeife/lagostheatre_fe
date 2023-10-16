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
import { Divider } from "antd";

const OurTeamPage = () => {
    return (
        <div className="about mini-display team">
            <Nav />
            <div>
                <HeroSect pageTitle="Our Administrative Staff" pageClassTitle="team"
                    innerLinks={[{ link: AppRoutes.about, title: "Our Story" },
                    { link: AppRoutes.team, title: "Administrative Staff" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <div>
                                    <h5 className="page_summary"
                                        style={{marginTop: '40px', textAlign: 'center' }}>Advisory</h5>
                                    <Divider />
                                    <div>
                                        <div className="single">
                                            <div className="team_img_cover team_card team1"></div>
                                            <div className="team_text">
                                                <h4>His Excellency Babajide Olusola Sanwo-Olu</h4>
                                                <p>The 15th governor of Lagos State</p>
                                            </div>
                                        </div>
                                        <div className="grid-3">
                                            <div>
                                                <div className="team_img_cover team_card team2"></div>
                                                <div className="team_text">
                                                    <h4>His Excellency Femi Hamza</h4>
                                                    <p>Deputy Governor of Lagos State</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card team3"></div>
                                                <div className="team_text">
                                                    <h4>Mrs Toke Benson-Awoyinka</h4>
                                                    <p>Honorable Commissioner for Tourism, Arts&nbsp;and&nbsp;Culture</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card team50">
                                                </div>
                                                <div className="team_text">
                                                    <h4>Mr Idris Aregbe</h4>
                                                    <p>Special Assistant to Governor Sanwo-Olu for Tourism</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card team4">
                                                </div>
                                                <div className="team_text">
                                                    <h4>Mrs Oloruntoyin&nbsp;Atekoja</h4>
                                                    <p>Permanent Secretary - Ministry of Tourism, Arts and Culture</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card team5">
                                                </div>
                                                <div className="team_text">
                                                    <h4>Mr Abimbola Ogunsote</h4>
                                                    <p>Director of Theatres</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="page_summary"
                                        style={{ marginTop: '40px', textAlign: 'center' }}>
                                        Administrative / Artistic / Technical</h5>
                                    <Divider />
                                    <div className="team-page">
                                        <div className="single">
                                            <div className="team_img_cover team_card _1">
                                            </div>
                                            <div className="team_text">
                                                <h4>Mr Bimbo Obafunwa</h4>
                                                <p style={{ marginBottom: '0px' }}>Director</p>
                                                <p>( Corporate Dance World and Entertainment )</p>
                                            </div>
                                            <div className=""></div>
                                        </div>
                                        <div className="grid-4">
                                            <div>
                                                <div className="team_img_cover team_card _3">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Bukola-Oladele</h4>
                                                            <p>Business Development Management</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Project Manager, Architect, Agile Scrum Master</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Bukola-Oladele</h4>
                                                    <p>Business Development Management</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _4">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Olajumoke Raliat Sidiku</h4>
                                                            <p>Admin / PR Officer</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Events Management, Hostess / Ushering Management</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Olajumoke Raliat Sidiku</h4>
                                                    <p>Admin / PR Officer</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _5">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Sandra Anuoluwapo Ibhafidon</h4>
                                                            <p>Admin</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>An Entrepreneur, Fine artist.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Sandra Anuoluwapo Ibhafidon</h4>
                                                    <p>Admin</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _6">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Victoria Oluwajuwon Omotayo</h4>
                                                            <p>Admin / Accountant</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Victoria Oluwajuwon Omotayo</h4>
                                                    <p>Admin/Accountant </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _7">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Segun Alawode</h4>
                                                            <p>Facility Manager</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Event Planner, Football Manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Segun Alawode</h4>
                                                    <p>Facility Manager</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _8">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Godwin Alemeru</h4>
                                                            <p>Logistic Manager</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Event Planner, Realtor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Godwin Alemeru </h4>
                                                    <p>Logistic Manager </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _9">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Kehinde Thompson Adesokan</h4>
                                                            <p>Multimedia Visual Display Specialist</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Script supervisor(continuity), script writer, content creator, Drama instructor, videographer</p>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Kehinde Thompson Adesokan </h4>
                                                    <p>Multimedia Visual Display Specialist </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _10">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Adesokan Taiwo Joseph</h4>
                                                            <p>Cinematographer</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>a Photgrapher, CEO T.S Production and Dance Instructor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Adesokan Taiwo Joseph </h4>
                                                    <p>Cinematographer </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _11">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Elijah Oluwatobilola Ibhafidon</h4>
                                                            <p>Head of Security</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Graphics and Website Designer, General Printing and Branding</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Elijah Oluwatobilola Ibhafidon </h4>
                                                    <p>Head of Security </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _12">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Afeez Adeshina Dada</h4>
                                                            <p>Security</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Fashion Designer, Photographer, Video Editor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Afeez Adeshina Dada </h4>
                                                    <p>Security </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _13">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Ramoni Ademola Esho</h4>
                                                            <p>Security</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Mechanical Engineer, Transporter</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Ramoni Ademola Esho</h4>
                                                    <p>Security </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _14">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Rahimot Motunrayo Ibrahim</h4>
                                                            <p>Cleaner</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>Computer Science Graduate, Entrepreneur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Rahimot Motunrayo Ibrahim </h4>
                                                    <p>Cleaner</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _15">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Adeola Dada Mufutau</h4>
                                                            <p>Cleaner</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>An Entrepreneur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Adeola Dada Mufutau</h4>
                                                    <p>Cleaner</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card _16">
                                                    <div className="site_bg_overlay">
                                                        <div>
                                                            <h4>Rekiat Ajasa</h4>
                                                            <p>Cleaner</p>
                                                            <div className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                                                                role="separator" style={{ margin: '0px' }}><span className="ant-divider-inner-text">Also</span></div>
                                                            <p>An Entrepreneur</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team_text">
                                                    <h4>Rekiat Ajasa</h4>
                                                    <p>Cleaner</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card electrician"></div>
                                                <div className="team_text">
                                                    <h4>Precious Grace Communications</h4>
                                                    <p>Lighting </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="team_img_cover team_card accounting"></div>
                                                <div className="team_text">
                                                    <h4>SME accounting services</h4>
                                                    <p>Accounting </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default OurTeamPage;