import { IRoute } from "./types/Route";

const ROUTES: IRoute = {
  home: {
    id: "home",
    path: "/",
    isPrivate: false,
    title: "Home",
  },
  login: {
    id: "login",
    path: "/login",
    isPrivate: false,
    title: "Log In",
  },
  register: {
    id: "register",
    path: "/register",
    isPrivate: false,
    title: "Register",
  },
  blogs: {
    id: "blogs",
    path: "/blogs",
    isPrivate: false,
    title: "Blogs",
  },
  blog: {
    id: "blogs",
    path: "/blogs",
    isPrivate: false,
    title: "Blogs",
  },
};

export default ROUTES;
