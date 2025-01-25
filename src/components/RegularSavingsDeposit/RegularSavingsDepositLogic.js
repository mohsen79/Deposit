import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        padding: "16px",
    },
    titleHeading: {
        fontSize: "12px",
        marginBottom: "20px",
        color: "#565656",
    },
    costsContainer: {
        width: "100%",
        height: "94px",
        marginBottom: "20px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "6px",
        backgroundColor: "#F8F8F8",
    },
    costsSection: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    costsTypography: {
        fontSize: "12px",
        color: "#989799",
    },
    costsAmount: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#1F99A7",
    },
    selectProvince: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "40px",
        "& .MuiSelect-icon": {
            display: "none !important",
        },
    },
    requireFields: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
        marginBottom: "60px",
    },
    fieldWrapper: {
        position: "relative",
        width: "100%",
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
        fontSize: "11px",
        color: "#eb1520"
    },
    message: {
        extend: "errorMessage",
        color: "#989799"
    },
    inputWrapper: {
        position: "relative",
        width: "100%",
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
    paymentContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "2px"
    },
    checkboxWrapper: {
        display: "flex",
        alignItems: "center",
        gap: "2px",
    },
    checkboxLabel: {
        color: "#565656",
        fontSize: "14px"
    },
    payment: {
        width: "100%",
        height: "42px",
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
