import React from "react";
import { Blog as BlogType } from "../../helpers/types/Blogs";
import BlogItem from "./BlogItem";

import styles from "../../styles/blog.module.css";

interface IProps {
  blogList: Array<BlogType>;
}

const BlogList: React.FC<IProps> = ({ blogList }) => (
  <div className="row">
    {(blogList || []).map((blog) => (
      <div
        className={`col-2 col-sm-2 col-md-4 col-lg-4 col-xl-3 mb-3 ${styles.blog}`}
        key={blog.id}
      >
        <BlogItem blog={blog} />
      </div>
    ))}
  </div>
);

export default BlogList;
