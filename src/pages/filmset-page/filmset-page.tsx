import style from './filmset-page.module.scss';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Film as FilmType } from '@lib/types';
import Film from '@components/homepage-films/film/film';

const FilmsetPage: React.FC = () => {
    const location = useLocation();
    const { films, title } = location.state || { films: [], title: '' };

    return (
        <div className={style.container}>
            <h2> {title}</h2>
            <div className={style.films}>
                {films.map((film: FilmType) => (
                    <div className={style.film} key={film.id}>
                        <Film
                            id={film.id}
                            title={film.title}
                            poster_path={film.poster_path}
                            vote_average={film.vote_average}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(FilmsetPage);
