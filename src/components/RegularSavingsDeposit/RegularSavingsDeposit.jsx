import React from "react";
import RegularSavingsDepositLogic from "./RegularSavingsDepositLogic";
import { teal } from '@mui/material/colors';
import {
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Checkbox,
} from "@mui/material";

const RegularSavingsDeposit = () => {
    const { classes, selections } = RegularSavingsDepositLogic();

    return (
        <div className={classes.container}>
            <Typography className={classes.titleHeading}>
                سپرده قرض الحسنه پس انداز عادی (دیجیتال)
            </Typography>
            <section className={classes.costsContainer}>
                <div className={classes.costsSection}>
                    <Typography className={classes.costsTypography}>
                        هزینه افتتاح حساب:
                    </Typography>
                    <Typography className={classes.costsAmount}>
                        {1_000_000} ریال
                    </Typography>
                </div>
                <div className={classes.costsSection}>
                    <Typography className={classes.costsTypography}>
                        هزینه صدور و ارسال کارت
                    </Typography>
                    <Typography className={classes.costsAmount}>
                        {51_000} ریال
                    </Typography>
                </div>
            </section>
            <section className={classes.selectProvince}>
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
                    {false && <span className={classes.errorMessage}>پیام تستی</span>}
                </div>
                <div className={classes.fieldWrapper}>
                    <button className={classes.btn}>
                        سپرده برداشت وجه
                        <span></span>
                    </button>
                    {false && <span className={classes.errorMessage}>پیام تستی</span>}
                </div>
                <div className={classes.inputWrapper}>
                    <input
                        type="text"
                        size="small"
                        className={classes.textField}
                        placeholder="مبلغ افتتاحیه"
                    />
                    <span className={classes.rial}>ریال</span>
                    <span className={classes.message}>حداقل مبلغ برای افتتاح حساب 1000000 ریال میباشد.</span>
                </div>
            </section>
            <section className={classes.paymentContainer}>
                <span className={classes.checkboxWrapper}>
                    <Checkbox
                        id="card-issuance"
                        type="checkbox"
                        sx={{
                            color: teal[800],
                            "&.Mui-checked": {
                                color: teal[600],
                            },
                        }}
                    />
                    <label className={classes.checkboxLabel} htmlFor="card-issuance">
                        درخواست صدور کارت برای این سپرده را دارم.
                    </label>
                </span>
                <button className={classes.payment}>پرداخت</button>
            </section>
        </div>
    );
};

export default RegularSavingsDeposit;
