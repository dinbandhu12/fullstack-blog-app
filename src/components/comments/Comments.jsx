import Image from "next/image";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.textarea}
          ></textarea>
          <button className={styles.button}>Post</button>
        </div>
      ) : (
        <Link href="/login"> Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-05-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-05-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur 
          </p>
        </div>
        
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-05-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus esse quam fugiat deserunt exercitationem culpa possimus id reiciendis atque 
          </p>
        </div>
        
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="img"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Lara Hynes</span>
              <span className={styles.date}>10-05-2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus esse quam fugiat deserunt exercitationem culpa possimus id reiciendis atque quos odio recusandae consequuntur aliquam quaerat sequi vero neque, quae soluta.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus esse quam fugiat deserunt exercitationem culpa possimus id reiciendis atque quos odio recusandae consequuntur aliquam quaerat sequi vero neque, quae soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
