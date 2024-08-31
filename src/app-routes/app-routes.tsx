import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from '@pages/homepage/homepage';
import UserPage from '@pages/user-page/user-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import SettingsPage from '@pages/settings-page/settings-page';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
    );
};

export default AppRoutes;
