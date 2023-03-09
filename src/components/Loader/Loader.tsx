import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
      <div className={styles.spinnerCaption}>
        Please wait to load new items.
      </div>
    </div>
  );
};

export default Loader;
