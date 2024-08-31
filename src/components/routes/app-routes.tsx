import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from '../../pages/homepage/homepage';
import UserPage from '../../pages/user-page/user-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
