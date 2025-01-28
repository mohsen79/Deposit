import { useNavigate } from "react-router-dom";
import AbstractDeposit from "./AbstractDeposit/AbstractDeposite";
import RegularSavingsDepositLogic from "./DepositTypeLogic";
import {
    Box,
    Typography,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";

const DepositType = () => {
    const {
        classes,
        styles,
        setTitle,
        setPath,
        navigateNextPage,
        depositType,
        setDepositType,
    } = RegularSavingsDepositLogic();

    return (
        <Box className={classes.container}>
            <Box className={classes.noActiveDeposit}></Box>

            <Box className={classes.abstractDepositesContainer}>
                <AbstractDeposit
                    path="/saving-deposit"
                    type="/saving-deposit"
                    setDepositType={setDepositType}
                    setTitle={setTitle}
                    setPath={setPath}
                    title={"سپرده قرض الحسنه عادی (دیجیتال)"}
                    description={
                        "حداقل مبلغ افتتاحیه 500،000 ریال ویژه قرعه کشی"
                    }
                    selected={false}
                ></AbstractDeposit>
                <AbstractDeposit
                    path="/saving-deposit"
                    type="/saving-deposit"
                    setDepositType={setDepositType}
                    setTitle={setTitle}
                    setPath={setPath}
                    title={"سپرده قرض الحسنه پس انداز (دیجیتال)"}
                    description={
                        "حداقل مبلغ افتتاحیه 500،000 ریال ویژه تسهیلات"
                    }
                    selected={true}
                ></AbstractDeposit>
                <AbstractDeposit
                    path="/long-investment"
                    type="/long-investment"
                    setDepositType={setDepositType}
                    setTitle={setTitle}
                    setPath={setPath}
                    title={"سپرده سرمایه گذاری بلند مدت"}
                    description={
                        "حداقل مبلغ افتتاحیه 10،000،000،000 ریال با سود"
                    }
                    selected={false}
                ></AbstractDeposit>
                <AbstractDeposit
                    path="/short-investment"
                    type="/short-investment"
                    setDepositType={setDepositType}
                    setTitle={setTitle}
                    setPath={setPath}
                    title={"سپرده سرمایه گذاری کوتاه مدت"}
                    description={"حداقل مبلغ افتتاحیه 500،000 ریال با سود"}
                    selected={false}
                ></AbstractDeposit>
            </Box>

            <Box className={classes.stickToBottom}>
                <FormControlLabel
                    control={
                        <Checkbox
                            id="card-issuance"
                            disableRipple
                            size="small"
                            sx={styles.checkbox}
                        />
                    }
                    label={
                        <Typography component="span" sx={{ color: "#565656" }}>
                            <Typography
                                sx={{ color: "#0564AA", fontWeight: "bold" }}
                                component="span"
                            >
                                قوانین و مقررات{" "}
                            </Typography>
                            را مطالعه کردم و موافقم
                        </Typography>
                    }
                    sx={styles.FormControlLabel}
                />
                <Box component="section" className={classes.payment}>
                    <Button
                        className={classes.paymentBtn}
                        onClick={navigateNextPage}
                    >
                        پرداخت
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DepositType;
