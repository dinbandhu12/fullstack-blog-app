import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="img" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10 May 2023</span>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="img" fill className={styles.image} />
        </div>        
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil voluptatibus fugit hic sit porro minus vero natus et ullam aliquam consequatur tenetur asperiores, quod odit pariatur doloribus odio minima.</p>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil voluptatibus fugit hic sit porro minus vero natus et ullam aliquam consequatur tenetur asperiores, quod odit pariatur doloribus odio minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil voluptatibus fugit hic sit porro minus vero natus et ullam aliquam consequatur tenetur asperiores, quod odit pariatur doloribus odio minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil voluptatibus fugit hic sit porro minus vero natus et ullam aliquam consequatur tenetur asperiores, quod odit pariatur doloribus odio minima.</p>

            </div>
            <div className={styles.comments}>
                <Comments />

            </div>
        </div>
          <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
