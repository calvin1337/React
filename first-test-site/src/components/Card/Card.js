import React from 'react'
import styles from "./card.module.css";


function Card() {
    return (
        <li className={styles.cardsItem}>
            <div className={styles.card}>
                <div className={[styles.cardImage, styles.cardImageRandom].join(" ")}></div>
                    <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>Lorem</div>
                    <p className={styles.cardText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id quod odio maiores obcaecati modi quia necessitatibus, eligendi sapiente nostrum.
                    </p>
                    <button className={styles.btn}>Button</button>
                </div>
         </div>
    </li>
    )
}

export default Card
