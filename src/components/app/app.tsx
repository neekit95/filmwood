import style from './app.module.scss';
import AppRoutes from '../routes/app-routes';
import Header from '../header/header';
import React from 'react';

const App: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.wrapper}>
                <AppRoutes />
            </div>
        </div>
    );
};

export default App;
