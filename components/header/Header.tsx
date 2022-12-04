import Link from "next/link";
import React from "react";
import Image from "next/image";

import ROUTES from "../../helpers/routes";

import Logo from "../../public/images/blog-logo.png";

import styles from "../../styles/header.module.scss";

const Header: React.FC = () => (
  <section className={`${styles.header} mb-5`}>
    <div>
      <Link href={ROUTES.home.path}>
        <Image
          src={Logo}
          alt="Blog-App"
          height={60}
          width={60}
          className="rounded"
        />
      </Link>
    </div>
    <div className={styles["nav-item"]}>
      <Link href={ROUTES.blogs.path}>Blogs</Link>
      <Link
        href={ROUTES.login.path}
        className={`${styles["btn-link"]} ${styles["sign-in"]}`}
      >
        Log In
      </Link>
      <Link
        href={ROUTES.register.path}
        className={`${styles["btn-link"]} ${styles["register"]}`}
      >
        Register
      </Link>
    </div>
  </section>
);

export default Header;
