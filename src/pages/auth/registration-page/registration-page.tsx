import style from '../auth.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    setUserEmail,
    setUserPassword,
    setUsername,
} from '@redux/slices/user-slice';
import { login } from '@redux/slices/auth-slice';

type Form = {
    username: string | undefined;
    password: string | undefined;
    email: string | undefined;
    confirmPassword: string | undefined;
};

const RegistrationPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [form, setForm] = useState<Form>({
        username: undefined,
        password: undefined,
        email: undefined,
        confirmPassword: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        const checkUserExist = async (): Promise<boolean> => {
            // TODO: дописать логику  проверки на существование пользователя
            return false;
        };

        const userExists = await checkUserExist();

        if (!userExists && form.username && form.password && form.email) {
            dispatch(setUsername(form.username));
            dispatch(setUserEmail(form.email));
            dispatch(setUserPassword(form.password));
            dispatch(login());
            navigate('/');
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <div className={style.container}>
            <h3>Регистрация</h3>
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    className={style.formInput}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />

                <input
                    className={style.formInput}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className={style.formInput}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <input
                    className={style.formInput}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button className={style.formButton} type="submit">
                    Зарегистрироваться
                </button>

                <div className={style.regSign}>
                    <p className={style.haveAcc}>Уже есть аккаунт?</p>
                    <Link to="/auth/login">
                        <div className={style.regSignButton}>Войти</div>
                    </Link>
                </div>
            </form>

            {isModalOpen && (
                <div className={style.modal}>Пользователь уже существует</div>
            )}
        </div>
    );
};

export default RegistrationPage;
