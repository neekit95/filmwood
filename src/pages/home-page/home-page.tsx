import style from './home-page.module.scss';
import React from 'react';
import HomepageFilms from '@components/homepage-films/homepage-films';

const recommendedFilms = [
    { id: 1, filmName: 'Изгоняющая дьявола', link: '/devil' },
    { id: 2, filmName: 'Матрица', link: '/matrix' },
    { id: 3, filmName: 'Интерстеллар', link: '/interstellar' },
    { id: 4, filmName: 'Начало', link: '/inception' },
    { id: 5, filmName: 'Бегущий по лезвию 2049', link: '/blade-runner-2049' },
    { id: 6, filmName: 'Темный рыцарь', link: '/dark-knight' },
    { id: 7, filmName: 'Гарри Поттер', link: '/harry-potter' },
    { id: 8, filmName: 'Побег из Шоушенка', link: '/shawshank-redemption' },
    { id: 9, filmName: 'Зеленая миля', link: '/green-mile' },
    {
        id: 10,
        filmName: 'Пираты Карибского моря',
        link: '/pirates-of-the-caribbean',
    },
];

const trendingFilms = [
    { id: 11, filmName: 'Аватар', link: '/avatar' },
    { id: 12, filmName: 'Титаник', link: '/titanic' },
    { id: 13, filmName: 'Индиана Джонс', link: '/indiana-jones' },
    { id: 14, filmName: 'Форрест Гамп', link: '/forrest-gump' },
    { id: 15, filmName: 'Звездные войны', link: '/star-wars' },
    { id: 16, filmName: 'Крестный отец', link: '/godfather' },
    { id: 17, filmName: 'Властелин колец', link: '/lord-of-the-rings' },
    { id: 18, filmName: 'Сумерки', link: '/twilight' },
    { id: 19, filmName: 'Джокер', link: '/joker' },
    { id: 20, filmName: 'Чудо-женщина', link: '/wonder-woman' },
];

const newReleases = [
    { id: 21, filmName: 'Дюна', link: '/dune' },
    { id: 22, filmName: 'Вечные', link: '/eternals' },
    { id: 23, filmName: 'Человек-паук: Нет пути домой', link: '/spider-man' },
    { id: 24, filmName: 'Черная вдова', link: '/black-widow' },
    { id: 25, filmName: 'Шан-Чи', link: '/shang-chi' },
    { id: 26, filmName: 'Не время умирать', link: '/no-time-to-die' },
    { id: 27, filmName: 'Достать ножи 2', link: '/knives-out-2' },
    { id: 28, filmName: 'Бэтмен', link: '/the-batman' },
    { id: 29, filmName: 'Морбиус', link: '/morbius' },
    { id: 30, filmName: 'Веном 2', link: '/venom-2' },
];

const HomePage: React.FC = () => {
    return (
        <div className={style.container}>
            <HomepageFilms
                heading="Наши рекомендации"
                films={recommendedFilms}
            />
            <HomepageFilms heading="В тренде" films={trendingFilms} />
            <HomepageFilms heading="Рекомендация для вас" films={newReleases} />
            <HomepageFilms heading="Новые релизы" films={newReleases} />
        </div>
    );
};

export default HomePage;
