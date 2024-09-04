import style from './registration-page.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    setUserEmail,
    setUserPassword,
    setUsername,
} from '../../redux/slices/userSlice';
import { login } from '../../redux/slices/authSlice';

const RegistrationPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    interface Form {
        username: string;
        password: string;
        email: string;
        confirmPassword: string;
    }
    const [form, setForm] = useState<Form>({
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
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
            return false;
        };

        const userExists = await checkUserExist();

        if (!userExists) {
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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />

                <button type="submit">Зарегистрироваться</button>
            </form>
            {isModalOpen && (
                <div className={style.modal}>Пользователь уже существует</div>
            )}
        </div>
    );
};

export default RegistrationPage;
