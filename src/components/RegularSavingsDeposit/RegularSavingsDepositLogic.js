import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        height: "100vh",
        padding: "16px",
        userSelect: "none",
    },
    formProvider: {
        width: "100%",
        height: "100%",
    },
    form: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    top: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    // (head)
    head: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    // title container
    titleContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "42px",
        width: "100%",
    },
    titleHeading: {
        fontSize: "12px",
        color: "#565656",
    },
    // (info)
    info: {
        width: "100%",
        height: "94px",
    },
    // costs container
    costsContainer: {
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "6px",
        backgroundColor: "#F8F8F8",
    },
    // (body)
    body: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },

    // require fields
    fieldWrapper: {
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        height: "56px",
    },
    errorMessage: {
        position: "absolute",
        right: "10px",
        bottom: "-22px",
        fontSize: "11px",
        color: "#eb1520",
    },
    textField: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        width: "100%",
        height: "77px",
    },
    inputWrapper: {
        width: "100%",
        position: "relative",
    },
    rial: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "10px",
    },
    messageContainer: {
        padding: "2px 12px",
    },
    message: {
        fontSize: "11px",
        color: "#989799",
    },
    // (footer)
    bottom: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        height: "78px",
    },
    // card issuanace
    cardIssuanceContainer: {
        width: "100%",
        height: "24px",
        display: "flex",
        alignItems: "center",
    },
    checkboxLabel: {
        display: "block",
        position: "relative",
        paddingLeft: 35,
        marginRight: 30,
        cursor: "pointer",
        fontSize: 14,
        userSelect: "none",
        color: "#565656",
        "&:hover $checkmark": {
            backgroundColor: "#ccc",
        },
    },
    // payment
    payment: {
        height: "42px",
        width: "100%",
    },
    paymentBtn: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        border: "none",
        borderRadius: "12px",
        outline: "none",
        color: "#FFFFFF",
        backgroundColor: "#0564AA",
    },
});

const styles = {
    textField: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        width: "100%",
        height: "48px",
        backgroundColor: "inherit",
        border: "1px solid #989799",
        borderRadius: "12px",
        outline: "none",
        fontSize: "14px",
        color: "#A9A8AA",
        "& .MuiOutlinedInput-root": {
            width: "100%",
            height: "100%",
            "& fieldset": {
                border: "none",
            },
        },
        "& input": {
            width: "100%",
            padding: "0",
            color: "#989799",
        },
        "& input::placeholder": {
            color: "#989799",
            opacity: "1",
            fontSize: "14px",
        },
    },

    inputLabel: {
        textAlign: "right",
        transformOrigin: "top right",
        color: "#989799",
        left: "unset",
        right: 28,
        "&.MuiInputLabel-shrink": {
            color: "#989799",
            transformOrigin: "top right",
        },
    },

    select: {
        "& .MuiOutlinedInput-notchedOutline": {
            textAlign: "right",
            right: 0,
            borderColor: "#989799",
            borderRadius: "12px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#989799",
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#989799",
            borderWidth: "1px",
        },
        "& .MuiSelect-select": {
            color: "#565656",
        },
    },

    button: {
        all: "unset",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        width: "100%",
        height: "48px",
        backgroundColor: "inherit",
        border: "1px solid #989799",
        borderRadius: "12px",
        fontSize: "14px",
        color: "#A9A8AA",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "inherit",
        },
    },

    FormControlLabel: {
        display: "block",
        position: "relative",
        paddingLeft: "35px",
        marginRight: "0px",
        cursor: "pointer",
        userSelect: "none",
        "& .MuiTypography-root": {
            fontSize: "14px",
            color: "#565656",
        },
    },

    checkbox: {
        padding: "0",
        position: "relative",
        marginLeft: "8px",
        color: "#565656",
        "&.Mui-checked": {
            color: "#00bba7",
        },
        "& .MuiSvgIcon-root": {
            fontSize: 22,
        },
    },
};

const RegularSavingsDepositLogic = () => {
    const classes = useStyle();
    /*---------------------- states ------------------- */
    const [province, setProvince] = useState("");
    const [provinces, setProvinces] = useState(["تهران", "گیلان", "یزد"]);
    const [city, setCity] = useState("");
    const [cities, setCities] = useState(["ورامین", "شهریار", "دماوند"]);

    /*---------------------- functions ------------------- */

    const handleProvinceChange = (event) => {
        setProvince(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    /*---------------------- data ------------------- */

    const selections = [
        {
            id: "choose-province-select-label",
            label: "استان",
            value: province,
            values: provinces,
            handleChange: handleProvinceChange,
        },
        {
            id: "choose-city-select-label",
            label: "شهر",
            value: city,
            values: cities,
            handleChange: handleCityChange,
        },
    ];

    return {
        classes,
        styles,
        province,
        provinces,
        handleProvinceChange,
        selections,
    };
};

export default RegularSavingsDepositLogic;
