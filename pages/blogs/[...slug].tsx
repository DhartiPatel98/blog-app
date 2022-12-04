import React from "react";

import { useRouter } from "next/router";

const FilteredBlogs: React.FC = () => {

  const routes = useRouter();

  console.log("*** ", routes.query);

  return <div>FilteredBlogs</div>;
};

export default FilteredBlogs;
