import style from './home-page.module.scss';
import React, { useEffect } from 'react';
import HomepageFilms from '@components/homepage-films/homepage-films';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilms } from '@redux/thunks/fetch-films-thunk';
import { AppDispatch, RootState } from '@redux/store/store';
import Loader from '@components/loader/loader';

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { recommended, trending, newReleases, loading, error } = useSelector(
        (state: RootState) => state.films
    );
    useEffect(() => {
        dispatch(fetchAllFilms());
    }, [dispatch]);

    if (loading) {
        return (
            <div className={style.loader}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return <div className={style.error}>Ошибка: {error}</div>;
    }

    return (
        <div className={style.container}>
            <HomepageFilms heading="Наши рекомендации" films={recommended} />
            <HomepageFilms heading="В тренде" films={trending} />
            <HomepageFilms heading="Новые релизы" films={newReleases} />
        </div>
    );
};

export default HomePage;
