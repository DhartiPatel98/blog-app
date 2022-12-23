import React from "react";

import { GetStaticProps } from "next";

import Blogs from "../../components/blogs/BlogList";
import { IBlogList } from "../../helpers/types/Blogs";
import { API_BASE_URL } from "../../helpers/constant";

const BlogList: React.FC<IBlogList> = ({ blogList }: IBlogList) => (
  <section className="mb-5">
    <h2 className="title">Blogs</h2>
    <Blogs blogList={blogList || []} />
  </section>
);

export const getStaticProps: GetStaticProps<IBlogList> = async () => {
  const response = await fetch(`${API_BASE_URL}/blogs`);

  const data = await response.json();

  return {
    props: {
      blogList: data,
    },
  };
};

export default BlogList;
