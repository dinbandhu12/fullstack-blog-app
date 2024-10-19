import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.heading}> Welcome! I’m DBS </span> <br />
        <p className={styles.subHeading}>This blog is where I unfold my software engineering adventures, share the lessons I’ve learned in the ever-evolving tech world, and tell some stories.</p>
      </h1>
      <div className={styles.post}>
        <div className={styles.postImg}>
          <Image src="/p1.jpeg" alt='postImg' fill className={styles.image} />
        </div>
        <div className={styles.postContent}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat corporis mollitia, iste dignissimos laboriosam exercitationem magni numquam assumenda, eos ab labore. Debitis, totam. Omnis modi porro tempora labore, fuga reprehenderit.
          </p>
          <button className={styles.postBtn}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
