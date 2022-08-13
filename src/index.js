import 'antd/dist/antd.css';
import './assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoutes from './utils/routes';

import Nav from './utils/nav';
// import Homepage from './components/homepage';
import Homepage from './components/homepage/new';

import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Reset from './components/auth/forgot';

import About from './components/mini/about';
import Tour from './components/mini/tour';
import Team from './components/mini/team';
import Trainings from './components/mini/trainings';
import People from './components/mini/people';
import Events from './components/events/index';

const App = () => {
    return (
        <BrowserRouter>
            {/* <Nav /> */}
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path={AppRoutes.tour} element={<Tour />} />
                <Route path={AppRoutes.ourteam} element={<Team />} />
                <Route path={AppRoutes.trainings} element={<Trainings />} />
                <Route path={AppRoutes.people} element={<People />} />
                <Route path={AppRoutes.events} element={<Events />} />
                <Route path={AppRoutes.about} element={<About />} />

                <Route path={AppRoutes.signin} element={<SignIn />} />
                <Route path={AppRoutes.signup} element={<SignUp />} />
                <Route path={AppRoutes.forgotPassword} element={<Reset />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);