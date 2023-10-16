import "../../assets/css/mini.css";

import React from 'react';

import HallImg from "../../assets/images/main/hall.jpg";
import HallShowcaseImg from "../../assets/images/main/hall_showcase.jpeg";
import SitImg from "../../assets/images/main/sit.jpeg";

import HallImg1 from "../../assets/images/main/hall1.png";
import HallImg2 from "../../assets/images/main/hall2.png";
import HallImg3 from "../../assets/images/main/hall3.jpeg";

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";
import { Divider, Table } from "antd";

const RentPage = () => {
    const rentalColumns = [
        {
            title: 'Main Hall',
            className: 'column-money',
            dataIndex: 'mainHall'
        },
        {
            title: 'Conference Hall',
            dataIndex: 'conferenceHall'
        },
        {
            title: 'Meeting Room',
            dataIndex: 'meetingRoom',
        },
        {
            title: 'Restaurant Area',
            className: 'column-money',
            dataIndex: 'restaurantArea',
        }
    ];
    const rentalData = [{
        mainHall: "Access Theatre, Acs, green room and rest room",
        conferenceHall: "",
        meetingRoom: "Size: 4.5m * 3.0m",
        restaurantArea: "Size:",
    }, {
        mainHall: "Capacity: 405 seats - Theatre style seating.",
        conferenceHall: "Sqm: 13.5Sqm",
        meetingRoom: "Sqm: 13.5Sqm",
        restaurantArea: "Sqm: 22.27Sqm",
    }, {
        mainHall: "Price A: NGN840,000",
        conferenceHall: "price: NGN18,000/hr",
        meetingRoom: "price: NGN12,000/hr",
        restaurantArea: "Price: NGN180,000",
    }, {
        mainHall: "Hired period : 07h00 to 20h00+ (NGN40,000 per additional hour)",
        conferenceHall: "07h00 to 20h00",
        meetingRoom: "Hired period: 07h00 to 20h00",
        restaurantArea: "Hired Period: 08h00 to 19h00 + 40,000 per additional hour",
    }, {
        mainHall: "Price B: N480,000",
        conferenceHall: "",
        meetingRoom: "",
        restaurantArea: "",
    }, {
        mainHall: "Hired period: 07h00 to 13h00",
        conferenceHall: "",
        meetingRoom: "",
        restaurantArea: "",
    }];

    const avColumns = [
        {
            title: 'Lighting',
            className: 'column-money',
            dataIndex: 'lighting'
        },
        {
            title: 'Screen',
            dataIndex: 'screen'
        },
        {
            title: 'Sound',
            dataIndex: 'sound',
        },
        {
            title: 'Live music set',
            className: 'column-money',
            dataIndex: 'musicSet',
        }
    ];
    const avData = [
        {
            lighting: 'NGN 180,000 per event',
            sound: 'Screen: NGN 120,000 per event',
            screen: 'Sound: NGN 120,000 per event',
            musicSet: 'Live music set: N60,000 per event'
        }
    ];
    return (
        <div className="about mini-display">
            <Nav />
            <div>
                <HeroSect pageTitle="Our Rental Information" pageClassTitle="rent"
                    innerLinks={[{ link: AppRoutes.general_info, title: "General Info" },
                    { link: AppRoutes.rent, title: "Rent our space" },
                    { link: AppRoutes.description, title: "How to get here" }]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <div className="media-cover">
                                    <div className="grid-3">
                                        <img src={HallImg} alt="man dancing on stage" className="rent_image" />
                                        <img src={HallShowcaseImg} alt="live event at the hall" className="rent_image" />
                                        <img src={SitImg} alt="our sitting area" className="rent_image" />
                                    </div>
                                </div>
                                <h4>The Theatre Hall</h4>
                                <p>The main hall is a 405 seater with AV equipment ( including lighting, screen, sound, and a live music set). It is
                                    suitable for auditions, events / shows and corporate meetings</p>
                                <div className="media-cover">
                                    <div className="grid-3">
                                        <img src={HallImg1} alt="our lobby" className="rent_image" />
                                        <img src={HallImg2} alt="extra sitting space" className="rent_image" />
                                        <img src={HallImg3} alt="our conference room" className="rent_image" />
                                    </div>
                                </div>
                                <p>Other available spaces include two (2) conference rooms, a green room, a restaurant, a lobby / art gallery and parking spaces.
                                </p>
                                {/* <div className="pt_5"></div> */}
                            </div>
                            <div className="grid_block_left">
                                <SideContent />
                            </div>
                        </div>
                        <div>
                            <Divider />
                            <h5>Rental Information</h5>
                            <Table
                                columns={rentalColumns}
                                dataSource={rentalData}
                                bordered
                                footer={null}
                            />
                            <div>
                                <h5>AV Equipments</h5>
                                <Table
                                    columns={avColumns}
                                    dataSource={avData}
                                    bordered
                                    footer={null}
                                />
                            </div>
                            {/* <div className="pt_5"></div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RentPage;