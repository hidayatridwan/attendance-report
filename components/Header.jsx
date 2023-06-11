import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles["main-navigation"]}>
      <Link href="/" className={styles["main-navigation__logo"]}>
        <h2>Absen BYOD</h2>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles["nav__list-item"]}>
            <Link href="/" className={`${styles.nav__link} ${styles.active}`}>
              Dashboard
            </Link>
          </li>
          <li className={styles["nav__list-item"]}>
            <Link href="/" className={styles.nav__link}>
              Karyawan
            </Link>
          </li>
          <li className={styles["nav__list-item"]}>
            <Link href="/" className={styles.nav__link}>
              Laporan
            </Link>
          </li>
          <li className={styles["nav__list-item"]}>
            <Link href="/" className={styles.nav__link}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
