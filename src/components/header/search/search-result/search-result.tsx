import style from './search-result.module.scss';
import type { Film } from '@lib/types';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Props = {
    film: Film;
    clearResults: () => void;
};

const SearchResult: React.FC<Props> = ({ film, clearResults }) => {
    const navigate = useNavigate();
    const posterUrl = `https://image.tmdb.org/t/p/w92${film.poster_path}`;

    const genres = film.genres?.length
        ? film.genres.map((genre) => genre.name).join(', ')
        : null;

    const goToFilm = (): void => {
        clearResults();
        navigate(`/film/${film.id}`);
    };

    return (
        <button className={style.container} onClick={goToFilm}>
            <div className={style.left}>
                <h4 className={style.h4}>
                    {film.title}
                    <span className={style.span}>
                        ({film.vote_average.toFixed(1)})
                    </span>
                </h4>
            </div>

            {genres && <p>Жанр: {genres}</p>}

            <img src={posterUrl} className={style.poster} alt={film.title} />
        </button>
    );
};

export default SearchResult;
