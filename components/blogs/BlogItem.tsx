import React from "react";
import { Blog } from "../../helpers/types/Blogs";

import Image from "next/image";

import styles from "../../styles/blog.module.css";

interface IProps {
  blog: Blog;
}

const BlogItem: React.FC<IProps> = ({ blog: { title, image, content } }) => {
  return (
    <div className="card h-100 cursor-pointer shadow">
      <Image
        src={image}
        alt={title}
        className="card-img-top"
        width={300}
        height={200}
      />
      <div className="card-body">
        <h5 className={`card-title ${styles.title}`}>{title}</h5>
        <p className={`card-text ${styles.content}`}>{content}</p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
