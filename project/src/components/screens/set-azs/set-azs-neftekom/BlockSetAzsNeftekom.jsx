import React, { useState } from 'react';
import styles from './BlockSetAzsNeftekom.module.scss';
import Span from '../../../UI/span/Span';
import {
    azsInBoguchanskomData,
    azsInKrasnoyarsData,
    azsInLesosibirskeData,
    azsInUyarskomData,
} from '../../../../data/setAzs';
import SetAzsNeftekomItem from '../set-azs-neftekom-item/SetAzsNeftekomItem';

import map from '../../../../assets/img/setAzs/map.png';
import icon from '../../../../assets/img/setAzs/icon.svg';
const BlockSetAzsNeftekom = () => {
    const [dataKrasnoyarsk, setDataKrasnoyarsk] = useState(azsInKrasnoyarsData);
    const [dataBoguchanskom, setDataBoguchanskom] = useState(azsInBoguchanskomData);
    const [dataLesosibirske, setDataLesosibirske] = useState(azsInLesosibirskeData);
    const [dataUyarskom, setDataUyarskom] = useState(azsInUyarskomData);
    return (
        <div className={styles.content}>
            <Span />
            <h1 className={styles.title}>Сеть АЗС НЕФТЕКОМ</h1>
            <div className={styles.items}>
                <SetAzsNeftekomItem
                    data={dataKrasnoyarsk}
                    title={'Адреса АЗС НЕФТЕКОМ в Красноярске:'}
                />
                <SetAzsNeftekomItem
                    data={dataBoguchanskom}
                    title={'Адреса АЗС НЕФТЕКОМ в Богучанском р-не:'}
                />
                <SetAzsNeftekomItem
                    data={dataLesosibirske}
                    title={'Адрес АЗС НЕФТЕКОМ в Лесосибирске:'}
                    dopData={dataUyarskom}
                    dopTitle={'Адрес АЗС НЕФТЕКОМ в Уярском р-не:'}
                />
            </div>
            <div className={styles.itemMap}>
                <img className={styles.map} src={map} alt="map" />
                <img className={styles.icon} src={icon} alt="icon" />
                <img className={styles.icon2} src={icon} alt="icon" />
                <img className={styles.icon3} src={icon} alt="icon" />
            </div>
        </div>
    );
};

export default BlockSetAzsNeftekom;
