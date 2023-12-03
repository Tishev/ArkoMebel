import React from 'react';

const OurSuppliersItem = ({ img }) => {
    return (
        <div className="flex rounded-[15px] bg-gray items-center justify-center p-[15px]">
            <div className="flex rounded-[15px] h-[287px] w-[433px] bg-white items-center justify-center ">
                <img src={img} alt="icon" />
            </div>
        </div>
    );
};

export default OurSuppliersItem;
