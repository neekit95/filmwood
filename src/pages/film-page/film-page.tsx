import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store/store';
import { fetchFilmById } from '@redux/thunks/fetch-films-thunk';
import style from './film-page.module.scss';
import Loader from '@components/loader/loader';
import Player from '@components/player/player';
import {
    errorFilmsSelector,
    loadingFilmsSelector,
    filmDetailsSelector,
} from '@redux/selectors/selectors';

const FilmPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const filmId = Number(id);
    const filmDetails = useSelector(filmDetailsSelector);
    const loading = useSelector(loadingFilmsSelector);
    const error = useSelector(errorFilmsSelector);

    useEffect(() => {
        if (filmId) {
            dispatch(fetchFilmById(filmId));
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
                </div>

                <div className={style.right}>
                    <h2 className={style.title}>{filmDetails.title}</h2>
                    <p className={style.overview}>{filmDetails.overview}</p>
                    {/*<p>{filmDetails.release_date}</p>*/}
                </div>
            </section>

            <section className={style.player}>
                <Player TMDB_ID={filmDetails.id} />
            </section>

            <section className={style.comments}>comments</section>

            <section className={style.filmset}>Подборка фильмов</section>
        </div>
    );
};

export default FilmPage;
