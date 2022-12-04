import React from "react";

import Blogs from "../../components/blogs/BlogList";
import { BLOGS as DummyBlogs } from "../dummy-blogs";

const BlogList: React.FC = () => (
  <>
    <h2>Blogs</h2>
    <Blogs blogList={DummyBlogs} />
  </>
);

export default BlogList;
