import React from 'react'
import styles from '../../styles/img.module.css'
import Image from 'next/image'

export default function carPicture({
    photobank
}) {
    const { url: picture } = photobank.imgs[0]
    return (
        <div className={styles.img}
        >
            <Image src={picture}
                className={styles.img}
                alt="car"
                unoptimized
                width="100%" height="100%"
                layout="responsive"
            />
        </div>
    )
}