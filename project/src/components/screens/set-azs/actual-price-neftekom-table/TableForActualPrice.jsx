import React from 'react';
import styles from './TableForActualPrice.module.scss';
const TableForActualPrice = ({ gasStations }) => {
    const fuelTypes = gasStations[0].fuels.map((fuel) => fuel.type);

    return (
        <table className={styles.table}>
            <thead className={styles.verh}>
                <tr>
                    <th>Адрес АЗС / Наим. топлива</th>
                    {fuelTypes.map((fuelType, index) => (
                        <th key={index}>{fuelType}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {gasStations.map((station, index) => (
                    <tr key={index}>
                        <td>{station.address}</td>
                        {station.fuels.map((fuel, subIndex) => (
                            <td key={subIndex}>{fuel.price}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableForActualPrice;
