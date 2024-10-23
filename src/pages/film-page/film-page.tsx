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
import { format } from 'date-fns';

const FilmPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const filmId = Number(id);
    const filmDetails = useSelector(filmDetailsSelector);
    const loading = useSelector(loadingFilmsSelector);
    const error = useSelector(errorFilmsSelector);

    let releaseDate;
    let genres;

    if (filmDetails) {
        releaseDate = format(new Date(filmDetails.release_date), 'dd.MM.yyyy');
        if (filmDetails.genres) {
            genres = filmDetails.genres.map((genre) => genre.name).join(', ');
        }
        console.log('filmDetails', filmDetails);
    }

    useEffect(() => {
        if (filmId) {
            dispatch(fetchFilmById(filmId));
        }
    }, [dispatch, filmId]);

    if (loading) {
        return (
            <div className={style.loader}>
                <Loader />
            </div>
        );
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
                    <div className={style.stars}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${filmDetails.poster_path}`}
                            alt={filmDetails.title}
                            className={style.poster}
                        />
                    </div>

                    <div className={style.ratings}>
                        <div className={style.rating}>
                            <span className={style.studio}>TMDB</span>:{' '}
                            {filmDetails.vote_average.toFixed(1)}
                        </div>

                        <div className={style.rating}>
                            <span className={style.studio}>FW</span>: 6.7
                        </div>
                    </div>
                </div>

                <div className={style.right}>
                    <h2 className={style.title}>{filmDetails.title}</h2>
                    <p className={style.overview}>{filmDetails.overview}</p>
                    <div className={style.overviewSecondary}>
                        <div className={style.date}>
                            <h3>Дата выхода:</h3>
                            {releaseDate}
                        </div>
                        {genres && (
                            <div className={style.date}>
                                <h3>Жанр:</h3>
                                <p>{genres}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className={style.player}>
                <Player TMDB_ID={filmDetails.id} />
            </section>
        </div>
    );
};

export default FilmPage;
