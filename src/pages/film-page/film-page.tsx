import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { fetchFilmById } from '../../redux/slices/filmsSlice';
import style from './film-page.module.scss';

const FilmPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const filmId = Number(id);

    const filmDetails = useSelector(
        (state: RootState) => state.films.filmDetails
    );
    const loading = useSelector((state: RootState) => state.films.loading);
    const error = useSelector((state: RootState) => state.films.error);

    useEffect(() => {
        if (filmId) {
            dispatch(fetchFilmById(filmId));
        }
    }, [dispatch, filmId]);

    if (loading) {
        return <div className={style.loading}>Loading...</div>;
    }
    if (error) {
        return <div className={style.error}>Error: {error}</div>;
    }
    if (!filmDetails) {
        return <div className={style.notFound}>Film not found</div>;
    }

    return (
        <div className={style.container}>
            <section className={style.main}>
                <div className={style.left}>
                    <img
                        src={`https://image.tmdb.org/t/p/original${filmDetails.poster_path}`}
                        alt={filmDetails.title}
                        className={style.poster}
                    />
                    <p>Rating: {filmDetails.vote_average.toFixed(1)}</p>
                </div>

                <div className={style.right}>
                    <h1>{filmDetails.title}</h1>
                    <p>{filmDetails.overview}</p>
                </div>
            </section>
        </div>
    );
};

export default FilmPage;
