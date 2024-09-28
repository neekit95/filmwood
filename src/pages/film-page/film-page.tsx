import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store/store';
import { fetchFilmById, fetchTrailerByFilmId } from '@redux/slices/films-slice';
import style from './film-page.module.scss';
import Loader from '@components/loader/loader';
import {
    errorFilmsSelector,
    loadingFilmsSelector,
    filmDetailsSelector,
    trailerSelector,
} from '@redux/selectors/selectors';

const FilmPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const filmId = Number(id);
    const filmDetails = useSelector(filmDetailsSelector);
    const loading = useSelector(loadingFilmsSelector);
    const error = useSelector(errorFilmsSelector);
    const trailerKey = useSelector(trailerSelector);

    useEffect(() => {
        if (filmId) {
            dispatch(fetchFilmById(filmId));
            dispatch(fetchTrailerByFilmId(filmId));
        }
    }, [dispatch, filmId]);

    if (loading) {
        return <Loader />;
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
                    {trailerKey && (
                        <div className={style.video}>
                            <h3>Трейлер фильма {`"${filmDetails.title}"`}</h3>
                            <iframe
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                allowFullScreen
                                className={style.player}
                            />
                        </div>
                    )}
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
