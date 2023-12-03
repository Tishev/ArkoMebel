import React, { useState } from 'react';
import styles from './BlockVacancies.module.scss';
import Span from '../../UI/span/Span';
import { vacansiesData } from '../../../data/vacancies';
import VacansiesItem from './VacansiesItem';
const BlockVacancies = () => {
    const [vacansyData, setVacansyData] = useState(vacansiesData);
    return (
        <div className={styles.content}>
            <Span />
            <h1>Вакансии</h1>
            <div className={styles.items}>
                {vacansyData.map((item) => (
                    <VacansiesItem
                        key={item.id}
                        img={item.img}
                        position={item.position}
                        salary={item.salary}
                        responsibilities={item.responsibilities}
                        requirements={item.requirements}
                        workingConditions={item.workingConditions}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlockVacancies;
