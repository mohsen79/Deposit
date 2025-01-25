import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        padding: "16px",
    },
    // (head)
    head: {
        width: "100%",
        height: "42px",
        marginBottom: "12px",
    },
    // title container
    titleContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
    },
    titleHeading: {
        fontSize: "12px",
        color: "#565656",
    },
    // (info)
    info: {
        width: "100%",
        height: "94px",
        marginBottom: "12px",
    },
    // costs container
    costsContainer: {
        width: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "6px",
        backgroundColor: "#F8F8F8",
    },
    costsSection: {
        width: "100%",
        height: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    costTypography: {
        fontSize: "12px",
        color: "#989799",
    },
    costAmount: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#1F99A7",
    },
    // (body)
    body: {
        width: "100%",
        height: "311px",
        marginBottom: "53px",
    },
    // filter branches
    filterBranches: {
        width: "100%",
        height: "77px",
        marginBottom: "15px",
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        "& .MuiSelect-icon": {
            display: "none !important",
        },
    },
    // require fields
    requireFields: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
    },
    fieldWrapper: {
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        height: "56px",
    },
    btn: {
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
    },
    errorMessage: {
        position: "absolute",
        right: "10px",
        bottom: "-20px",
        fontSize: "11px",
        color: "#eb1520",
    },
    inputWrapper: {
        extend: "fieldWrapper",
    },
    textField: {
        extend: "btn",
        "&::placeholder": {
            color: "#989799",
        },
    },
    rial: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "10px",
        color: "#1F99A7",
    },
    message: {
        extend: "errorMessage",
        color: "#989799",
    },
    // (footer)
    footer: {
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
    checkbox: {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: 0,
        width: 0,
        "&:checked + $checkmark": {
            backgroundColor: "#00bba7",
            borderRadius: 2,
        },
        "&:checked + $checkmark:after": {
            display: "block",
        },
    },
    checkmark: {
        position: "absolute",
        top: 5,
        right: -30,
        height: 20,
        width: 20,
        backgroundColor: "#eee",
        borderRadius: 2,
        "&:after": {
            content: '""',
            position: "absolute",
            display: "none",
            left: 7,
            top: 4,
            width: 3,
            height: 8,
            border: "solid white",
            borderWidth: "0 3px 3px 0",
            transform: "rotate(45deg)",
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

    return { classes, province, provinces, handleProvinceChange, selections };
};

export default RegularSavingsDepositLogic;
