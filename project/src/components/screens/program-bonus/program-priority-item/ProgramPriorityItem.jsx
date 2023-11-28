import React from 'react';
import styles from './ProgramPriorityItem.module.scss';
const ProgramPriorityItem = ({ img, text }) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImg}>
                <img src={img} />
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default ProgramPriorityItem;
