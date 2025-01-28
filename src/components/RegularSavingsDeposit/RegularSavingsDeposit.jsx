import React from "react";
import RegularSavingsDepositLogic from "./RegularSavingsDepositLogic";
import blueRial from "../../assets/images/blue-rial.png";
import grayRial from "../../assets/images/gray-rial.png";
import { FormProvider as Form } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Box,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import Cost from "../Cost/Cost";

const ConditionalView = ({ paths, children }) => {
    const {
        state: { depositType },
    } = useLocation();

    return paths?.includes(depositType) ? children : null;
};

const RegularSavingsDeposit = () => {
    const {
        state: { title },
    } = useLocation();

    const { classes, styles } = RegularSavingsDepositLogic();
    const mode = true;

    return (
        <Box className={classes.container}>
            <Form className={classes.formProvider}>
                <form className={classes.form}>
                    <Box className={classes.top}>
                        <Box className={classes.head}>
                            <Box
                                component="section"
                                className={classes.titleContainer}
                            >
                                <Typography className={classes.titleHeading}>
                                    {title}
                                </Typography>
                            </Box>
                            <Box className={classes.info}>
                                <Box
                                    component="section"
                                    className={classes.costsContainer}
                                >
                                    <ConditionalView
                                        paths={[
                                            "/saving-deposit",
                                            "/short-investment",
                                        ]}
                                    >
                                        <Cost
                                            title="هزینه افتتاح حساب"
                                            price={100000}
                                        />
                                        <Cost
                                            title="هزینه صدور و ارسال کارت"
                                            price={51000}
                                        />
                                    </ConditionalView>
                                    <ConditionalView
                                        paths={["/long-investment"]}
                                    >
                                        <Cost
                                            title="هزینه افتتاح حساب"
                                            price={100000}
                                        />
                                    </ConditionalView>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={classes.body}>
                            <ConditionalView paths={["/saving-deposit"]}>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                    >
                                        استان
                                        <Box component="span"></Box>
                                    </Button>
                                    {false && (
                                        <Box
                                            component="span"
                                            className={classes.errorMessage}
                                        >
                                            پیام تستی
                                        </Box>
                                    )}
                                </Box>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                    >
                                        شهر
                                        <Box component="span"></Box>
                                    </Button>
                                    {false && (
                                        <Box
                                            component="span"
                                            className={classes.errorMessage}
                                        >
                                            پیام تستی
                                        </Box>
                                    )}
                                </Box>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                    >
                                        شعبه افتتاح حساب
                                        <Box component="span"></Box>
                                    </Button>
                                    {false && (
                                        <Box
                                            component="span"
                                            className={classes.errorMessage}
                                        >
                                            پیام تستی
                                        </Box>
                                    )}
                                </Box>
                                {mode && (
                                    <React.Fragment>
                                        <Box className={classes.fieldWrapper}>
                                            <Button
                                                disableElevation
                                                disableRipple
                                                variant="text"
                                                sx={styles.button}
                                            >
                                                سپرده برداشت وجه
                                                <Box component="span"></Box>
                                            </Button>
                                            {false && (
                                                <Box
                                                    component="span"
                                                    className={
                                                        classes.errorMessage
                                                    }
                                                >
                                                    پیام تستی
                                                </Box>
                                            )}
                                        </Box>
                                        <Box className={classes.textField}>
                                            <Box
                                                className={classes.inputWrapper}
                                            >
                                                <TextField
                                                    type="text"
                                                    size="small"
                                                    sx={styles.textField}
                                                    placeholder="مبلغ افتتاحیه"
                                                />
                                                <img
                                                    src={blueRial}
                                                    className={classes.rial}
                                                />
                                            </Box>
                                            <Box
                                                component="span"
                                                className={
                                                    classes.messageContainer
                                                }
                                            >
                                                <Typography
                                                    className={classes.message}
                                                >
                                                    حداقل مبلغ برای افتتاح حساب
                                                    1000000 ریال میباشد.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </ConditionalView>
                            <ConditionalView paths={["/short-investment"]}>
                                {mode ? (
                                    <React.Fragment>
                                        <Box className={classes.textField}>
                                            <Box
                                                className={classes.inputWrapper}
                                            >
                                                <TextField
                                                    type="text"
                                                    size="small"
                                                    sx={styles.textField}
                                                    placeholder="مبلغ افتتاحیه"
                                                />
                                                <img
                                                    src={blueRial}
                                                    className={classes.rial}
                                                />
                                            </Box>
                                            <Box
                                                component="span"
                                                className={
                                                    classes.messageContainer
                                                }
                                            >
                                                <Typography
                                                    className={classes.message}
                                                >
                                                    حداقل مبلغ برای افتتاح حساب
                                                    1000000 ریال میباشد.
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={classes.fieldWrapper}>
                                            <Button
                                                disableElevation
                                                disableRipple
                                                variant="text"
                                                sx={styles.button}
                                            >
                                                شعبه افتتاح حساب
                                                <Box component="span"></Box>
                                            </Button>
                                            {false && (
                                                <Box
                                                    component="span"
                                                    className={
                                                        classes.errorMessage
                                                    }
                                                >
                                                    پیام تستی
                                                </Box>
                                            )}
                                        </Box>
                                        <Box className={classes.fieldWrapper}>
                                            <Button
                                                disableElevation
                                                disableRipple
                                                variant="text"
                                                sx={styles.button}
                                            >
                                                سپرده برداشت وجه
                                                <Box component="span"></Box>
                                            </Button>
                                            {false && (
                                                <Box
                                                    component="span"
                                                    className={
                                                        classes.errorMessage
                                                    }
                                                >
                                                    پیام تستی
                                                </Box>
                                            )}
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <Box className={classes.fieldWrapper}>
                                        <Button
                                            disableElevation
                                            disableRipple
                                            variant="text"
                                            sx={styles.button}
                                        >
                                            سپرده واریز سود
                                            <Box component="span"></Box>
                                        </Button>
                                        {false && (
                                            <Box
                                                component="span"
                                                className={classes.errorMessage}
                                            >
                                                پیام تستی
                                            </Box>
                                        )}
                                    </Box>
                                )}
                            </ConditionalView>
                            <ConditionalView paths={["/long-investment"]}>
                                <Box className={classes.textField}>
                                    <Box className={classes.inputWrapper}>
                                        <TextField
                                            type="text"
                                            size="small"
                                            sx={styles.textField}
                                            placeholder="مبلغ افتتاحیه"
                                        />
                                        <img
                                            src={blueRial}
                                            className={classes.rial}
                                        />
                                    </Box>
                                    <Box
                                        component="span"
                                        className={classes.messageContainer}
                                    >
                                        <Typography className={classes.message}>
                                            حداقل مبلغ برای افتتاح حساب 1000000
                                            ریال میباشد.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                    >
                                        سپرده برداشت وجه
                                        <Box component="span"></Box>
                                    </Button>
                                    {false && (
                                        <Box
                                            component="span"
                                            className={classes.errorMessage}
                                        >
                                            پیام تستی
                                        </Box>
                                    )}
                                </Box>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                    >
                                        سپرده واریز سود
                                        <Box component="span"></Box>
                                    </Button>
                                    {false && (
                                        <Box
                                            component="span"
                                            className={classes.errorMessage}
                                        >
                                            پیام تستی
                                        </Box>
                                    )}
                                </Box>
                            </ConditionalView>
                        </Box>
                    </Box>
                    <Box className={classes.bottom}>
                        <Box
                            component="section"
                            className={classes.cardIssuanceContainer}
                        >
                            <ConditionalView
                                paths={["/saving-deposit", "/short-investment"]}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            id="card-issuance"
                                            disableRipple
                                            size="small"
                                            sx={styles.checkbox}
                                        />
                                    }
                                    label="درخواست صدور کارت برای این سپرده را دارم."
                                    sx={styles.FormControlLabel}
                                />
                            </ConditionalView>
                        </Box>
                        <Box component="section" className={classes.payment}>
                            <Button className={classes.paymentBtn}>
                                پرداخت
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Form>
        </Box>
    );
};

export default RegularSavingsDeposit;
