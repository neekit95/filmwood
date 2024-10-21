import style from '@pages/auth/auth.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '@redux/slices/auth-slice';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

        const checkValid = async (): Promise<boolean> => {
            return true;
            // TODO: Дописать логику обработки формы
        };

        const isValid = await checkValid();

        if (isValid) {
            dispatch(login());
            navigate('/');
        } else {
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
            </form>

            {isModalOpen && (
                <div className={style.modal}>Неверный email или пароль</div>
            )}
        </div>
    );
};

export default LoginPage;
