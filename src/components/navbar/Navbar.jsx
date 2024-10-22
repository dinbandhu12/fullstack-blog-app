import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        {/* change this to new design social media (LinkedIn -> LI, Github -> GH,) 
          when hover the LI it will change to LinkedIn text and GH to Github text
        */}
        
        {/* 
        <Image src="/fb.svg" alt='facebook' width={32} height={32} className={styles.fb} />
        */}
        <Image src="/facebook.png" alt='facebook' width={24} height={24} />
        <Image src="/instagram.png" alt='facebook' width={24} height={24} />
        <Image src="/tiktok.png" alt='facebook' width={24} height={24} />
        <Image src="/youtube.png" alt='facebook' width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Link href="/"> DBS Blog </Link>
      </div>
      <div className={styles.links}>
        <Link href='/' className={styles.navhome}>Home</Link>
        <Link href='/' className={styles.navcontact}>Contact</Link>
        <Link href='/' className={styles.navabout}>About</Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
