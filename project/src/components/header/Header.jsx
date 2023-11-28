import React from 'react';
import styles from './Header.module.scss';
import Button from '../UI/button/Button';
import logo from '../../assets/img/header/logo.svg';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
const Header = () => {
    const handleClickScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navigation}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <ul className={styles.ul}>
                        <Link className={styles.li} to={paths.home}>
                            <li onClick={() => handleClickScroll()} className={styles.li}>
                                Главная
                            </li>
                        </Link>
                        <Link className={styles.li} to={paths.bonusProgram}>
                            <li onClick={() => handleClickScroll()} className={styles.li}>
                                Бонусная программа
                            </li>
                        </Link>
                        <Link className={styles.li} to={paths.setAZS}>
                            <li onClick={() => handleClickScroll()} className={styles.li}>
                                Сеть АЗС
                            </li>
                        </Link>
                        <Link className={styles.li} to={paths.vacancies}>
                            <li onClick={() => handleClickScroll()} className={styles.li}>
                                Вакансии
                            </li>
                        </Link>
                        <Link className={styles.li} to={paths.forYurLiz}>
                            <li onClick={() => handleClickScroll()} className={styles.li}>
                                Для юр. лиц
                            </li>
                        </Link>
                        <Link className={styles.li} to={paths.contacts}>
                            <li onClick={() => handleClickScroll()} className={styles.li}>
                                Контакты
                            </li>
                        </Link>
                    </ul>
                    <div className={styles.callBlock}>
                        <p className={styles.numberPhone}>8 953 586 43 90</p>

                        <p className={styles.callback}>Обратный звонок</p>
                    </div>
                    <Button text={'Личный кабинет'} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
