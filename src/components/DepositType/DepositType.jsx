import BpCheckbox from "../CustomizedCheckbox/CustomizedCheckbox";
import AbstractDeposit from "./AbstractDeposit/AbstractDeposite";
import styles from "./DepositType.module.css";

const DepositType = () => {
  return (
    <div className={styles.container}>
      <div className={styles.noActiveDeposit}></div>

      <div className={styles.abstractDepositesContainer}>
        <AbstractDeposit
          title={"سپرده قرض الحسنه عادی (دیجیتال)"}
          description={"حداقل مبلغ افتتاحیه 500،000 ریال ویژه قرعه کشی"}
          selected={false}
        ></AbstractDeposit>
        <AbstractDeposit
          title={"سپرده قرض الحسنه پس انداز (دیجیتال)"}
          description={"حداقل مبلغ افتتاحیه 500،000 ریال ویژه تسهیلات"}
          selected={true}
        ></AbstractDeposit>
        <AbstractDeposit
          title={"سپرده سرمایه گذاری بلند مدت"}
          description={"حداقل مبلغ افتتاحیه 10،000،000،000 ریال با سود"}
          selected={false}
        ></AbstractDeposit>
        <AbstractDeposit
          title={"سپرده سرمایه گذاری کوتاه مدت"}
          description={"حداقل مبلغ افتتاحیه 500،000 ریال با سود"}
          selected={false}
        ></AbstractDeposit>
      </div>

      <div className={styles.stickToButtom}>
        <div className={styles.termsAndConditionsAgreement}>
          <div className={styles.description}>
            <span className={styles.emphasizedPart}>قوانین و مقررات </span>
            را مطالعه کردم و موافقم
          </div>
          <BpCheckbox></BpCheckbox>
        </div>

        <div className={styles.continueBtn}> ادامه </div>
      </div>
    </div>
  );
};

export default DepositType;
