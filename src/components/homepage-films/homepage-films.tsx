import style from './homepage-films.module.scss';
import React from 'react';
import Film from './film/film';

interface FilmData {
    id: number;
    filmName: string;
    link: string;
}

interface Props {
    heading?: string;
    films: FilmData[];
}

const HomepageFilms: React.FC<Props> = ({ heading, films }) => {
    return (
        <div className={style.container}>
            {heading && <h2>{heading}</h2>}
            <div className={style.filmSection}>
                {films.map((film) => (
                    <div key={film.id} className={style.film}>
                        <Film filmName={film.filmName} link={film.link} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomepageFilms;
