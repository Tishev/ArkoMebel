import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../UI/title/Title';
import { CloseIcon } from '@chakra-ui/icons';
import { Checkbox } from '@chakra-ui/react';
import { paths } from '../../paths';
const PopupPersonalCabinet = ({ setActiveAuth }) => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isAuth, setIsAuth] = useState(false);

    const navigate = useNavigate();

    const handleClickScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };
    const handleChangeInputEmail = (e) => {
        setEmailInputValue(e.target.value);
    };
    const handleChangeInputPassword = (e) => {
        setPasswordInputValue(e.target.value);
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const dataForm = { emailInputValue, passwordInputValue };
            console.log('Отправка формы:', dataForm);
            setActiveAuth(false);
            navigate(paths.personalCabinet);
            handleClickScroll();
        } else {
            console.log('Форма содержит ошибки. Пожалуйста, исправьте их.');
        }
    };

    const validateForm = () => {
        let isValid = true;
        if (!emailInputValue.trim()) {
            setEmailError('Это поле обязательно для заполнения');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (!passwordInputValue.trim()) {
            setPasswordError('Это поле обязательно для заполнения');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };
    return (
        <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-60 justify-center">
            <div className="bg-white w-[702px] relative opacity-100 mx-auto py-12 px-10 z-100 flex flex-col items-center rounded-2xl">
                <>
                    <CloseIcon
                        onClick={() => setActiveAuth(false)}
                        cursor={'pointer'}
                        position={'absolute'}
                        top={'25px'}
                        right={'25px'}
                    />
                    <h1 className="font-semibold text-3xl whitespace-nowrap leading-[43.88px]">
                        {isAuth ? 'Регистрация' : 'Вход'}
                    </h1>
                    <form onSubmit={handleSubmitForm} className="text-center">
                        <input
                            value={emailInputValue}
                            onChange={handleChangeInputEmail}
                            type="text"
                            placeholder="Ваш EMAIL"
                            className="w-[464px] focus:text-black placeholder-shown:text-black text-xl font-normal outline-none mt-4 text-[#B6B6B6] text-center rounded-2xl border border-[#E4E4E4] mb-[15px] py-6 px-16"
                        />
                        <div className="relative">
                            {emailError && (
                                <p className="absolute text-xs -top-[15px] text-red">
                                    {emailError}
                                </p>
                            )}
                        </div>
                        <input
                            value={passwordInputValue}
                            onChange={handleChangeInputPassword}
                            type="password"
                            placeholder="Ваш пароль"
                            className="w-[464px] text-xl focus:text-black placeholder-shown:text-black  font-normal  outline-none text-[#B6B6B6] text-center rounded-2xl border border-[#E4E4E4] mb-[15px] py-6 px-16"
                        />
                        <div className="relative">
                            {passwordError && (
                                <p className="absolute text-xs -top-[15px] text-red">
                                    {passwordError}
                                </p>
                            )}
                        </div>
                        {isAuth ? (
                            <p className="font-normal text-xl leading-[36.82px]">
                                Уже зарегистрированы?{' '}
                                <span
                                    onClick={() => setIsAuth(!isAuth)}
                                    className="text-blue cursor-pointer"
                                >
                                    Войти
                                </span>
                            </p>
                        ) : (
                            <p className="font-normal text-xl leading-[36.82px]">
                                Не зарегистрированы?{' '}
                                <span
                                    onClick={() => setIsAuth(!isAuth)}
                                    className="text-blue cursor-pointer"
                                >
                                    Регистрация
                                </span>
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-[464px] py-6 text-center font-semibold text-xl rounded-[16px] bg-blue text-white"
                        >
                            Отправить
                        </button>
                    </form>
                </>
            </div>
        </div>
    );
};

export default PopupPersonalCabinet;
