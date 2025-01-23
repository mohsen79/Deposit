import styles from "./AbstractDeposit.module.css";

export default function AbstractDeposit({ selected }) {
  return (
    <div
      className={
        selected === true ? styles.selectedContainer : styles.container
      }
    >
      <div className={selected === true ? styles.selectedTitle : styles.title}>
        سپرده قرض الحسنه عادی (دیجیتال)
      </div>
      <div className={styles.description}>
        حداقل مبلغ افتتاحیه 500،000 ریال است
      </div>
    </div>
  );
}
