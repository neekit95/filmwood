import React, { useCallback, useState } from 'react';
import { AppDispatch } from '@redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@redux/slices/auth-slice';
import Switch from '@mui/material/Switch';
import style from './admin-panel.module.scss';
import { MouseEvent } from 'react';
import { isUserAuthSelector } from '@redux/selectors/selectors';

const AdminPanel: React.FC = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const isUserAuth = useSelector(isUserAuthSelector);

    const handleAuth = useCallback((): void => {
        if (isUserAuth) {
            dispatch(logout());
        } else {
            dispatch(login());
        }
    }, [dispatch, isUserAuth]);

    const togglePanelOpen = (): void => {
        setIsPanelOpen(!isPanelOpen);
    };

    const handleOptionClick = (e: MouseEvent): void => {
        e.stopPropagation();
        handleAuth();
    };

    return (
        <div className={style.container} onClick={togglePanelOpen}>
            {isPanelOpen && (
                <div className={style.option} onClick={handleOptionClick}>
                    <p>
                        Пользователь{' '}
                        {isUserAuth ? 'авторизован' : 'не авторизован'}
                    </p>
                    <Switch
                        checked={isUserAuth}
                        onChange={handleAuth}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
