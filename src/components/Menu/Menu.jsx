import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/menuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>

      {/* first section */}
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* --------------- */}
      {/* <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}> - 10-10-2022</span>
            </div>
          </div>
        </Link>
        
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}> - 10-10-2022</span>
            </div>
          </div>
        </Link>
        
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}> - 10-10-2022</span>
            </div>
          </div>
        </Link>
        
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}> - 10-10-2022</span>
            </div>
          </div>
        </Link>
      </div> */}
    {/* --------------- */}


      {/* second section */}
      <h2 className={styles.subtitle}>Discover by the topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      
      <h2 className={styles.subtitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPosts withImage={true} />

      {/* <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-10-2022</span>
            </div>
          </div>
        </Link>
        
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-10-2022</span>
            </div>
          </div>
        </Link>
        
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-10-2022</span>
            </div>
          </div>
        </Link>
        
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-10-2022</span>
            </div>
          </div>
        </Link>
      </div> */}
      
    </div>
  );
};

export default Menu;

