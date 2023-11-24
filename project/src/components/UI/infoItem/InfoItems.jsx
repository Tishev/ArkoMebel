import React from 'react';
import styles from './InfoItems.module.scss';
const InfoItems = ({ icon, title, text }) => {
    return (
        <div className={styles.item}>
            <div className={styles.bgImg}>
                <img className={styles.img} src={icon} alt="icon" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}> {text}</p>
        </div>
    );
};

export default InfoItems;
