import React from 'react';
import styles from './HowGetCardItemMini.module.scss';
const HowGetCardItemMini = ({ img, name, value }) => {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={img} alt={name} />
            <div className={styles.text}>
                <p>{name}</p>
                <h2>{value}</h2>
            </div>
        </div>
    );
};

export default HowGetCardItemMini;
