
import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import VerifyEmail from '../pages/Authen/VerifyEmail/VerifyEmail';
import CfMail from '../pages/Authen/confirmedMail/CfMail';
import LoginComp from '../pages/Authen/LoginComponent/LoginComp';
import MyMul from '../components/HomepageComponents/Search/MyMul';
import UserProfile from '../pages/UserProfile/UserProfile';
import AboutUs from '../pages/AboutUs/AboutUs';
import InsertQuiz from '../components/Admin Components/InsertQuiz';
import ManagementQuiz from '../components/Admin Components/ManagementQuestion';
import SearchAdmin from '../components/Admin Components/SearchAdmin';


const routers = [
    {
        path: '/login',
        exact: false,
        main: ({ history, location }) => <LoginComp history={history} location={location} />

    },
    {
        path: '/verify',
        exact: false,
        main: ({ history, location }) => <VerifyEmail history={history} location={location} />

    },
    {
        path: '/confirmMail',
        exact: false,
        main: ({ match, history, location }) =>
            <CfMail history={history} location={location} match={match} />
    },
    {
        path: '/searchedPlace',
        exact: false,
        main: ({ match, history, location }) =>
            <SearchAdmin history={history} location={location} match={match} />
    },
    {
        path: '/mul',
        exact: false,
        main: ({ match, history, location }) =>
            <MyMul history={history} location={location} match={match} />
    },
    {
        path: '/userProfile',
        exact: false,
        main: ({ history, match, location }) => <UserProfile location={location} history={history} match={match} />
    },
    {
        path: '/aboutUs',
        exact: false,
        main: ({ history, match, location }) => <AboutUs location={location} history={history} match={match} />
    },
    {
        path: '/',
        exact: true,
        main: ({ history, location }) => <HomePage history={history} location={location} />
    },
    {
        path: '',
        exact: false,
        main: ({ history, location }) => <NotFoundPage history={history} location={location} />

    },
    {
        path: '/createQuiz',
        exact: false,
        main: ({ history, match, location }) => <InsertQuiz history={history} location={location} match={match} />
    },
    {
        path: '/managementquiz',
        exact: false,
        main: ({ history, match, location }) => <ManagementQuiz history={history} location={location} match={match} />
    }
];
