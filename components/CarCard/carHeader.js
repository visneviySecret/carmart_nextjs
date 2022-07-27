import React from 'react'
import styles from '../../styles/header.module.css'

export default function carHeader({
    feedData,
    vin
}) {
    const {
        brandName,
        modelName,
        modelYear,
        equipmentVariantName,
    } = feedData

    const filter = (name) => {
        let newWord = ''
        let newName = ''
        let count = 0
        for (let char of name) {
            if (count === 4) {
                break
            }
            newWord += char
            if (char === ' ') {
                newName += newWord
                newWord = ''
                count++
                continue
            }
        }

        return newName
    }

    return (
        <div className={styles.header}>

            <div className={styles.header__title}>
                {`${brandName} ${modelName} ${filter(equipmentVariantName)}`}
                <div className={styles.header__title__year}>
                    {modelYear}
                </div>
            </div>

            <div className={styles.header__vin}>
                {vin}
            </div>
        </div>

    )
}