import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/menuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* first section */}
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* second section */}
      <h2 className={styles.subtitle}>Discover by the topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      
      <h2 className={styles.subtitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;

