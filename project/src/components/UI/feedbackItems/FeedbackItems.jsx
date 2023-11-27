import React from 'react';
import styles from './FeedbackItems.module.scss';
const FeedbackItems = ({ img, name, rating }) => {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={img} alt={name} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.rating}>{rating}</p>
            <button className={styles.btn}>Оставить отзыв</button>
        </div>
    );
};

export default FeedbackItems;
