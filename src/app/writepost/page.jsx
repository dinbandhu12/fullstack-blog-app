"use client";

import Image from "next/image";
import styles from "./writePost.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePost = () => {

  const { status } = useSession();

  const router = useRouter();
 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if(status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if(status === "authenticated") {
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} className={styles.plus} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="plus" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="plus" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/upload.png" alt="plus" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publishBtn}> Publish </button>
    </div>
  );
};

export default WritePost;
