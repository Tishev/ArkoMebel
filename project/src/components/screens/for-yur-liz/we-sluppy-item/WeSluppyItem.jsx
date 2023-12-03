import React from 'react';
import Btn from '../../../UI/btn/Btn';

const WeSluppyItem = ({ img, name }) => {
    return (
        <div className="flex w-full flex-col bg-gray p-[15px] pb-[35px] rounded-[15px] items-center">
            <div className="w-full flex items-center justify-center bg-white rounded-[15px] py-4">
                <img src={img} alt={name} />
            </div>
            <h2 className="my-5 text-center font-semibold text-2xl">{name}</h2>
            <Btn text={'Узнать стоимость'} />
        </div>
    );
};

export default WeSluppyItem;
