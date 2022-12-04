import React from "react";
import { Blog } from "../../helpers/types/Blogs";

import styles from "../../styles/blog.module.css";

interface IProps {
  blog: Blog;
}

const BlogItem: React.FC<IProps> = ({ blog }) => <div>{blog.title}</div>;

export default BlogItem;
