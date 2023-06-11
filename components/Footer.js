import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["main-footer"]}>
      <p className={styles["main-footer__title"]}>
        &copy;2023 Absen BYOD. Allright reserved.
      </p>
    </footer>
  );
};

export default Footer;
