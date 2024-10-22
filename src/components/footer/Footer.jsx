import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

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
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.home}>Home</Link>
          <Link href="/" className={styles.about}>About</Link>
          <Link href="/" className={styles.blog}>Blog</Link>
          <Link href="/" className={styles.contact}>Contact</Link>
        </div>
        
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" className={styles.style}>Style</Link>
          <Link href="/" className={styles.fashion}>Fashion</Link>
          <Link href="/" className={styles.food}>Food</Link>
          <Link href="/" className={styles.culture}>Culture</Link>
          <Link href="/" className={styles.coding}>Coding</Link>
        </div>
        
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/" className={styles.fb}>Facebook</Link>
          <Link href="/" className={styles.in}>Instagram</Link>
          <Link href="/" className={styles.tw}>Twitter</Link>
          <Link href="/" className={styles.li}>LinkedIn</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
