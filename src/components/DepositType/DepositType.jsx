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
    const { classes, styles } = RegularSavingsDepositLogic();

    return (
        <Box className={classes.container}>
            <Box className={classes.noActiveDeposit}></Box>

            <Box className={classes.abstractDepositesContainer}>
                <AbstractDeposit
                    title={"سپرده قرض الحسنه عادی (دیجیتال)"}
                    description={
                        "حداقل مبلغ افتتاحیه 500،000 ریال ویژه قرعه کشی"
                    }
                    selected={false}
                ></AbstractDeposit>
                <AbstractDeposit
                    title={"سپرده قرض الحسنه پس انداز (دیجیتال)"}
                    description={
                        "حداقل مبلغ افتتاحیه 500،000 ریال ویژه تسهیلات"
                    }
                    selected={true}
                ></AbstractDeposit>
                <AbstractDeposit
                    title={"سپرده سرمایه گذاری بلند مدت"}
                    description={
                        "حداقل مبلغ افتتاحیه 10،000،000،000 ریال با سود"
                    }
                    selected={false}
                ></AbstractDeposit>
                <AbstractDeposit
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
                        <Typography component="span" sx={{ color: "#565656"}}>
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
                    <Button className={classes.paymentBtn}>پرداخت</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default DepositType;
