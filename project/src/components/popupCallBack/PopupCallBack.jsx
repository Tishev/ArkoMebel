import React, { useState } from 'react';
import Title from '../UI/title/Title';
import { CloseIcon } from '@chakra-ui/icons';
import { Checkbox } from '@chakra-ui/react';

const PopupCallBack = () => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [numberInputValue, setNumberInputValue] = useState('');

    const handleChangeInputName = (e) => {
        setNameInputValue(e.target.value);
    };
    const handleChangeInputNumber = (e) => {
        setNumberInputValue(e.target.value);
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!isChecked) {
            return;
        }
        const dataForm = { nameInputValue, numberInputValue };
        console.log('Отправка формы:', dataForm);
        setNameInputValue('');
        setNumberInputValue('');
        setIsChecked(false);
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-60 justify-center">
            <div className="bg-white w-[702px] relative opacity-100 mx-auto py-12 px-10 z-100 flex flex-col items-center rounded-2xl">
                <CloseIcon cursor={'pointer'} position={'absolute'} top={'25px'} right={'25px'} />
                <p className="font-normal text-xl leading-[36.82px]">Для того, чтобы</p>
                <h1 className="font-semibold text-3xl whitespace-nowrap leading-[43.88px]">
                    ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
                </h1>
                <p className="font-normal text-xl leading-[36.82px]">Заполните форму ниже:</p>
                <form onSubmit={handleSubmitForm} className="text-center">
                    <input
                        required={true}
                        value={nameInputValue}
                        onChange={handleChangeInputName}
                        type="text"
                        placeholder="Ваше имя"
                        className="w-[464px] focus:text-black placeholder-shown:text-black text-xl font-normal outline-none mt-4 text-[#B6B6B6] text-center rounded-2xl border border-[#E4E4E4] mb-[15px] py-6 px-16"
                    />
                    <input
                        required={true}
                        value={numberInputValue}
                        onChange={handleChangeInputNumber}
                        type="number"
                        placeholder="Номер телефона"
                        className="w-[464px] text-xl focus:text-black placeholder-shown:text-black  font-normal  outline-none text-[#B6B6B6] text-center rounded-2xl border border-[#E4E4E4] mb-[15px] py-6 px-16"
                    />
                    <button
                        type="submit"
                        className="w-[464px] py-6 text-center font-semibold text-xl rounded-[16px] bg-blue text-white"
                    >
                        Отправить
                    </button>
                </form>
                <label className="flex items-center w-[464px] gap-5 mt-4">
                    <input
                        required={true}
                        className="w-[45px] h-[45px]"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <p className="font-normal text-sm">
                        Даю согласие на обработку персональных данных, соглашаюсь с политикой
                        конфиденциальности
                    </p>
                </label>
            </div>
        </div>
    );
};

export default PopupCallBack;
