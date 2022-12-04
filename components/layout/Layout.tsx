import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

import styles from '../../styles/layout.module.css';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
