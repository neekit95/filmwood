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

    const goToFilm = () => {
        clearResults();
        navigate(`/film/${film.id}`);
    };

    return (
        <button className={style.container} onClick={goToFilm}>
            <h1>{film.title}</h1>
        </button>
    );
};

export default SearchResult;
