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

const ShopPage = () => {
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="About Us" pageClassTitle="about_us"
                    innerLinks={[{ link: AppRoutes.about, title: "Our Story" },
                    { link: AppRoutes.team, title: "Administrative Staff" }]} />
                
            </div>
            <Footer />
        </div>
    )
}

export default ShopPage;