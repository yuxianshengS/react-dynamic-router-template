import styles from "./index.module.less";

export default function CommAnnulus(props) {
  return (
    <div className={styles.root}>
      <div className={styles.firstCircle}>
        <div className={styles.secondCircle}>
          <div className={styles.annulusContent}></div>
        </div>
      </div>
    </div>
  );
}
