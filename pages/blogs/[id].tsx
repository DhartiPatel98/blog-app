import React from "react";

import { useRouter } from "next/router";

const Blog: React.FC = () => {
  const routes = useRouter();

  console.log("*** ", routes.query.id);

  return <div>Blog here</div>;
};

export default Blog;
