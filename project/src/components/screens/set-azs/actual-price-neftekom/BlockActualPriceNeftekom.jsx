import React, { useState } from 'react';
import Span from '../../../UI/span/Span';
import styles from './BlockActualPriceNeftekom.module.scss';
import TableForActualPrice from '../actual-price-neftekom-table/TableForActualPrice';
import { gasStationData } from '../../../../data/setAzs';

const BlockActualPriceNeftekom = () => {
    const [gasStations, setGasStations] = useState(gasStationData);
    return (
        <div className={styles.content}>
            <Span />
            <h1 className={styles.title}>Актуальная стоимость топлива на АЗС НЕФТЕКОМ</h1>
            <TableForActualPrice gasStations={gasStations} />
        </div>
    );
};

export default BlockActualPriceNeftekom;
