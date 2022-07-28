import React from 'react'
import styles from '../../styles/css/buy.module.css'

export default function CarBuy({
    legacy, feedData
}) {
    const { price, isStock, isTradein } = legacy
    const { noFactoryOptions } = feedData

    let packetAccSum = 0

    if (noFactoryOptions) {
        var { packetAcc } = feedData.noFactoryOptions
        packetAcc.map((packetAccValue) =>
            packetAccSum += packetAccValue.packetsAccPrice
        )
    }


    return (
        <div className={styles.buy}>
            <div className={styles.buy__price}>
                <div className={styles.buy__price_main}>
                    <div className={styles.green}>{price.toLocaleString()}</div>₽
                </div>

                {packetAccSum !== 0 &&
                    <div className={styles.buy__additional}>
                        Доп. опции на
                        <div className={styles.green}>{packetAccSum.toLocaleString()}</div> ₽
                    </div>
                }
            </div>

            <div  >
                {
                    isStock &&
                    <button className={styles.button}>
                        КУПИТЬ
                    </button>
                }
                {
                    !isStock &&
                    <button className={styles.button}>
                        В ПОСТАВКЕ
                    </button>
                }

            </div>
        </div>
    )
}