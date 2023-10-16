import 'antd/dist/antd.css';
import './assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoutes from './components/routes';

import AboutUsPage from './pages/about/about';
import LTIPage from './pages/classes/lti';
import TaftaPage from './pages/classes/tafta';
import TrainingsPage from './pages/classes/trainings';
import GeneralInfoPage from './pages/rentals/general';
import RentPage from './pages/rentals/rent';
import DescriptionPage from './pages/rentals/description';

import Shop from './pages/support/donate';

import DonatePage from './pages/support/donate';
import HowToDonatePage from './pages/support/how_to_donate';
import DonationPage from './pages/support/donation_plans';
import Homepage from './pages/homepage';
import EventsPage from './pages/events';
import OurTeamPage from './pages/about/team';
import EventDetailPage from './pages/events/event_detail';

const App = () => {
    return (
        <BrowserRouter>
            {/* <Nav /> */}
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path={AppRoutes.events} exact element={<EventsPage />} />
                <Route path={AppRoutes.event_detail} exact element={<EventDetailPage />} />
                {/* <Route path={AppRoutes.tour} element={<Tour />} />
                <Route path={AppRoutes.ourteam} element={<Team />} />
                <Route path={AppRoutes.trainings} element={<Trainings />} />
                <Route path={AppRoutes.people} element={<People />} />
                <Route path={AppRoutes.events} element={<Events />} /> */}
                <Route path={AppRoutes.about} element={<AboutUsPage />} />
                <Route path={AppRoutes.team} element={<OurTeamPage />} />

                <Route path={AppRoutes.lti} element={<LTIPage />} />
                <Route path={AppRoutes.tafta} element={<TaftaPage />} />
                <Route path={AppRoutes.trainings} element={<TrainingsPage />} />


                <Route path={AppRoutes.general_info} element={<GeneralInfoPage />} />
                <Route path={AppRoutes.rent} element={<RentPage />} />
                <Route path={AppRoutes.description} element={<DescriptionPage />} />

                <Route path={AppRoutes.shop} element={<Shop />} />

                <Route path={AppRoutes.donate} element={<DonatePage />} />
                <Route path={AppRoutes.how_to_donate} element={<HowToDonatePage />} />
                <Route path={AppRoutes.donation_plans} element={<DonationPage />} />
                {/* <Route path={AppRoutes.general_info} element={<GeneralInfoPage />} /> */}

                {/* <Route path={AppRoutes.signin} element={<SignIn />} />
                <Route path={AppRoutes.signup} element={<SignUp />} />
                <Route path={AppRoutes.forgotPassword} element={<Reset />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);