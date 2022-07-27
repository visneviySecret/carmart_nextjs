import React, { useState } from 'react'
import Modal from './carModal'
import styles from '../../styles/description.module.css'

export default function CarDescription({
    variationEquipmentVariants, feedData
}) {
    const {
        baseOptions,
        colorByClassifierName,
        equipmentVariantDriveType,
        engine
    } = feedData
    const { engineName } = engine
    const [modalActive, setModalActive] = useState(false)

    let descriptions = {
        engine: engine.engineName,
        kpp: '',
        mileage: '160 500 км',
        color: colorByClassifierName,
        options: [],
        packetAcc: ''
    }

    baseOptions.forEach(option => {
        if (option.optionName) {
            descriptions.options.push(option.optionName)
        }
    })
    if (variationEquipmentVariants) {
        let typeOfKPP = ''
        variationEquipmentVariants.value.forEach(item => {
            if (item.characteristics === "Тип КПП") {
                typeOfKPP = item.value
            }
        })
        descriptions = {
            ...descriptions,
            kpp: typeOfKPP
        }
    }

    const descriptionTitles = [
        'ДВИГАТЕЛЬ',
        'КПП',
        'ПРОБЕГ',
        'ЦВЕТ',
        'ПАКЕТЫ'
    ]

    function endOfWord(number) {
        let string = number.toString()
        let lastDigit = string.slice(string.length - 1, string.length)
        if (string.length > 1) {
            let last2Digit = string.slice(string.length - 2, string.length)
            if (last2Digit[0] === '1')
                return 'ов'
        }
        switch (lastDigit) {
            case '1': return ''
            case '2': return 'а'
            case '3': return 'а'
            case '4': return 'а'
            default: return 'ов'
        }
    }
    return (
        <div className={styles.description}>

            {Object.keys(descriptions).map((description, index) => {
                let descriptionValue = descriptions[description]
                let descriptionTitle = descriptionTitles[index]

                if (isNaN(descriptionValue) || descriptionValue.length !== 0) {
                    return (
                        <div className={styles.item} key={index}>
                            <div className={styles.item__descriptionTitles}>{descriptionTitle}
                                <div className={styles.item__description}>{descriptionValue}</div>
                                {
                                    descriptionTitle === "ПАКЕТЫ" &&
                                    <div className={styles.item__extended_discription}>
                                        {<div onClick={() => setModalActive(!modalActive)}>(+ ещё {descriptionValue.length} пакет{endOfWord(descriptionValue.length)})</div>}
                                        <Modal active={modalActive} setActive={setModalActive} optionsList={descriptionValue} />
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }

            })}

        </div>
    )
}