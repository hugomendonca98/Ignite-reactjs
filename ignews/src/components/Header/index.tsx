import Image from "next/image";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="110" height="31" />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
}
