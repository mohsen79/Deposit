import BpCheckbox from "../CustomizedCheckbox/CustomizedCheckbox";
import AbstractDeposit from "./AbstractDeposit/AbstractDeposite";
import RegularSavingsDepositLogic from "./DepositTypeLogic";
import { Box, Typography, Button } from "@mui/material";

const DepositType = () => {
  const { classes } = RegularSavingsDepositLogic();

  return (
    <Box className={classes.container}>
      <Box className={classes.noActiveDeposit}></Box>

      <Box className={classes.abstractDepositesContainer}>
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
      </Box>

      <Box className={classes.stickToBottom}>
        <Box className={classes.termsAndConditionsAgreement}>
          <Typography className={classes.description}>
            <Typography className={classes.emphasizedPart} component="span">
              قوانین و مقررات{" "}
            </Typography>
            را مطالعه کردم و موافقم
          </Typography>
          <BpCheckbox></BpCheckbox>
        </Box>

        <Box className={classes.continueBtn}> ادامه </Box>
      </Box>
    </Box>
  );
};

export default DepositType;
