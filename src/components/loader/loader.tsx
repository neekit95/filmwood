import style from './loader.module.scss';
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.spinner}></div>
        </div>
    );
};

export default Loader;
