import AbstractDeposit from "./AbstractDeposit/AbstractDeposite";
import styles from "./DepositType.module.css";

const DepositType = () => {
  return (
    <div className={styles.container}>
      <AbstractDeposit selected={true}></AbstractDeposit>
      <AbstractDeposit></AbstractDeposit>
      <AbstractDeposit></AbstractDeposit>
      <AbstractDeposit></AbstractDeposit>
    </div>
  );
};

export default DepositType;
