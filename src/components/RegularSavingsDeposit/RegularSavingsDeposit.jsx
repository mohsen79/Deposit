import React from "react";
import RegularSavingsDepositLogic from "./RegularSavingsDepositLogic";
import blueRial from "../../assets/images/blue-rial.png";
import grayRial from "../../assets/images/gray-rial.png";
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

const ConditionalView = ({ paths, children }) => {
    const { pathname } = useLocation();

    return paths?.includes(pathname) ? children : null;
};

const RegularSavingsDeposit = () => {
    const { classes, selections, styles } = RegularSavingsDepositLogic();
    const mode = "one";

    return (
        <Box className={classes.container}>
            <Box className={classes.head}>
                <Box component="section" className={classes.titleContainer}>
                    <ConditionalView paths={["/saving-deposit"]}>
                        <Typography className={classes.titleHeading}>
                            سپرده قرض الحسنه پس انداز عادی (دیجیتال)
                        </Typography>
                    </ConditionalView>
                    <ConditionalView paths={["/short-investment"]}>
                        <Typography className={classes.titleHeading}>
                            سپرده سرمایه گذاری کوتاه مدت
                        </Typography>
                    </ConditionalView>
                    <ConditionalView paths={["/long-investment"]}>
                        <Typography className={classes.titleHeading}>
                            سپرده سرمایه گذاری بلند مدت
                        </Typography>
                    </ConditionalView>
                </Box>
            </Box>
            <Box className={classes.info}>
                <Box component="section" className={classes.costsContainer}>
                    <ConditionalView
                        paths={["/saving-deposit", "/short-investment"]}
                    >
                        <Box className={classes.costsSection}>
                            <Typography className={classes.costTypography}>
                                هزینه افتتاح حساب:
                            </Typography>
                            <Box className={classes.amountWrapper}>
                                <Typography className={classes.costAmount}>
                                    {1_000_000}
                                </Typography>
                                <img src={grayRial} />
                            </Box>
                        </Box>
                        <Box className={classes.costsSection}>
                            <Typography className={classes.costTypography}>
                                هزینه صدور و ارسال کارت
                            </Typography>
                            <Box className={classes.amountWrapper}>
                                <Typography className={classes.costAmount}>
                                    {51_000}
                                </Typography>
                                <img src={grayRial} />
                            </Box>
                        </Box>
                    </ConditionalView>
                    <ConditionalView paths={["/long-investment"]}>
                        <Box className={classes.costsSection}>
                            <Typography className={classes.costTypography}>
                                هزینه افتتاح حساب:
                            </Typography>
                            <Box className={classes.amountWrapper}>
                                <Typography className={classes.costAmount}>
                                    {1_000_000}
                                </Typography>
                                <img src={grayRial} />
                            </Box>
                        </Box>
                    </ConditionalView>
                </Box>
            </Box>
            <Box className={classes.body}>
                <Box component="section" className={classes.filterBranches}>
                    <ConditionalView paths={["/saving-deposit"]}>
                        {selections.map((selection, index) => {
                            return (
                                <FormControl fullWidth key={index}>
                                    <InputLabel
                                        id={selection.id}
                                        sx={styles.inputLabel}
                                    >
                                        {selection.label}
                                    </InputLabel>
                                    <Select
                                        size="medium"
                                        labelId={selection.id}
                                        value={selection.value}
                                        label={selection.label}
                                        onChange={selection.handleChange}
                                        sx={styles.select}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    "& .MuiMenuItem-root": {
                                                        color: "#989799",
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {selection.values.map(
                                            (province, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={province}
                                                >
                                                    {province}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                            );
                        })}
                    </ConditionalView>
                    <ConditionalView paths={["/short-investment"]}>
                        {mode === "one" ? (
                            <Box className={classes.inputWrapper}>
                                <TextField
                                    type="text"
                                    size="small"
                                    sx={styles.textField}
                                    placeholder="مبلغ افتتاحیه"
                                />
                                <img src={blueRial} className={classes.rial} />
                                <Box
                                    component="span"
                                    className={classes.message}
                                >
                                    حداقل مبلغ برای افتتاح حساب 1000000 ریال
                                    میباشد.
                                </Box>
                            </Box>
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
                        <Box className={classes.inputWrapper}>
                            <TextField
                                type="text"
                                size="small"
                                sx={styles.textField}
                                placeholder="مبلغ افتتاحیه"
                            />
                            <img src={blueRial} className={classes.rial} />
                            <Box component="span" className={classes.message}>
                                حداقل مبلغ برای افتتاح حساب 1000000 ریال میباشد.
                            </Box>
                        </Box>
                    </ConditionalView>
                </Box>
                <Box component="section" className={classes.requireFields}>
                    <ConditionalView paths={["/saving-deposit"]}>
                        <Box className={classes.fieldWrapper}>
                            <Button
                                disableElevation
                                disableRipple
                                variant="text"
                                sx={styles.button}
                            >
                                شعبه افتتاح سپرده
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
                        {mode === "one" && (
                            <>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                        className={classes.btn}
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
                                    <Box
                                        component="span"
                                        className={classes.message}
                                    >
                                        حداقل مبلغ برای افتتاح حساب 1000000 ریال
                                        میباشد.
                                    </Box>
                                </Box>
                            </>
                        )}
                    </ConditionalView>
                    <ConditionalView paths={["/short-investment"]}>
                        {mode === "one" && (
                            <>
                                <Box className={classes.fieldWrapper}>
                                    <Button
                                        disableElevation
                                        disableRipple
                                        variant="text"
                                        sx={styles.button}
                                    >
                                        شعبه افتتاح سپرده
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
                            </>
                        )}
                    </ConditionalView>
                    <ConditionalView paths={["/long-investment"]}>
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
            <Box className={classes.footer}>
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
                    <Button className={classes.paymentBtn}>پرداخت</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default RegularSavingsDeposit;
