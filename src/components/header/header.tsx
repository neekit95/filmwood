import style from './header.module.scss';
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className={style.container}>
            header
            <div className={style.buttons}>buttons</div>
        </div>
    );
};

export default Header;
