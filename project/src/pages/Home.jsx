import React, { useState } from 'react';
import { infoItems } from '../data/infoItems';
import { feedbackItems } from '../data/feedbackItems';
import Span from '../components/UI/span/Span';

import InfoItems from '../components/UI/infoItem/InfoItems';
import bonusCard from '../assets/img/Home/bonus-program.png';
import phone from '../assets/img/Home/phone.png';
import googlePlay from '../assets/img/Home/GooglePlay.svg';
import appStore from '../assets/img/Home/AppStore.svg';
import map from '../assets/img/Home/map/map.png';
import iconMap from '../assets/img/Home/map/icon.svg';
import play from '../assets/img/Home/play.svg';
import preview from '../assets/img/Home/preview.png';
import miniHome from '../assets/img/Home/miniHome.png';
import FeedbackItems from '../components/UI/feedbackItems/FeedbackItems';

const Home = () => {
    const [dataFeedbackItems, setDataFeedbackItems] = useState(feedbackItems);
    const [dataInfoItems, setDataInfoItems] = useState(infoItems);
    console.log(dataInfoItems);
    return (
        <section className="mt-20">
            <div className="container">
                <h1 className="mb-10 font-semibold text-6xl leading-9">Сеть АЗС НЕФТЕКОМ</h1>
                <div className="mb-40 flex items-center  gap-4">
                    {dataInfoItems.map((item) => (
                        <InfoItems
                            key={item.id}
                            title={item.title}
                            icon={item.img}
                            text={item.text}
                        />
                    ))}
                </div>
                <section className="flex justify-between ">
                    <div className=" flex flex-col items-start">
                        <h2 className="relative font-semibold text-4xl leading-10 mt-12 mb-5">
                            Бонусная программа
                            <Span />
                        </h2>
                        <p className="mb-10 w-[588px] font-normal text-xl ">
                            Приобретите карту лояльности в сетях АЗС “Нефтеком” или оформите
                            виртуальную карту и получайте
                            <br /> до <b className="font-medium">10% бонусов</b>
                        </p>
                        <button className="text-blue font-normal text-xl  py-[25px] px-20 border border-solid rounded-2xl border-blue">
                            Узнать подробнее
                        </button>
                    </div>
                    <div className="flex items-center w-[702px] h-[398px] py-12 px-28 bg-gray rounded-tl-[64px] rounded-br-[64px] ">
                        <img src={bonusCard} alt="bonus-program" />
                    </div>
                </section>
                <section className="flex justify-between mt-20">
                    <div className="flex relative w-[702px] h-[398px] items-center py-12 px-28 bg-blue rounded-tl-[64px] rounded-br-[64px] ">
                        <img className="absolute bottom-0 left-[183px]" src={phone} alt="phone" />
                    </div>
                    <div className=" flex flex-col items-start">
                        <h2 className="relative font-semibold text-4xl leading-10 mt-12 mb-5">
                            Скачайте наше приложение
                            <Span />
                        </h2>
                        <p className="mb-10 w-[588px] font-normal text-xl ">
                            Установите на свой смартфон мобильное приложение «АЗС НЕФТЕКОМ»
                        </p>
                        <p className="mb-5 w-[588px] font-normal text-xl ">
                            Создайте в приложении виртуальную карту и используйте свой телефон для
                            накопления баллов или оплаты
                        </p>
                        <div className="flex items-center justify-start gap-3">
                            <img src={appStore} alt="appStore" />
                            <img src={googlePlay} alt="googlePlay" />
                        </div>
                    </div>
                </section>
                <section className="flex justify-between mt-[75px] ">
                    <div className=" flex flex-col items-start">
                        <h2 className="relative font-semibold text-4xl leading-10 mt-12 mb-5">
                            АЗС НЕФТЕКОМ на карте
                            <Span />
                        </h2>
                        <p className="mb-10 w-[588px] font-normal text-xl ">
                            Ознакомьтесь со всеми нашими заправочными станциями на карте!
                        </p>
                        <button className="text-blue font-normal text-xl  py-[25px] px-20 border border-solid rounded-2xl border-blue">
                            Посмотреть адреса АЗС
                        </button>
                    </div>
                    <div className="relative flex items-center w-[702px] h-[398px]  rounded-tl-[64px] rounded-br-[64px] ">
                        <img src={map} alt="map" />
                        <img className="absolute left-[123px]" src={iconMap} alt="iconMap" />
                    </div>
                </section>
                <section className="flex flex-col  mt-[110px]">
                    <h1 className="font-semibold text-4xl text-center">Качество во всем</h1>
                    <div className="flex justify-center">
                        <span className="w-7 border border-solid border-blue mt-5 mb-7"></span>
                    </div>
                    <div className="w-full relative">
                        <img src={preview} alt="preview" />
                        <img
                            className="absolute top-0 left-[41%] top-[30%]"
                            src={play}
                            alt="play"
                        />
                    </div>
                    <div className="flex justify-between mt-[30px]">
                        <img src={miniHome} alt="mini-home" />
                        <div className="flex flex-col justify-center items-center w-[700px]">
                            <h2 className="font-semibold text-4xl mb-[25px]">
                                Оставьте отзыв о нас
                            </h2>
                            <div className="flex justify-between items-center gap-4">
                                {dataFeedbackItems.map((item) => (
                                    <FeedbackItems
                                        key={item.id}
                                        img={item.img}
                                        name={item.name}
                                        rating={item.rating}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Home;
