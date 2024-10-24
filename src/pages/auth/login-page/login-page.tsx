import style from '@pages/auth/auth.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '@redux/slices/auth-slice';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import {
    setUserEmail,
    setUsername,
    setUserPassword,
} from '@redux/slices/user-slice';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    type Form = {
        email: string | undefined;
        password: string | undefined;
    };

    const [form, setForm] = useState<Form>({
        email: undefined,
        password: undefined,
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

        if (form.email && form.password) {
            try {
                const auth = getAuth();

                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    form.email,
                    form.password
                );

                const user = userCredential.user;

                dispatch(setUsername(user.displayName || ''));
                dispatch(setUserEmail(form.email));
                dispatch(setUserPassword(form.password));
                dispatch(login());

                navigate('/');
            } catch (error: any) {
                console.error('Ошибка при входе:', error);

                // Обработка ошибок Firebase
                switch (error.code) {
                    case 'auth/user-not-found':
                        setError('Пользователь с таким email не найден.');
                        break;
                    case 'auth/wrong-password':
                        setError('Неверный пароль.');
                        break;
                    case 'auth/invalid-email':
                        setError('Некорректный email.');
                        break;
                    default:
                        setError('Ошибка при входе. Попробуйте еще раз.');
                }

                setIsModalOpen(true);
            }
        } else {
            setError('Пожалуйста, заполните все поля');
            setIsModalOpen(true);
        }
    };

    return (
        <div className={style.container}>
            <h3 className={style.h3}>Вход</h3>
            <form className={style.form} onSubmit={handleSubmit}>
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

                <button className={style.formButton} type="submit">
                    Войти
                </button>

                <div className={style.regSign}>
                    <p className={style.haveAcc}>Еще нет аккаунта?</p>
                    <Link to="/auth/register">
                        <div className={style.regSignButton}>
                            Зарегистрироваться
                        </div>
                    </Link>
                </div>
                {isModalOpen && <div className={style.modal}>{error}</div>}
            </form>
        </div>
    );
};

export default LoginPage;
