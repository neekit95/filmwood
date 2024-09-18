import style from '@pages/auth/auth.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../redux/slices/auth-slice';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    interface Form {
        email: string;
        password: string;
    }

    const [form, setForm] = useState<Form>({
        email: '',
        password: '',
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
            <h3>Вход</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Войти</button>
                <div className={style.regSign}>
                    <p>Еще нет аккаунта?</p>
                    <Link to="/auth/register">
                        <button className={style.regSignButton}>
                            Зарегистрироваться
                        </button>
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
