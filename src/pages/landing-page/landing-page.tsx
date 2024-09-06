import style from './landing-page.module.scss';
import React from 'react';
import filmwoodImage from '@/assets/images/filmwood.png';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className={style.container}>
            <section className={style.hero}>
                <img
                    src={filmwoodImage}
                    alt="filmwood image"
                    className={style.heroImage}
                />

                <div className={style.heroContent}>
                    <h1>
                        Откройте мир кино с
                        <br />
                        <span>FILMWOOD</span>
                    </h1>
                    <p>
                        Пишите рецензии, создавайте списки избранного и делитесь
                        мнением с другими киноманами. Присоединяйтесь к нашему
                        сообществу и погружайтесь в увлекательный мир
                        кинематографа!
                    </p>
                    <div className={style.heroButtons}>
                        <Link to="/auth/login">
                            <button className={style.heroButton}>Войти</button>
                        </Link>
                        <Link to="/auth/register">
                            <button className={style.heroButton}>
                                Зарегистрироваться
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="wrapper">
                <div className={style.secondSection}>
                    <div className={style.options}>
                        <div className={style.option}>
                            <h2>Получайте персональные рекомендации</h2>
                            <p>
                                Наш алгоритм подберет для вас фильмы и сериалы
                                на основе ваших предпочтений.
                            </p>
                        </div>
                        <div className={style.option}>
                            <h2>Не пропускайте выход любимых сериалов</h2>
                            <p>
                                Отметьте любимые сериалы и ждите выхода новых
                                сезонов. Мы пришлем уведомление, когда новые
                                серии будут доступны.
                            </p>
                        </div>
                        <div className={style.option}>
                            <h2>Создавайте и делитесь своими списками</h2>
                            <p>
                                Соберите подборки фильмов и сериалов, которые
                                вам нравятся, и делитесь ими с друзьями. Пусть
                                ваш вкус вдохновит других!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
