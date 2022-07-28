import React from 'react'
import CarHeader from './CarCard/carHeader'
import CarPicture from './CarCard/carPicture'
import CarDescription from './CarCard/carDescription'
import BuyCar from './CarCard/carBuy'
import styles from '../styles/css/card.module.css'

export default function Car({ car }) {
    const {
        feedData,
        photobank,
        variationEquipmentVariants,
        vin,
        legacy } = car;

    return (
        <div className={styles.userCard}>

            <CarHeader
                feedData={feedData}
                vin={vin}
            />
            <CarPicture photobank={photobank} />
            <CarDescription
                feedData={feedData}
                variationEquipmentVariants={variationEquipmentVariants}
            />
            <BuyCar legacy={legacy} feedData={feedData} />
        </div>
    )
}