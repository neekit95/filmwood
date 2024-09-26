import style from './header.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import { MdForest } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { PiFinnTheHumanFill } from 'react-icons/pi';
import { IoEnter, IoSettingsSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { IoEnterOutline } from 'react-icons/io5';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { logout } from '@redux/slices/auth-slice';
import LinkButton from '@components/link-button/link-button';
import { isUserAuthSelector } from '@redux/selectors/selectors';

const Header: React.FC = () => {
    const isUserAuth = useSelector(isUserAuthSelector);
    const dispatch = useDispatch();

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = (): void => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const logoutProfile = (): void => {
        dispatch(logout());
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (
                dropdownRef.current &&
                buttonRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return (): void => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={style.container}>
            <div className="wrapper">
                <div className={style.header}>
                    <LinkButton to="/" icon={<MdForest />} nameH3="FILMWOOD" />

                    {isUserAuth && (
                        <div className={style.search}>
                            <input type="text" placeholder={'Search'} />
                        </div>
                    )}

                    <button
                        ref={buttonRef}
                        onClick={toggleDropdown}
                        className={style.navbar}
                    >
                        <GiHamburgerMenu />
                    </button>

                    {isDropdownOpen && (
                        <div className={style.dropdown} ref={dropdownRef}>
                            {isUserAuth && (
                                <div>
                                    <LinkButton
                                        to="/"
                                        onClick={toggleDropdown}
                                        icon={<IoMdHome />}
                                        nameP="Домой"
                                    />

                                    <LinkButton
                                        to="/userpage"
                                        onClick={toggleDropdown}
                                        icon={<PiFinnTheHumanFill />}
                                        nameP="Мой профиль"
                                    />

                                    <LinkButton
                                        to="/settings"
                                        onClick={toggleDropdown}
                                        icon={<IoSettingsSharp />}
                                        nameP="Настройки"
                                    />

                                    <LinkButton
                                        to="/"
                                        onClick={logoutProfile}
                                        icon={<IoEnter />}
                                        nameP="Выход"
                                    />
                                </div>
                            )}
                            {!isUserAuth && (
                                <div>
                                    <LinkButton
                                        to="auth/login"
                                        onClick={toggleDropdown}
                                        icon={<IoEnterOutline />}
                                        nameP="Войти"
                                    />

                                    <LinkButton
                                        to="auth/register"
                                        onClick={toggleDropdown}
                                        icon={<IoDocumentTextOutline />}
                                        nameP="Зарегистрироваться"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
