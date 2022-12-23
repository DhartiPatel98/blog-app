import React from "react";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { API_BASE_URL } from "../../helpers/constant";

import { Blog as BlogType } from "../../helpers/types/Blogs";
import { ParsedUrlQuery } from "querystring";

interface IBlog {
  blog: BlogType;
}

const Blog: React.FC<IBlog> = ({ blog }) => {
  console.log("*** ", blog);

  return <div>{blog.title}</div>;
};

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<IBlog> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  const data = await (
    await fetch(`${API_BASE_URL}/blogs/${params?.id}`)
  ).json();

  return {
    props: {
      blog: data,
    },
  };
};

export default Blog;
