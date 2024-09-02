import style from './homepage.module.scss';
import React from 'react';
import filmwoodImage from '@/assets/images/filmwood.png';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.hero}>
                <img
                    src={filmwoodImage}
                    alt="filmwood image"
                    className={style.heroImage}
                />

                <div className={style.heroContent}>
                    <h1>Добро пожаловать в FILMWOOD</h1>
                    <p>
                        Откройте для себя мир кино, создавайте списки избранных
                        фильмов и делитесь мнением с другими пользователями.
                        Присоединяйтесь к нашему сообществу и погружайтесь в
                        захватывающий мир кинематографа!
                    </p>
                    <div className={style.heroButtons}>
                        <Link to="/auth/login">
                            <button className={style.heroButton}>Войти</button>
                        </Link>
                        <Link to="/auth/register">
                            <button className={style.heroButton}>
                                Загегистрироваться
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/*<div className="wrapper">wrapper</div>*/}
        </div>
    );
};

export default Homepage;
