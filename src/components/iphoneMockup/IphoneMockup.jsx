import styles from "./IphoneMockup.module.css"



const IPhoneMockup = () => {
  return (
    <div className={styles.iphoneContainer}>
      <div className={styles.iphoneScreen}>
        <div className={styles.dynamicIsland}></div>
      </div>
      <div className={styles.sideButton}></div>
      <div className={styles.sideButton}></div>
      <div className={styles.homeButton}></div>
      <div className={styles.volumeUp}></div>
      <div className={styles.volumeDown}></div>
    </div>
  );
};

export default IPhoneMockup;
