import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>DBS Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a molestias voluptatum aliquid, dolor quidem iste fugiat. Facere temporibus hic asperiores nulla enim commodi dolorum a architecto! Quibusdam, maiores assumenda?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='facebook' width={24} height={24} />
          <Image src="/instagram.png" alt='facebook' width={24} height={24} />
          <Image src="/tiktok.png" alt='facebook' width={24} height={24} />
          <Image src="/youtube.png" alt='facebook' width={24} height={24} />

        </div>

      </div>
    </div>
  )
}

export default Footer
