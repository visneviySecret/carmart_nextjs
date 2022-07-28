import styles from '../../styles/css/description.module.css'
import Image from 'next/image'
import crossImg from '../../assets/cross-23.svg'

export default function carModal({ active, setActive, optionsList }) {

    return (
        <div
            className={active ? styles.modal : styles.modal_not_active}
        >
            <div className={styles.header}>
                <div className={styles.title}>Пакеты опций</div>

                <Image
                    width="25%" height="25%"
                    alt='cross'
                    unoptimized
                    layout="fixed"
                    src={crossImg}
                    fill='green'
                    onClick={() => setActive(false)} />
            </div>

            <div className={styles.options_list}
                onClick={event => event.stopPropagation()}
            >
                {optionsList.map((option, index) =>
                    <div key={index}>{option}</div>)}
            </div>

        </div>
    )
}