import React from 'react';
import BlockVacancies from '../components/screens/vacancies/BlockVacancies';

const Vacancies = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col">
                    <BlockVacancies />
                </div>
            </div>
        </section>
    );
};

export default Vacancies;
