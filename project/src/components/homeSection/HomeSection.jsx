import React from 'react';
import styles from './HomeSection.module.scss';
import cardsImg from '../../assets/img/homeSection/cards.png';
const HomeSection = () => {
    return (
        <div className="container">
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>Получай до 10% бонусов с каждого посещения!</h1>
                    <p className={styles.text}>
                        Оформите карту лояльности “НЕФТЕКОМ” и получайте до 10% бонусов на топливо,
                        кафе и всю продукцию на АЗС НЕФТЕКОМ! Оформить карту лояльности
                    </p>
                    <button className={styles.btn}>Оформить карту лояльности</button>
                </div>
                <img className={styles.img} src={cardsImg} alt="cards" />
            </div>
        </div>
    );
};

export default HomeSection;
