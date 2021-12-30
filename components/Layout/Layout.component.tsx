import { ReactNode } from "react";

import styles from "../../styles/Home.module.css";
import Footer from "./Footer.component";
import Header from "./Header.component";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;