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
import {
    createUserWithEmailAndPassword,
    updateProfile,
    getAuth,
} from 'firebase/auth';

type Form = {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
};

const RegistrationPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

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

        if (form.password !== form.confirmPassword) {
            setErrorMessage('Пароли не совпадают');
            setIsModalOpen(true);
            return;
        }

        if (form.username && form.password && form.email) {
            try {
                const auth = getAuth();

                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    form.email,
                    form.password
                );

                await updateProfile(userCredential.user, {
                    displayName: form.username,
                });

                dispatch(setUsername(form.username));
                dispatch(setUserEmail(form.email));
                dispatch(setUserPassword(form.password));
                dispatch(login());
                navigate('/');
            } catch (error: any) {
                console.error('Ошибка при регистрации:', error);

                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setErrorMessage('Этот email уже используется.');
                        break;
                    case 'auth/invalid-email':
                        setErrorMessage('Некорректный email.');
                        break;
                    case 'auth/weak-password':
                        setErrorMessage(
                            'Пароль должен содержать не менее 6 символов.'
                        );
                        break;
                    default:
                        setErrorMessage('Произошла ошибка регистрации.');
                }

                setIsModalOpen(true);
            }
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

                {isModalOpen && (
                    <div className={style.modal}>{errorMessage}</div>
                )}
            </form>
        </div>
    );
};

export default RegistrationPage;
