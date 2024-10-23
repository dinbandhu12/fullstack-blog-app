import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="postImg" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>Feb 12, 2022 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/" className={styles.heading}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          corporis mollitia, iste dignissimos laboriosam exercitationem magni
          numquam assumenda, eos ab labore. Debitis, totam.
        </p>
        <Link href="/demo" className={styles.readMoreBtn}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
