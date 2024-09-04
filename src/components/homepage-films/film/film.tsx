import style from './film.module.scss';
import React from 'react';

interface FilmProps {
    filmName: string;
    link: string;
}

const Film: React.FC<FilmProps> = ({ filmName, link }) => {
    return (
        <div className={style.container}>
            <h1>{filmName}</h1>
        </div>
    );
};

export default Film;
