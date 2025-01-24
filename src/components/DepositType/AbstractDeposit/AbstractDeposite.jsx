import styles from "./AbstractDeposit.module.css";

export default function AbstractDeposit({ selected, title, description }) {
  return (
    <div
      className={
        selected === true ? styles.selectedContainer : styles.container
      }
    >
      <div className={selected === true ? styles.selectedTitle : styles.title}>
        {title}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
