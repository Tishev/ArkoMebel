import React from 'react';

const Btn = ({ text }) => {
    return (
        <button className="text-blue font-normal text-xl  py-[25px] px-20 border border-solid rounded-2xl border-blue transition-all duration-500 ease-out hover:bg-blue cursor-pointer hover:text-white">
            {text}
        </button>
    );
};

export default Btn;
