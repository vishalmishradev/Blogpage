import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const { id } = await params;   // ✅ FIX HERE
  const data = await getData(id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>

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
        </p>
      </div>
    </div>
  );
};

export default BlogPost;