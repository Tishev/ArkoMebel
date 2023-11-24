import React from 'react';
import styles from './Header.module.scss';
import Button from '../UI/button/Button';
import logo from '../../assets/img/header/logo.svg';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navigation}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <ul className={styles.ul}>
                        <li className={styles.li}>Главная</li>
                        <li className={styles.li}>Бонусная программа</li>
                        <li className={styles.li}>Сеть АЗС</li>
                        <li className={styles.li}>Вакансии</li>
                        <li className={styles.li}>Для юр. лиц</li>
                        <li className={styles.li}>Контакты</li>
                    </ul>
                    <div className={styles.callBlock}>
                        <p className={styles.numberPhone}>8 953 586 43 90</p>

                        <p className={styles.callback}>Обратный звонок</p>
                    </div>
                    <Button />
                </nav>
            </div>
        </header>
    );
};

export default Header;
