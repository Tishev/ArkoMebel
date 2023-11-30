import React from 'react';
import BlockSetAzsNeftekom from '../components/screens/set-azs/set-azs-neftekom/BlockSetAzsNeftekom';
import BlockActualPriceNeftekom from '../components/screens/set-azs/actual-price-neftekom/BlockActualPriceNeftekom';

const SetAZS = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col">
                    <BlockSetAzsNeftekom />
                    <BlockActualPriceNeftekom />
                </div>
            </div>
        </section>
    );
};

export default SetAZS;
