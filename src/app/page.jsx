import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products!!
        </h1>
        <p className={styles.desc}>
          Turning your ideas into reality. We bring together global tech industry.
        </p>
        <button className={styles.button}>
          See our work!!
        </button>
      </div>

      <div className={styles.item}>
        <Image 
          src="/hero.png" 
          alt="hero" 
          width={500} 
          height={300}
          priority
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default Home