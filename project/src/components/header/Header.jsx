import React from 'react';
import styles from './Header.module.scss';
import Button from '../UI/button/Button';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navigation}>
                    <img className={styles.logo} src="" alt="" />
                    <ul className={styles.ul}>
                        <li className={styles.li}>sadsaasdasd</li>
                    </ul>
                    <div className={styles.callBlock}>
                        <p className={styles.numberPhone}>asdasdasd</p>

                        <p className={styles.callback}>asdasdasd</p>
                    </div>
                    <Button />
                </nav>
            </div>
        </header>
    );
};

export default Header;
