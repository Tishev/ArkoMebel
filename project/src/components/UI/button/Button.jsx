import React from 'react';
import styles from './Button.module.scss';
const Button = ({ text, activeAuth, setActiveAuth }) => {
    return (
        <button onClick={() => setActiveAuth(!activeAuth)} className={styles.btn}>
            {text}
        </button>
    );
};

export default Button;
