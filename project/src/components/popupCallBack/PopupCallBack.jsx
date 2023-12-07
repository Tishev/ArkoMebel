import React, { useState } from 'react';
import Title from '../UI/title/Title';
import { CloseIcon } from '@chakra-ui/icons';
import { Checkbox } from '@chakra-ui/react';

const PopupCallBack = ({ activeCallBack, setActiveCallBack }) => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [numberInputValue, setNumberInputValue] = useState('');
    const [confirmation, setConformation] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [confirmationError, setConformationError] = useState('');

    const handleChangeInputName = (e) => {
        setNameInputValue(e.target.value);
    };
    const handleChangeInputNumber = (e) => {
        setNumberInputValue(e.target.value);
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (!isChecked) {
                return;
            }
            const dataForm = { nameInputValue, numberInputValue };
            console.log('Отправка формы:', dataForm);
            setConformation(true);
        } else {
            console.log('Форма содержит ошибки. Пожалуйста, исправьте их.');
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const validateForm = () => {
        let isValid = true;
        if (!nameInputValue.trim()) {
            setNameError('Это поле обязательно для заполнения');
            isValid = false;
        } else {
            setNameError('');
        }
        if (!numberInputValue.trim()) {
            setNumberError('Это поле обязательно для заполнения');
            isValid = false;
        } else {
            setNumberError('');
        }
        if (!isChecked) {
            setConformationError(
                'Необходимо подтвердить согласие на обработку персональных данных.',
            );
        } else {
            setConformationError('');
        }
        console.log(nameInputValue);

        return isValid;
    };
    return (
        <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-60 justify-center">
            <div className="bg-white w-[702px] relative opacity-100 mx-auto py-12 px-10 z-100 flex flex-col items-center rounded-2xl">
                {confirmation ? (
                    <div className="w-full flex justify-center items-center">
                        <CloseIcon
                            onClick={() => setActiveCallBack(false)}
                            cursor={'pointer'}
                            position={'absolute'}
                            top={'25px'}
                            right={'25px'}
                        />
                        <h2 className="text-center w-full text-4xl">
                            Спасибо за обращение, наш оператор свяжется с вами в ближайшее время!
                        </h2>
                    </div>
                ) : (
                    <>
                        <CloseIcon
                            onClick={() => setActiveCallBack(false)}
                            cursor={'pointer'}
                            position={'absolute'}
                            top={'25px'}
                            right={'25px'}
                        />
                        <p className="font-normal text-xl leading-[36.82px]">Для того, чтобы</p>
                        <h1 className="font-semibold text-3xl whitespace-nowrap leading-[43.88px]">
                            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
                        </h1>
                        <p className="font-normal text-xl leading-[36.82px]">
                            Заполните форму ниже:
                        </p>
                        <form onSubmit={handleSubmitForm} className="text-center">
                            <input
                                value={nameInputValue}
                                onChange={handleChangeInputName}
                                type="text"
                                placeholder="Ваше имя"
                                className="w-[464px] focus:text-black placeholder-shown:text-black text-xl font-normal outline-none mt-4 text-[#B6B6B6] text-center rounded-2xl border border-[#E4E4E4] mb-[15px] py-6 px-16"
                            />
                            <div className="relative">
                                {nameError && (
                                    <p className="absolute text-xs -top-[15px] text-red">
                                        {nameError}
                                    </p>
                                )}
                            </div>
                            <input
                                value={numberInputValue}
                                onChange={handleChangeInputNumber}
                                type="number"
                                placeholder="Номер телефона"
                                className="w-[464px] text-xl focus:text-black placeholder-shown:text-black  font-normal  outline-none text-[#B6B6B6] text-center rounded-2xl border border-[#E4E4E4] mb-[15px] py-6 px-16"
                            />
                            <div className="relative">
                                {numberError && (
                                    <p className="absolute text-xs -top-[15px] text-red">
                                        {numberError}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-[464px] py-6 text-center font-semibold text-xl rounded-[16px] bg-blue text-white"
                            >
                                Отправить
                            </button>
                        </form>
                        <label
                            className={`${
                                confirmationError === ''
                                    ? 'flex items-center w-[464px] gap-5 mt-4'
                                    : 'flex items-center w-[464px] gap-5 mt-4 rounded-md bg-rose-100'
                            } `}
                        >
                            <input
                                required={true}
                                className="w-[45px] h-[45px]"
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <p className="font-normal text-sm">
                                Даю согласие на обработку персональных данных, соглашаюсь с
                                политикой конфиденциальности
                            </p>
                        </label>
                        {confirmationError && (
                            <p className="text-xs -top-[15px] text-red">{confirmationError}</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PopupCallBack;
