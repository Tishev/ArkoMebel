import React from 'react';
import styles from './HowGetCardItem.module.scss';
const HowGetCardItem = ({ text, count }) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemCount}>
                <h1 className={styles.count}>{count}</h1>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default HowGetCardItem;
