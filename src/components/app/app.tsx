import style from './app.module.scss';
import AppRoutes from '../routes/app-routes.tsx';
import Header from '../header/header.tsx';

const App = () => {
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
