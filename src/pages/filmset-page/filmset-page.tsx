import style from './filmset-page.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';

const FilmsetPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className={style.container}>
            <h3>Подборка фильмов с ID: {id}</h3>
        </div>
    );
};

export default FilmsetPage;
