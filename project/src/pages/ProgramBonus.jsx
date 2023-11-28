import React from 'react';
import BlockProgramProirity from '../components/screens/program-bonus/program-priority/BlockProgramProirity';
import BlockHowGetCard from '../components/screens/program-bonus/how-get-card/BlockHowGetCard';

const ProgramBonus = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col">
                    <BlockProgramProirity />
                    <BlockHowGetCard />
                </div>
            </div>
        </section>
    );
};

export default ProgramBonus;
