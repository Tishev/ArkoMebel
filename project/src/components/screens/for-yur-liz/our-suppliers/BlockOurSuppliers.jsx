import React, { useState } from 'react';
import Span from '../../../UI/span/Span';
import { ourSuppliersData } from '../../../../data/forYurLiz';
import OurSuppliersItem from '../our-suppliers-item/OurSuppliersItem';
import Title from '../../../UI/title/Title';

const BlockOurSuppliers = () => {
    const [dataOurSuppliers, setDataOurSuppliers] = useState(ourSuppliersData);
    return (
        <div className="relative flex mt-20 justify-between">
            <div>
                <Span />
                <Title text={'Наши поставщики'} />
            </div>
            <div className="flex justify-between gap-4">
                {dataOurSuppliers.map((item) => (
                    <OurSuppliersItem key={item.id} img={item.img} />
                ))}
            </div>
        </div>
    );
};

export default BlockOurSuppliers;
