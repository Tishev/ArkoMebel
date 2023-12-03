import React from 'react';
import styles from './TableForActualPrice.module.scss';
const TableForActualPrice = ({ gasStations }) => {
    const fuelTypes = gasStations[0].fuels.map((fuel) => fuel.type);

    return (
        <table className={styles.table}>
            <thead className={styles.rowIndex}>
                <tr className={styles.row}>
                    <th className={styles.el1}>Адрес АЗС / Наим. топлива</th>
                    {fuelTypes.map((fuelType, index) => (
                        <th className={styles.el} key={index}>
                            {fuelType}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {gasStations.map((station, index) => (
                    <tr className={index % 2 === 0 ? styles.evenRow : styles.oddRow} key={index}>
                        <td className={styles.address}>{station.address}</td>
                        {station.fuels.map((fuel, subIndex) => (
                            <td className={styles.price} key={subIndex}>
                                {fuel.price.toFixed(2)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableForActualPrice;
