import { Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '@pages/landing-page/landing-page';
import UserPage from '@pages/user-page/user-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import SettingsPage from '@pages/settings-page/settings-page';
import LoginPage from '@pages/auth/login-page/login-page';
import RegistrationPage from '@pages/auth/registration-page/registration-page';
import HomePage from '@pages/home-page/home-page';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import FilmPage from '@pages/film-page/film-page';

const AppRoutes: React.FC = () => {
    const isUserAuth = useSelector((state: RootState) => state.auth.isUserAuth);

    return (
        <Routes>
            <Route
                path="/"
                element={isUserAuth ? <HomePage /> : <LandingPage />}
            />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegistrationPage />} />
            <Route path="/film/:link" element={<FilmPage />} />
        </Routes>
    );
};

export default AppRoutes;
