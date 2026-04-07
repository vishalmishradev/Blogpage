import React from "react";
import styles from "./page.module.css";
import Image from "next/image";



const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            This is a demo title for my blog page
          </h1>
          <p className={styles.desc}>
            This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.This is a demo description of my web page.
          </p>
          <div className={styles.author}>
           <Image
              src="https://images.pexels.com/photos/34870427/pexels-photo-34870427.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Vishal Mishra</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
              src="https://images.pexels.com/photos/34870427/pexels-photo-34870427.jpeg"
              alt=""
              fill={true}
              className={styles.image}
            />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         This is a demo description of my web page.
        This is a demo description of my web page.
         This is a demo description of my web page.
         This is a demo description of my web page.
         This is a demo description of my web page.
         This is a demo description of my web page.
         This is a demo description of my web page.
         This is a demo description of my web page.
         This is a demo description of my web page.

        </p>
      </div>
    </div>
  );
};

export default BlogPost;
