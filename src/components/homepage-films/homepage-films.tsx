import style from './homepage-films.module.scss';
import React, { useRef, useState, useEffect } from 'react';
import Film from './film/film';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type FilmData = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
};
type Props = {
    heading?: string;
    films: FilmData[];
};

const HomepageFilms: React.FC<Props> = ({ heading, films }) => {
    const filmSectionRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const navigate = useNavigate();

    const handlePrevClick = (): void => {
        if (filmSectionRef.current) {
            filmSectionRef.current.scrollBy({
                left: -window.innerWidth / 2,
                behavior: 'smooth',
            });
        }
    };

    const handleNextClick = (): void => {
        if (filmSectionRef.current) {
            filmSectionRef.current.scrollBy({
                left: window.innerWidth / 2,
                behavior: 'smooth',
            });
        }
    };

    const updateScrollButtons = (): void => {
        if (filmSectionRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                filmSectionRef.current;
            setCanScrollPrev(scrollLeft > 0);
            setCanScrollNext(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        updateScrollButtons();
        const ref = filmSectionRef.current;
        if (ref) {
            ref.addEventListener('scroll', updateScrollButtons);
            window.addEventListener('resize', updateScrollButtons);
            return (): void => {
                ref.removeEventListener('scroll', updateScrollButtons);
                window.removeEventListener('resize', updateScrollButtons);
            };
        }
    }, [films]);

    const handleShowFilmset = (): void => {
        navigate('/filmset/1');
    };

    return (
        <div className={style.container}>
            <div className={style.heading}>
                {heading && <h2>{heading}</h2>}
                <button
                    className={style.filmSetButton}
                    onClick={handleShowFilmset}
                >
                    Показать подборку
                </button>
            </div>
            <div className={style.filmSectionWrapper}>
                <div className={style.navigation}>
                    <button
                        className={`${style.moveButton} ${style.prevButton}`}
                        onClick={handlePrevClick}
                        style={{ display: canScrollPrev ? 'flex' : 'none' }}
                    >
                        <MdNavigateBefore />
                    </button>
                    <button
                        className={`${style.moveButton} ${style.nextButton}`}
                        onClick={handleNextClick}
                        style={{ display: canScrollNext ? 'flex' : 'none' }}
                    >
                        <MdNavigateNext />
                    </button>
                </div>
                <div ref={filmSectionRef} className={style.filmSection}>
                    {films.map((film) => (
                        <div key={film.id} className={style.film}>
                            <Film
                                id={film.id}
                                title={film.title}
                                poster_path={film.poster_path}
                                vote_average={film.vote_average}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomepageFilms;
