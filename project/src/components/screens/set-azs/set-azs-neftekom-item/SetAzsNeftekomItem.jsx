import React from 'react';
import styles from './SetAzsNeftekomItem.module.scss';
const SetAzsNeftekomItem = ({ title, data, dopData, dopTitle }) => {
    return (
        <div className={styles.item}>
            <h2>{title}</h2>
            <ul>
                {data.map((item) => (
                    <>
                        <div className={styles.block}>
                            <span className={styles.span} />
                            <li key={item.id}>{item.text}</li>
                        </div>
                        {dopTitle && <h2>{dopTitle}</h2>}
                        {dopData &&
                            dopData.map((item) => (
                                <div className={styles.block}>
                                    <span className={styles.span} />
                                    <li key={item.id}>{item.text}</li>
                                </div>
                            ))}
                    </>
                ))}
            </ul>
        </div>
    );
};

export default SetAzsNeftekomItem;
