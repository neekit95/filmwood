import React from 'react';
import { Link } from 'react-router-dom';
import style from './film.module.scss';

type FilmProps = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};

const Film: React.FC<FilmProps> = ({
    id,
    title,
    poster_path,
    vote_average,
}) => {
    const rating = vote_average.toFixed(1);

    return (
        <div className={style.container}>
            <Link to={`/film/${id}`} className={style.link}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className={style.poster}
                />
                <h3 className={style.title}>{title}</h3>
                <div className={style.details}>
                    <span className={style.rating}>Рейтинг: {rating}</span>
                </div>
            </Link>
        </div>
    );
};

export default Film;
