import React from 'react';
import styles from './HeaderScreen.module.scss';
import Header from '../header/Header';
import HomeSection from '../homeSection/HomeSection';
const HeaderScreen = () => {
    return (
        <section className={styles.sectionHeader}>
            <Header />
            <HomeSection />
        </section>
    );
};

export default HeaderScreen;
