import React from "react";
import RegularSavingsDepositLogic from "./RegularSavingsDepositLogic";
import { useLocation } from "react-router-dom";
import {
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";

const ConditionalView = ({ paths, children }) => {
    const { pathname } = useLocation();

    return paths?.includes(pathname) ? children : null;
};

const RegularSavingsDeposit = () => {
    const { classes, selections } = RegularSavingsDepositLogic();
    const mode = "one";

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <section className={classes.titleContainer}>
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
                </section>
            </div>
            <div className={classes.info}>
                <section className={classes.costsContainer}>
                    <ConditionalView
                        paths={["/saving-deposit", "/short-investment"]}
                    >
                        <div className={classes.costsSection}>
                            <Typography className={classes.costTypography}>
                                هزینه افتتاح حساب:
                            </Typography>
                            <Typography className={classes.costAmount}>
                                {1_000_000} ریال
                            </Typography>
                        </div>
                        <div className={classes.costsSection}>
                            <Typography className={classes.costTypography}>
                                هزینه صدور و ارسال کارت
                            </Typography>
                            <Typography className={classes.costAmount}>
                                {51_000} ریال
                            </Typography>
                        </div>
                    </ConditionalView>
                    <ConditionalView paths={["/long-investment"]}>
                        <div className={classes.costsSection}>
                            <Typography className={classes.costTypography}>
                                هزینه افتتاح حساب:
                            </Typography>
                            <Typography className={classes.costAmount}>
                                {1_000_000} ریال
                            </Typography>
                        </div>
                    </ConditionalView>
                </section>
            </div>
            <div className={classes.body}>
                <section className={classes.filterBranches}>
                    <ConditionalView paths={["/saving-deposit"]}>
                        {selections.map((selection, index) => {
                            return (
                                <FormControl fullWidth key={index}>
                                    <InputLabel
                                        id={selection.id}
                                        sx={{
                                            textAlign: "right",
                                            transformOrigin: "top right",
                                            color: "#989799",
                                            left: "unset",
                                            right: 28,
                                            "&.MuiInputLabel-shrink": {
                                                color: "#989799",
                                                transformOrigin: "top right",
                                            },
                                        }}
                                    >
                                        {selection.label}
                                    </InputLabel>
                                    <Select
                                        size="medium"
                                        labelId={selection.id}
                                        value={selection.value}
                                        label={selection.label}
                                        onChange={selection.handleChange}
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline":
                                                {
                                                    textAlign: "right",
                                                    right: 0,
                                                    borderColor: "#989799",
                                                    borderRadius: "12px",
                                                },
                                            "&:hover .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#989799",
                                                },

                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                {
                                                    borderColor: "#989799",
                                                    borderWidth: "1px",
                                                },
                                            "& .MuiSelect-select": {
                                                color: "#565656",
                                            },
                                        }}
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
                            <div className={classes.inputWrapper}>
                                <input
                                    type="text"
                                    size="small"
                                    className={classes.textField}
                                    placeholder="مبلغ افتتاحیه"
                                />
                                <span className={classes.rial}>ریال</span>
                                <span className={classes.message}>
                                    حداقل مبلغ برای افتتاح حساب 1000000 ریال
                                    میباشد.
                                </span>
                            </div>
                        ) : (
                            <div className={classes.fieldWrapper}>
                                <button className={classes.btn}>
                                    سپرده واریز سود
                                    <span></span>
                                </button>
                                {false && (
                                    <span className={classes.errorMessage}>
                                        پیام تستی
                                    </span>
                                )}
                            </div>
                        )}
                    </ConditionalView>
                    <ConditionalView paths={["/long-investment"]}>
                        <div className={classes.inputWrapper}>
                            <input
                                type="text"
                                size="small"
                                className={classes.textField}
                                placeholder="مبلغ افتتاحیه"
                            />
                            <span className={classes.rial}>ریال</span>
                            <span className={classes.message}>
                                حداقل مبلغ برای افتتاح حساب 1000000 ریال میباشد.
                            </span>
                        </div>
                    </ConditionalView>
                </section>
                <section className={classes.requireFields}>
                    <ConditionalView paths={["/saving-deposit"]}>
                        <div className={classes.fieldWrapper}>
                            <button className={classes.btn}>
                                شعبه افتتاح سپرده
                                <span></span>
                            </button>
                            {false && (
                                <span className={classes.errorMessage}>
                                    پیام تستی
                                </span>
                            )}
                        </div>
                        {mode === "one" && (
                            <>
                                <div className={classes.fieldWrapper}>
                                    <button className={classes.btn}>
                                        سپرده برداشت وجه
                                        <span></span>
                                    </button>
                                    {false && (
                                        <span className={classes.errorMessage}>
                                            پیام تستی
                                        </span>
                                    )}
                                </div>
                                <div className={classes.inputWrapper}>
                                    <input
                                        type="text"
                                        size="small"
                                        className={classes.textField}
                                        placeholder="مبلغ افتتاحیه"
                                    />
                                    <span className={classes.rial}>ریال</span>
                                    <span className={classes.message}>
                                        حداقل مبلغ برای افتتاح حساب 1000000 ریال
                                        میباشد.
                                    </span>
                                </div>
                            </>
                        )}
                    </ConditionalView>
                    <ConditionalView paths={["/short-investment"]}>
                        {mode === "one" && (
                            <>
                                <div className={classes.fieldWrapper}>
                                    <button className={classes.btn}>
                                        شعبه افتتاح سپرده
                                        <span></span>
                                    </button>
                                    {false && (
                                        <span className={classes.errorMessage}>
                                            پیام تستی
                                        </span>
                                    )}
                                </div>
                                <div className={classes.fieldWrapper}>
                                    <button className={classes.btn}>
                                        سپرده برداشت وجه
                                        <span></span>
                                    </button>
                                    {false && (
                                        <span className={classes.errorMessage}>
                                            پیام تستی
                                        </span>
                                    )}
                                </div>
                            </>
                        )}
                    </ConditionalView>
                    <ConditionalView paths={["/long-investment"]}>
                        <div className={classes.fieldWrapper}>
                            <button className={classes.btn}>
                                سپرده برداشت وجه
                                <span></span>
                            </button>
                            {false && (
                                <span className={classes.errorMessage}>
                                    پیام تستی
                                </span>
                            )}
                        </div>
                        <div className={classes.fieldWrapper}>
                            <button className={classes.btn}>
                                سپرده واریز سود
                                <span></span>
                            </button>
                            {false && (
                                <span className={classes.errorMessage}>
                                    پیام تستی
                                </span>
                            )}
                        </div>
                    </ConditionalView>
                </section>
            </div>
            <div className={classes.footer}>
                <section className={classes.cardIssuanceContainer}>
                    <ConditionalView paths={["/saving-deposit" , "/short-investment"]}>
                        <label
                            className={classes.checkboxLabel}
                            htmlFor="card-issuance"
                        >
                            <input
                                size="small"
                                id="card-issuance"
                                type="checkbox"
                                className={classes.checkbox}
                            />
                            <span className={classes.checkmark}></span>
                            درخواست صدور کارت برای این سپرده را دارم.
                        </label>
                    </ConditionalView>
                </section>
                <section className={classes.payment}>
                    <button className={classes.paymentBtn}>پرداخت</button>
                </section>
            </div>
        </div>
    );
};

export default RegularSavingsDeposit;
