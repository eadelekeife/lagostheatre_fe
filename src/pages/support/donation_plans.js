import "../../assets/css/mini.css";

import React, { useState } from 'react';
import { notification } from 'antd';
import NumberFormat from 'react-number-format';

import Footer from "../../components/footer";
import AppRoutes from "../../components/routes";

import SideContent from "../../components/side-content";
import Nav from "../../components/nav";
import HeroSect from "../../components/hero-sect";
import { _fetch_donation_plans } from "../../components/axios_routes";

const DonationPage = () => {
    const openNotificationWithIcon = (type, errMessage) => {
        notification[type]({
            message: '',
            description: errMessage
        });
    };

    const [donationPlans, setDonationPlans] = useState([]);

    useState(async () => {
        try {
            let donationPlan = await _fetch_donation_plans();
            if (donationPlan.data.statusMessage === "success") {
                setDonationPlans(donationPlan.data.message);
            } else {
                openNotificationWithIcon('error', 'An error occurred while loading donations plans. Please reload page to try again')
            }
        } catch (err) {
            openNotificationWithIcon('error', 'An error occurred while loading donations plans. Please reload page to try again')
        }
    }, [])
    return (
        <div className="about mini-display donation_plan">
            <Nav />
            <div>
                <HeroSect pageTitle="Our Donation Plans" pageClassTitle="plans"
                    innerLinks={[{ link: AppRoutes.donate, title: "Donate" },
                    { link: AppRoutes.how_to_donate, title: "How to donate" },
                    { link: AppRoutes.donation_plans, title: "Donation Plans" }
                    ]} />
                <div className="mini-content-main pt_5">
                    <div className="contain">
                        <div className="grid-2-bias">
                            <div className="grid_block_right main-content-body-content">
                                <h5 class="page_summary">These membership programs offer unique opportunities to become
                                    an integral part of the Lagos Theatre community. Support us and enjoy exclusive
                                    benefits.</h5>
                                <div className="grid-2">
                                    {
                                        donationPlans.map((donations, index) => (
                                            <div className={`plans_list _${index + 1}`} key={index}>
                                                <div className="plan_name">
                                                    <h4>{donations.name}</h4>
                                                    <p>NGN <NumberFormat thousandSeparator={true} displayType={'text'}
                                                        value={donations.amount} /></p>
                                                </div>
                                                <div className="advantage_list">
                                                    <ul>
                                                        {
                                                            donations.donationPlanBenefits.map((benefits, index) => (
                                                                <li key={index}><ion-icon name="checkmark-circle-outline"></ion-icon> {benefits.benefit}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <button>Donate Now</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="">

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
        </div >
    )
}

export default DonationPage;