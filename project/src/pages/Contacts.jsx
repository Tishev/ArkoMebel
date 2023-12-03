import React from 'react';
import BlockContacts from '../components/screens/contacts/BlockContacts';

const Contacts = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col">
                    <BlockContacts />
                </div>
            </div>
        </section>
    );
};

export default Contacts;
