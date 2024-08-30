import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/homepage/homepage.tsx';
import UserPage from '../../pages/user-page/user-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';

const AppRoutes = () => {
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
