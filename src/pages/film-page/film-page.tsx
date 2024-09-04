import style from './film-page.module.scss';
import React from 'react';
import { useParams } from 'react-router-dom';

const FilmPage: React.FC = () => {
    const { link } = useParams<{ link?: string }>();
    console.log('URL Parameter:', link);

    const filmData: { [key: string]: string } = {
        '/devil': 'Изгоняющая дьявола',
        '/matrix': 'Матрица',
        '/interstellar': 'Интерстеллар',
        '/inception': 'Начало',
        '/blade-runner-2049': 'Бегущий по лезвию 2049',
        '/dark-knight': 'Темный рыцарь',
        '/harry-potter': 'Гарри Поттер',
        '/shawshank-redemption': 'Побег из Шоушенка',
        '/green-mile': 'Зеленая миля',
        '/pirates-of-the-caribbean': 'Пираты Карибского моря',
        '/avatar': 'Аватар',
        '/titanic': 'Титаник',
        '/indiana-jones': 'Индиана Джонс',
        '/forrest-gump': 'Форрест Гамп',
        '/star-wars': 'Звездные войны',
        '/godfather': 'Крестный отец',
        '/lord-of-the-rings': 'Властелин колец',
        '/twilight': 'Сумерки',
        '/joker': 'Джокер',
        '/wonder-woman': 'Чудо-женщина',
        '/dune': 'Дюна',
        '/eternals': 'Вечные',
        '/spider-man': 'Человек-паук: Нет пути домой',
        '/black-widow': 'Черная вдова',
        '/shang-chi': 'Шан-Чи',
        '/no-time-to-die': 'Не время умирать',
        '/knives-out-2': 'Достать ножи 2',
        '/the-batman': 'Бэтмен',
        '/morbius': 'Морбиус',
        '/venom-2': 'Веном 2',
    };

    const filmTitle = filmData[`/${link}`] || 'Фильм не найден';

    return (
        <div className={style.container}>
            <h1>{filmTitle}</h1>
        </div>
    );
};

export default FilmPage;
