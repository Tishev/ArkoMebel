import React from 'react';
import Span from '../../../UI/span/Span';
import man from '../../../../assets/img/forYurLiz/man.png';
import fabric from '../../../../assets/img/forYurLiz/fabric.png';
const BlockWhosaleSluppy = () => {
    return (
        <div className="relative mt-14">
            <Span />
            <h1 className="font-semibold text-4xl mb-10 leading-[1.22]">
                Оптовая поставка светлых нефтепродуктов
            </h1>
            <div className="flex items-center gap-4">
                <p className="font-normal text-base leading-[1.53]">
                    Мы являемся постоянным участником торгов секции "Нефтепродукты" ЗАО "СПбМТСБ"
                    (Санкт-Петербургской международной товарно-сырьевой биржи), что позволяет
                    осуществлять прямые железнодорожные поставки со всех заводов России: Омского и
                    Ангарского НПЗ, Уфимской группы НПЗ, Сургутского ЗСК и прочих.
                </p>
                <img src={man} alt="man" />
            </div>
            <div className="flex items-center gap-4 mt-10">
                <img src={fabric} alt="fabric" />
                <p className="font-normal text-base leading-[1.53]">
                    Реализация нефтепродуктов в Богучанском районе Красноярского края ведется через
                    нефтебазу "Таёжный" (станция Карабула Красноярской ЖД). <br /> Отпуск происходит
                    как на условиях самовывоза, так и с доставкой автоцистернами до ваших складов в
                    пределах Богучанского, Кежемского, Эвенкийского районов.
                    <br /> На нефтебазе также можно приобрести следующие масла и спецжидкости в
                    бочках по 216 литров: М10Г2 (М8Г2), М10Г2к (М8Г2к), М10ДМ (М8ДМ), ТСП-15К, ВМГЗ,
                    Тосол А-40Д, М8В, ГК.
                </p>
            </div>
        </div>
    );
};

export default BlockWhosaleSluppy;
