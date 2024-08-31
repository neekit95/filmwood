import style from './not-found-page.module.scss';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className={style.container}>
            <h3>not found</h3>
        </div>
    );
};

export default NotFoundPage;
