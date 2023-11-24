import React, { useState } from 'react';
import { infoItems } from '../data/infoItems';
import InfoItems from '../components/UI/infoItem/InfoItems';

const Home = () => {
    const [dataInfoItems, setDataInfoItems] = useState(infoItems);
    console.log(dataInfoItems);
    return (
        <section>
            <div className="container">
                <div className="flex items-center  gap-4">
                    {dataInfoItems.map((item) => (
                        <InfoItems
                            key={item.id}
                            title={item.title}
                            icon={item.img}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
