import style from './film.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

interface FilmProps {
    filmName: string;
    link: string;
}

const Film: React.FC<FilmProps> = ({ filmName, link }) => {
    return (
        <Link to={`/film${link}`} className={style.link}>
            <div className={style.container}>
                <h1>{filmName}</h1>
            </div>
        </Link>
    );
};

export default Film;
