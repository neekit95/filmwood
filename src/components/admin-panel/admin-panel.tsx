import React, { useCallback, useState } from 'react';
import { AppDispatch, RootState } from '../../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/slices/auth-slice';
import Switch from '@mui/material/Switch';
import style from './admin-panel.module.scss';

const AdminPanel: React.FC = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const isUserAuth = useSelector((state: RootState) => state.auth.isUserAuth);

    const handleAuth = useCallback((): void => {
        if (isUserAuth) {
            dispatch(logout());
        } else {
            dispatch(login());
        }
    }, [dispatch, isUserAuth]);

    const onToggleAuth = useCallback(() => {
        handleAuth();
    }, [handleAuth]);

    const togglePanelOpen = (): void => {
        setIsPanelOpen(!isPanelOpen);
    };
    const handleOptionClick = (event: React.MouseEvent): void => {
        event.stopPropagation();
        onToggleAuth();
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
                        onChange={onToggleAuth}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
