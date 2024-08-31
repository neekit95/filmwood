import style from './app.module.scss';
import AppRoutes from '../../app-routes/app-routes';
import Header from '../header/header';
import React from 'react';

const App: React.FC = () => {
    return (
        <div className={style.container}>
            <Header />
            <div className="wrapper">
                <AppRoutes />
            </div>
        </div>
    );
};

export default App;
