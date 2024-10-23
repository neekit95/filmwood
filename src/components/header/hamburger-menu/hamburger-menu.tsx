import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { PiFinnTheHumanFill } from 'react-icons/pi';
import { IoEnter, IoSettingsSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logout } from '@redux/slices/auth-slice';
import LinkButton from '@components/link-button/link-button';
import style from './hamburger-menu.module.scss';

interface HamburgerMenuProps {
    isUserAuth: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isUserAuth }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dispatch = useDispatch();

    const toggleDropdown = (): void => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleLogout = (): void => {
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
        <div>
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className={style.navbar}
            >
                <GiHamburgerMenu />
            </button>

            {isDropdownOpen && (
                <div className={style.dropdown} ref={dropdownRef}>
                    {isUserAuth ? (
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
                                onClick={handleLogout}
                                icon={<IoEnter />}
                                nameP="Выход"
                            />
                        </div>
                    ) : (
                        <div>
                            <LinkButton
                                to="auth/login"
                                onClick={toggleDropdown}
                                icon={<IoEnter />}
                                nameP="Войти"
                            />
                            <LinkButton
                                to="auth/register"
                                onClick={toggleDropdown}
                                icon={<IoEnter />}
                                nameP="Зарегистрироваться"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
