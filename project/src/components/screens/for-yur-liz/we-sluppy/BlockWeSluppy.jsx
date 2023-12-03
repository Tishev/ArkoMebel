import React, { useState } from 'react';
import Span from '../../../UI/span/Span';
import { fuelData } from '../../../../data/forYurLiz';
import WeSluppyItem from '../we-sluppy-item/WeSluppyItem';
const BlockWeSluppy = () => {
    const [dataItem, setDataItem] = useState(fuelData);
    return (
        <div className="relative mt-20 mb-10">
            <Span />
            <h1 className="font-semibold text-4xl leading-[1.22]">Мы поставляем</h1>
            <div className="flex items-center justify-between mt-[40px] gap-[15px]">
                {dataItem.map((item) => (
                    <WeSluppyItem key={item.id} img={item.img} name={item.name} />
                ))}
            </div>
            <p className="text-center mt-[30px] font-normal text-xl">
                Поставка осуществляется как автоцистернами с заводов Красноярского края с доставкой
                до вашего склада,
                <br /> так и по железной дороге с заводов по всей России.
            </p>
        </div>
    );
};

export default BlockWeSluppy;
