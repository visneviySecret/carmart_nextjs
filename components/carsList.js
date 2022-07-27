import React, { useEffect, useState } from 'react'
import Car from './carCard'
import styles from '../styles/list.module.css'

import Masonry from 'react-masonry-css'

export default function CarsList() {
    const [carsList, setCarsList] = useState()
    const [selectedBrand, setSelectedBrand] = useState('Audi')

    const carBrands = ['Audi', 'Honda', 'Hyundai', 'Kia', 'Mitsubishi', 'Volkswagen']

    useEffect(() => {
        fetch(`https://api.carmart.ru/cars/temp?page=1&perPage=24&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D=${selectedBrand}`)
            .then(res => res.json())
            .then(data => setCarsList(data.list))
    }, [selectedBrand])

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div className='container-lg my-5'>

            <div >
                <select
                    className={styles.selector}
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}>
                    {carBrands.map(carBrand =>
                        <option value={carBrand} key={carBrand}>
                            {carBrand}
                        </option>
                    )}
                </select>
            </div>


            <div >
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.mMasonryGrid}
                >
                    {carsList &&
                        (
                            carsList.map(car => <Car car={car} key={car._id} />
                            )
                        )
                    }
                </Masonry>
            </div>
        </div>
    )

}