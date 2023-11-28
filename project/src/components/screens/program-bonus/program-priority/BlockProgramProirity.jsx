import React, { useState } from 'react';
import styles from './BlockProgramProirity.module.scss';
import Span from '../../../UI/span/Span';
import Button from '../../../UI/button/Button';
import { programPriorityData } from '../../../../data/programPriority';
import ProgramPriorityItem from '../program-priority-item/ProgramPriorityItem';
const BlockProgramProirity = () => {
    const [dataItems, setDataItems] = useState(programPriorityData);
    return (
        <section className={styles.content}>
            <Span />
            <h1 className={styles.title}>Программа лояльности “НЕФТЕКОМ” </h1>
            <p className={styles.text}>
                При покупке нефтепродуктов, товаров в маркете «Нефтеком» и кафе находящихся на АЗС
                «Нефтеком» бонусы начисляются
                <br /> в следующем порядке:
            </p>
            <div className={styles.table}>
                <div className={styles.column}>
                    <p className={styles.p1tl}>Сумма покупок</p>
                    <p className={styles.p2}>до 699,99 рублей</p>
                    <p className={styles.p3}>от 700 до 1999,99 рублей</p>
                    <p className={styles.p4}>Свыше 2000 рублей</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.p1}>
                        Количество начисляемых Бонусов при покупке топлива (за каждый литр)
                    </p>
                    <p className={styles.p2}>1 бонус</p>
                    <p className={styles.p3}>1,2 бонус</p>
                    <p className={styles.p4}>1,5 бонус</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.p1}>
                        Количество начисляемых Бонусов при покупке товаров в маркет «Нефтеком»
                        <br /> в процентах от суммы покупки
                    </p>
                    <p className={styles.p2}>2%</p>
                    <p className={styles.p3}>2%</p>
                    <p className={styles.p4}>2%</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.p1tr}>
                        Количество начисляемых Бонусов при покупке товаров в кафе находящихся на АЗС
                        «Нефтеком» в процентах от суммы <br />
                        покупки
                    </p>
                    <p className={styles.p2}>5%</p>
                    <p className={styles.p3}>7%</p>
                    <p className={styles.p4}>10%</p>
                </div>
            </div>
            <div className={styles.descr}>
                <p>
                    * - Срок действия бонусов - 300 (триста) календарных дней с момента
                    осуществления покупки. <br />
                    ** - Списание бонусов может производиться в размере не более 50% от суммы
                    покупки
                </p>
                <Button text={'Условия программы лояльности'} />
            </div>
            <div className={styles.items}>
                {dataItems.map((item) => (
                    <ProgramPriorityItem text={item.text} key={item.id} img={item.img} />
                ))}
            </div>
        </section>
    );
};

export default BlockProgramProirity;
