import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>
        Keeps you up-to-date with the latest Web dev News
      </p>
      <style jsx>{`
        .title {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Header;
