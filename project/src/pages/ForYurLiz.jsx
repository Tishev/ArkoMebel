import React from 'react';
import BlockWhosaleSluppy from '../components/screens/for-yur-liz/whosale-sluppy/BlockWhosaleSluppy';
import BlockWeSluppy from '../components/screens/for-yur-liz/we-sluppy/BlockWeSluppy';
import BlockOurSuppliers from '../components/screens/for-yur-liz/our-suppliers/BlockOurSuppliers';
import BlockFuelStorage from '../components/screens/for-yur-liz/fuel-storage/BlockFuelStorage';
import BlockOurLicenses from '../components/screens/for-yur-liz/our-licenses/BlockOurLicenses';

const ForYurLiz = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col">
                    <BlockWhosaleSluppy />
                    <BlockWeSluppy />
                    <BlockOurSuppliers />
                    <BlockFuelStorage />
                    <BlockOurLicenses />
                </div>
            </div>
        </section>
    );
};

export default ForYurLiz;
