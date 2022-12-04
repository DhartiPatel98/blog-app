import React from "react";

import { GetStaticProps } from "next";

import Blogs from "../../components/blogs/BlogList";
import { BLOGS as DummyBlogs } from "../dummy-blogs";
import { IBlogList } from "../../helpers/types/Blogs";

const BlogList: React.FC<IBlogList> = ({ blogList }: IBlogList) => (
  <section className="mb-5">
    <h2 className="title">Blogs</h2>
    <Blogs blogList={blogList || []} />
  </section>
);

export const getStaticProps: GetStaticProps<IBlogList> = async () => {
  return {
    props: {
      blogList: DummyBlogs,
    },
  };
};

export default BlogList;
