import React from "react";
import RegularSavingsDepositLogic from "./RegularSavingsDepositLogic";
import {
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";

const RegularSavingsDeposit = () => {
    const { classes, selections } = RegularSavingsDepositLogic();

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <section className={classes.titleContainer}>
                    <Typography className={classes.titleHeading}>
                        سپرده قرض الحسنه پس انداز عادی (دیجیتال)
                    </Typography>
                </section>
            </div>
            <div className={classes.info}>
                <section className={classes.costsContainer}>
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
                </section>
            </div>
            <div className={classes.body}>
                <section className={classes.filterBranches}>
                    {selections.map((selection) => {
                        return (
                            <FormControl fullWidth>
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
                                        "& .MuiOutlinedInput-notchedOutline": {
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
                                    {selection.values.map((province, index) => (
                                        <MenuItem key={index} value={province}>
                                            {province}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        );
                    })}
                </section>
                <section className={classes.requireFields}>
                    <div className={classes.fieldWrapper}>
                        <button className={classes.btn}>
                            شعبه افتتاح حساب
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
                </section>
            </div>
            <div className={classes.footer}>
                <section className={classes.cardIssuanceContainer}>
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
                </section>
                <section className={classes.payment}>
                    <button className={classes.paymentBtn}>پرداخت</button>
                </section>
            </div>
        </div>
    );
};

export default RegularSavingsDeposit;
