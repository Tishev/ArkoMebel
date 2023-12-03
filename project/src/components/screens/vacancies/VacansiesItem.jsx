import React from 'react';
import Circle from '../../UI/circle/Circle';
import letter from '../../../assets/img/programPriority/letter.svg';
const VacansiesItem = ({
    img,
    position,
    salary,
    responsibilities,
    requirements,
    workingConditions,
}) => {
    return (
        <div className="flex gap-[15px] mb-[30px]">
            <img className="h-full" src={img} alt="img-vacansy" />
            <div className="flex flex-col">
                <h2 className=" font-bold text-black text-2xl whitespace-nowrap">
                    {position} {salary}
                </h2>
                <h3 className="mb-[10px] mt-[10px] font-semibold text-black text-xl">
                    Обязанности:
                </h3>
                <ul className="flex flex-col gap-[10px]">
                    {responsibilities.map((respItem) => (
                        <li className="flex items-center font-normal text-black text-lg">
                            <Circle />
                            {respItem}
                        </li>
                    ))}
                </ul>

                <h3 className="mb-[10px] mt-[10px] font-semibold text-black text-xl">
                    Требования:
                </h3>
                <ul className="flex flex-col gap-[10px]">
                    {requirements.map((reqrItem) => (
                        <li className="flex items-center font-normal text-black text-lg">
                            <Circle />
                            {reqrItem}
                        </li>
                    ))}
                </ul>

                <h3 className="mb-[10px] mt-[10px] font-semibold text-black text-xl">Условия:</h3>
                <ul className="flex flex-col gap-[10px]">
                    {workingConditions.map((workItem) => (
                        <li className="flex items-center font-normal text-black text-lg">
                            <Circle />
                            {workItem}
                        </li>
                    ))}
                </ul>
                <div className="bg-gray rounded-[15px] py-[30px] px-[20px] mt-[10px]">
                    <h3 className="font-medium text-lg leading-[1.22] mb-[20px]">
                        Заявки отправлять на почту:
                    </h3>
                    <div className="flex items-center gap-[30px]">
                        <div>
                            <p className="flex mb-1 items-center font-normal text-base leading-[1.22]">
                                {<img className="mr-2" src={letter} />}Почта:
                            </p>
                            <h3 className="font-medium text-base leading-[1.22]">
                                skotnikov.d@kroil24.ru
                            </h3>
                        </div>
                        <div>
                            <p className="font-normal mb-1 text-base leading-[1.22]">Для:</p>
                            <h3 className="font-medium text-base leading-[1.22]">
                                Скотникова Дмитрия Сергеевича
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacansiesItem;
