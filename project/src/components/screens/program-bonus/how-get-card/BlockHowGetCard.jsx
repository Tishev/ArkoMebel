import React from 'react';
import styles from './BlockHowGetCard.module.scss';
import Span from '../../../UI/span/Span';
import HowGetCardItem from '../how-get-card-item/HowGetCardItem';
import vk from '../../../../assets/img/programPriority/vk.svg';
import HowGetCardItemMini from '../how-get-card-item/HowGetCardItemMini';
import phone from '../../../../assets/img/programPriority/phoneCalling.svg';
import letter from '../../../../assets/img/programPriority/letter.svg';
import messangers from '../../../../assets/img/programPriority/messangers.svg';
const BlockHowGetCard = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.content}>
                    <Span />
                    <h1 className={styles.title}>Как получить виртуальную карту</h1>
                    <div className={styles.items}>
                        <HowGetCardItem
                            text={
                                'Скачайте приложение serviopump mobile в AppStore или Google play.'
                            }
                            count={'01'}
                        />
                        <HowGetCardItem
                            text={
                                'Пройдите полную регистрацию: введите номер телефона, придумайте пароль для входа в приложение, ФИО, дату рождения.'
                            }
                            count={'02'}
                        />
                        <HowGetCardItem
                            text={`Найдите и выберите в списке  сеть НЕФТЕКОМ.`}
                            count={'03'}
                        />
                        <HowGetCardItem
                            text={
                                'Нажмите Регистрация в сети АЗС, далее введите специальный код из SMS.'
                            }
                            count={'04'}
                        />
                        <HowGetCardItem
                            text={
                                'Во вкладке "ПОКУПКИ" будет виден ваш бонусный баланс и все операции по карте.'
                            }
                            count={'05'}
                        />
                        <HowGetCardItem
                            text={
                                'Во вкладке "КАРТЫ" будет отображаться QR-код, который необходимо предъявлять на кассе АЗС для начисления и списания бонусов.'
                            }
                            count={'06'}
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.textItem}>
                            <p className={styles.text}>
                                Бонусы можно потратить на следующий день. Более подробно с правилами
                                участия в Программе лояльности физических лиц – клиентов сети АЗС
                                ООО «Нефтеком» можно ознакомиться <span>здесь</span>.
                            </p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>Информация для справок:</h3>
                            <div>
                                <HowGetCardItemMini
                                    img={phone}
                                    name={'Телефон:'}
                                    value={'8 (391) 286-43-90'}
                                />
                                <HowGetCardItemMini
                                    img={messangers}
                                    name={'Телефон:'}
                                    value={'8 (391) 286-43-90'}
                                />
                                <HowGetCardItemMini
                                    img={letter}
                                    name={'Телефон:'}
                                    value={'8 (391) 286-43-90'}
                                />
                            </div>
                            <button>
                                <img src={vk} alt="vk" />
                                Мы ВКонтакте
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockHowGetCard;
