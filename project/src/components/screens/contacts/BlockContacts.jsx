import React from 'react';
import Span from '../../UI/span/Span';
import Title from '../../UI/title/Title';
import contactsPng from '../../../assets/img/contacts/contacts.png';
import office from '../../../assets/img/contacts/office.svg';
import phone from '../../../assets/img/contacts/phone.svg';
import letter from '../../../assets/img/contacts/letter.svg';
import reqvisite from '../../../assets/img/contacts/reqvisite.svg';
const BlockContacts = () => {
    return (
        <div className="relative flex justify-between mb-20  mt-[50px]">
            <div>
                <Span />
                <Title text={'Контакты “Нефтеком”'} />
                <h3 className="font-semibold text-base leading-[1.22] mt-5">Офис:</h3>
                <div className="flex items-center   gap-[15px] mt-[10px]">
                    <img src={office} />
                    <p className="font-medium text-base leading-[1.22]">
                        660021, Россия, Красноярск, пр. Мира, 128 (оф.140)
                    </p>
                </div>
                <h3 className="font-semibold mt-5 text-base leading-[1.22]">Телефон:</h3>
                <div className="flex items-center  gap-[15px] mt-[10px]">
                    <img src={phone} />
                    <div>
                        <p className="font-medium text-base leading-[1.22]">+7 (391) 265-04-48</p>
                        <span className="font-normal text-xs leading-[1.22]">
                            (отдел канцелярии) / Часы работы: с 09:00-18:00
                        </span>
                    </div>
                </div>
                <h3 className="font-semibold mt-5 text-base leading-[1.22]">E-mail:</h3>
                <div className="flex items-start gap-[15px] mt-[10px]">
                    <img src={letter} />
                    <div className="flex flex-col gap-[15px]">
                        <div>
                            <p className="font-medium text-base leading-[1.22]">
                                neftecom-@mail.ru
                            </p>
                            <span className="font-normal text-xs leading-[1.22]">
                                отдел канцелярии
                            </span>
                        </div>
                        <div>
                            <p className="font-medium text-base leading-[1.22]">sale@kroil24.ru</p>
                            <span className="font-normal text-xs leading-[1.22]">
                                Оптовая реализация ГСМ
                            </span>
                        </div>
                        <div>
                            <p className="font-medium text-base leading-[1.22]">
                                promo@neftecom24.ru
                            </p>
                            <span className="font-normal text-xs leading-[1.22]">
                                Отдел маркетинга
                            </span>
                        </div>
                        <div>
                            <p className="font-medium text-base leading-[1.22]">
                                kachestvo@neftecom24.ru
                            </p>
                            <span className="font-normal text-xs leading-[1.22]">
                                Контроль качества
                            </span>
                        </div>
                    </div>
                </div>
                <h3 className="font-semibold mt-5 text-base leading-[1.22]">Реквизиты компании:</h3>
                <div className="flex items-start gap-[15px] mt-[10px]">
                    <img src={reqvisite} />
                    <div className="flex flex-col gap-[15px]">
                        <div>
                            <span className="font-normal text-xs leading-[1.22]">
                                Полное наименование:
                            </span>

                            <p className="font-medium text-base leading-[1.22]">
                                Общество с ограниченной ответственностью «Нефтеком»
                            </p>
                        </div>
                        <div>
                            <span className="font-normal text-xs leading-[1.22]">
                                Основной государственный регистрационный номер (ОГРН)
                            </span>

                            <p className="font-medium text-base leading-[1.22]">1022400669026</p>
                        </div>
                        <div>
                            <span className="font-normal text-xs leading-[1.22]">
                                Идентификационный номер налогоплательщика (ИНН)
                            </span>

                            <p className="font-medium text-base leading-[1.22]">2411011517</p>
                        </div>
                        <div>
                            <span className="font-normal text-xs leading-[1.22]">
                                Код причины постановки на учет (КПП)
                            </span>

                            <p className="font-medium text-base leading-[1.22]">246601001</p>
                        </div>
                        <div>
                            <span className="font-normal text-xs leading-[1.22]">
                                Юридический адрес
                            </span>

                            <p className="font-medium text-base leading-[1.22]">
                                660049, г. Красноярск, ул. Марковского, д. 45, пом. 3
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={contactsPng} alt="place" />
        </div>
    );
};

export default BlockContacts;
