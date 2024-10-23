import React from 'react';
import { Link } from 'react-router-dom';
import style from './link-button.module.scss';

type Props = {
    to: string;
    icon?: React.JSX.Element;
    onClick?: () => void;
    nameH3?: string;
    nameP?: string;
};

const LinkButton: React.FC<Props> = ({ icon, onClick, nameH3, nameP, to }) => {
    return (
        <Link to={to}>
            <div onClick={onClick} className={style.container}>
                {icon && icon}
                {nameH3 && <h3> {nameH3} </h3>}
                {nameP && <p> {nameP} </p>}
            </div>
        </Link>
    );
};

export default LinkButton;
