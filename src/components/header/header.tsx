import style from './header.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import { MdForest } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { PiFinnTheHumanFill } from 'react-icons/pi';
import { IoSettingsSharp } from 'react-icons/io5';

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = (): void => {
        console.log('Toggle dropdown');
        setIsDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Проверяем, что клик произошел не на кнопке и не в области меню
            if (
                dropdownRef.current &&
                buttonRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

                    <button
                        ref={buttonRef}
                        onClick={toggleDropdown}
                        className={style.navbar}
                    >
                        <GiHamburgerMenu />
                    </button>
                    {isDropdownOpen && (
                        <div className={style.dropdown} ref={dropdownRef}>
                            <Link to="/" className={style.dropdownLink}>
                                <button
                                    onClick={toggleDropdown}
                                    className={style.dropbutton}
                                >
                                    <IoMdHome />

                                    <p>Домой</p>
                                </button>
                            </Link>

                            <Link to="/userpage" className={style.dropdownLink}>
                                <button
                                    onClick={toggleDropdown}
                                    className={style.dropbutton}
                                >
                                    <PiFinnTheHumanFill />
                                    <p>Мой профиль</p>
                                </button>
                            </Link>

                            <Link to="/settings" className={style.dropdownLink}>
                                <button
                                    onClick={toggleDropdown}
                                    className={style.dropbutton}
                                >
                                    <IoSettingsSharp />
                                    <p>Настройки</p>
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
