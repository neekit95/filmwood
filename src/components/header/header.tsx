import style from './header.module.scss';
import React, { useState } from 'react';
import { MdForest } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header: React.FC = () => {
    const [isDropdwnOpen, setIsDropdwnOpen] = useState(false);

    const toggleDropdown = (): void => {
        setIsDropdwnOpen(!isDropdwnOpen);
    };

    return (
        <div className={style.container}>
            <div className="wrapper">
                <div className={style.header}>
                    <Link to="/">
                        <button className={style.logo}>
                            <MdForest />
                            <h3>FILMWOOD</h3>
                        </button>
                    </Link>

                    <div className={style.search}>
                        <input type="text" placeholder={'Search'} />
                    </div>

                    <button onClick={toggleDropdown} className={style.navbar}>
                        <GiHamburgerMenu />
                    </button>
                    {isDropdwnOpen && (
                        <div className={style.dropdown}>
                            <Link to="/" className={style.dropdownLink}>
                                <button
                                    onClick={toggleDropdown}
                                    className={style.droplink}
                                >
                                    Домой
                                </button>
                            </Link>

                            <Link to="/userpage" className={style.dropdownLink}>
                                <button
                                    onClick={toggleDropdown}
                                    className={style.droplink}
                                >
                                    Мой профиль
                                </button>
                            </Link>

                            <Link to="/settings" className={style.dropdownLink}>
                                <button
                                    onClick={toggleDropdown}
                                    className={style.droplink}
                                >
                                    Настройки
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
