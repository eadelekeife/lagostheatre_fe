import React, { useEffect, useState } from "react";

import MapImage from "../../assets/images/main/igando_map.png";
import SideContent from "../../components/side-content";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { _fetch_all_events_ } from "../../components/axios_routes";

import { notification } from "antd";

const EventDetailPage = () => {
    const [eventDetail, setEventDetail] = useState({});

    const openNotificationWithIcon = (type, errMessage) => {
        notification[type]({
            message: '',
            description: errMessage
        });
    };

    const fetchSingleEvent = async () => {
        try {
            let eventData = await _fetch_all_events_();
            if (eventData.data.statusMessage === "success") {
                setEventDetail(eventData.data.message);
            } else {
                openNotificationWithIcon('error', 'An error occurred while loading event data. Please reload page to try again')
            }
        } catch (err) {
            openNotificationWithIcon('error', 'An error occurred while loading event data. Please reload page to try again')
        }
    }
    useEffect(() => {
        fetchSingleEvent()
    })
    return (
        <div>
            <Nav />
            <div className="event-detail-hero">

            </div>
            <div className="mini-content-main pt_5">
                <div className="contain">
                    <div className="grid-2-bias">
                        <div className="grid_block_right main-content-body-content">
                            <h5>Event Description</h5>
                            <p>{eventDetail.title}</p>
                            <h5 style={{ marginBottom: 0 }}>Guest Safety Is Our First Priority</h5>
                            <p>In the thick of the ongoing sequel of COVID-19, we continue to prioritize the health and
                                well-being of our guests, artists, staffs, and the community. We are dedicated to
                                following all guidelines for safety while providing the best patron experience for your
                                visit.</p>
                            <img src={MapImage} alt="igando map" />
                            <h5>88, College Street, NYSC bus stop Igando.</h5>
                            <div className="mt_3"></div>
                        </div>
                        <div className="grid_block_left">
                            <div class="ticket-box">
                                <ul class="first-list">
                                    <li><span class="first">Event Begins:</span><span class="second">10:00</span></li>
                                    <li><span class="first">Event Ends:</span><span class="second">18:00</span></li>
                                    <li><span class="first">Event Date:</span><span class="second">Sunday, December 25, 2022</span></li>
                                    <li><span class="first">Tickets: </span><span class="second">Free</span></li>
                                </ul><button class="btn_red" disabled="">Buy Tickets Now</button>
                            </div>
                            <div class="ticket-social">
                                <div class="social">
                                    <ion-icon name="logo-facebook" role="img" class="md hydrated"
                                        aria-label="logo facebook"></ion-icon>
                                    <ion-icon name="logo-instagram" role="img" class="md hydrated"
                                        aria-label="logo instagram"></ion-icon>
                                    <ion-icon name="logo-youtube" role="img" class="md hydrated"
                                        aria-label="logo youtube"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventDetailPage;