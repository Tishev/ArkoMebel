import React, { useState } from 'react';
import styles from './Footer.module.scss';
import map from '../../assets/img/footer/footerMAP.png';
import { footerNavigationData } from '../../data/footer';
const Footer = () => {
    const [dataNav, setDataNav] = useState(footerNavigationData);
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <h1 className={styles.title}>Навигация по сайту</h1>

                        <ul className={styles.navigation}>
                            {dataNav.map((item) => (
                                <li className={styles.li} key={item.id}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.centerContent}>
                        <h1 className={styles.title}>Наши контакты</h1>
                        <div className={styles.contacts}>
                            <div className={styles.left}>
                                <h2 className={styles.h2}>Офис:</h2>
                                <p className={styles.text}>
                                    660021, Россия, Красноярск,
                                    <br /> пр. Мира, 128 (оф.140)
                                </p>
                                <h2 className={styles.h2other}>Телефон:</h2>
                                <p className={styles.text}>+7 (391) 265-04-48</p>
                                <p className={styles.subtext}>
                                    отдел канцелярии
                                    <br /> Часы работы: с 09:00-18:00
                                </p>
                            </div>
                            <div className={styles.right}>
                                <h2 className={styles.h2}>E-mail:</h2>
                                <p className={styles.text}>neftecom-@mail.ru</p>
                                <p className={styles.subtext}>отдел канцелярии</p>
                                <p className={styles.text}>sale@kroil24.ru</p>
                                <p className={styles.subtext}>Оптовая реализация ГСМ</p>
                                <p className={styles.text}>promo@neftecom24.ru</p>
                                <p className={styles.subtext}>Отдел маркетинга</p>
                                <p className={styles.text}>kachestvo@neftecom24.ru</p>
                                <p className={styles.subtext}>Контроль качества</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <img src={map} alt="map" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
