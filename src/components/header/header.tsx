import style from './header.module.scss';
import React from 'react';
import { MdForest } from 'react-icons/md';
import { useSelector } from 'react-redux';
import LinkButton from '@components/link-button/link-button';
import { isUserAuthSelector } from '@redux/selectors/selectors';
import Wrapper from '@components/wrapper/wrapper';
import HamburgerMenu from './hamburger-menu/hamburger-menu';
import Search from '@components/header/search/search';

const Header: React.FC = () => {
    const isUserAuth = useSelector(isUserAuthSelector);

    return (
        <div className={style.container}>
            <Wrapper>
                <div className={style.header}>
                    <LinkButton to="/" icon={<MdForest />} nameH3="FILMWOOD" />

                    {isUserAuth && <Search />}

                    <HamburgerMenu isUserAuth={isUserAuth} />
                </div>
            </Wrapper>
        </div>
    );
};

export default Header;
