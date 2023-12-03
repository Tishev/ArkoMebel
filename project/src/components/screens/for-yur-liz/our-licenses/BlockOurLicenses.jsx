import React from 'react';
import Span from '../../../UI/span/Span';
import Title from '../../../UI/title/Title';
import license from '../../../../assets/img/forYurLiz/license.png';
const BlockOurLicenses = () => {
    return (
        <div className="mt-20 mb-20 relative">
            <Span />
            <Title text={'Наши лицензии'} />
            <div className="mt-9 flex justify-between items-center gap-[15px]">
                <img src={license} alt="license" />
                <img src={license} alt="license" />
                <img src={license} alt="license" />
                <img src={license} alt="license" />
                <img src={license} alt="license" />
                <img src={license} alt="license" />
            </div>
        </div>
    );
};

export default BlockOurLicenses;
