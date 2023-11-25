import React from 'react';
import styles from './FeedbackItems.module.scss';
const FeedbackItems = ({ img, name, rating }) => {
    return (
        <div>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{rating}</p>
            <button>Оставить отзыв</button>
        </div>
    );
};

export default FeedbackItems;
