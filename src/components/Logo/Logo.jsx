import styles from "./Logo.module.scss";

function Logo({ size, headerLogo = false }) {
  return (
    <div className={`${styles.logo} ${headerLogo ? "text-lg" : "text-2xl"} sm:${size}`}>
      <span className={styles.run}>
        RUN <i className="fa-solid fa-person-running"></i>
      </span>
      <span className={styles.together}>TOGETHER</span>
    </div>
  );
}

export default Logo;
