import style from './home-page.module.scss';
import React, { useEffect } from 'react';
import HomepageFilms from '@components/homepage-films/homepage-films';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilms } from '../../redux/slices/filmSlice';
import { AppDispatch, RootState } from '../../redux/store/store';

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { recommended, trending, newReleases, loading, error } = useSelector(
        (state: RootState) => state.film
    );
    useEffect(() => {
        dispatch(fetchAllFilms());
    }, [dispatch]);

    if (loading) {
        return 'загрузка';
    }
    if (error) {
        return <div className={style.error}>Ошибка: {error}</div>;
    }
    if (!loading) {
        console.table(recommended);
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
