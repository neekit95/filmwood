import style from './app.module.scss';
import AppRoutes from '../../app-routes/app-routes';
import Header from '../header/header';
import React from 'react';
import AdminPanel from '../admin-panel/admin-panel';
import Wrapper from '@components/wrapper/wrapper';

const App: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <AdminPanel />
            <Wrapper>
                <AppRoutes />
            </Wrapper>
        </div>
    );
};

export default App;
