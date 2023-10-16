import "../../assets/css/events.css";

import React, { useEffect, useState } from "react";
import { notification } from 'antd';
import { DateTime } from 'luxon';

import Nav from "../../components/nav";
import Footer from "../../components/footer";

import _1 from "../../assets/images/content/_1.webp";
import { _fetch_all_events_ } from "../../components/axios_routes";

const EventsPage = () => {

    const [allEvents, setAllEvents] = useState([]);
    const openNotificationWithIcon = (type, errMessage) => {
        notification[type]({
            message: '',
            description: errMessage
        });
    };
    const fetchAllEvents = async () => {
        try {
            let eventData = await _fetch_all_events_();
            if (eventData.data.statusMessage === "success") {
                setAllEvents(eventData.data.message);
            } else {
                openNotificationWithIcon('error', 'An error occurred while loading events. Please reload page to try again')
            }
        } catch (err) {
            openNotificationWithIcon('error', 'An error occurred while loading events. Please reload page to try again')
        }
    }
    useEffect(() => {
        fetchAllEvents();
    })
    return (
        <div className="about events-page">
            <Nav />
            <div className="event-bg">
            </div>

            <div className="homepage-links-sect recent-events">
                <div className="contain">
                    <h5 className="tile-header">Recent and Upcoming Events</h5>
                    <div className="grid-4">
                        {
                            allEvents.map((events, index) => (
                                <div key={index} className="homepage-links-grid-cover">
                                    <img src={events.displayImage} alt={events.eventTitle} />
                                    <div className="links-text-cover">
                                        <h3 className="tile-header">{events.eventTitle}</h3>
                                        <p className="tile-date">{DateTime.fromISO(events.createdAt).toLocaleString(DateTime.DATE_HUGE)}</p>
                                        <p className="tile-story">{events.eventDescription}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventsPage;