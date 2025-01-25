import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "center",
        gap: "20px",
        padding: "20px 16px",
        paddingBottom: "50px",
        boxSizing: "border-box",
        height: "100vh",
    },

    abstractDepositesContainer: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        direction: "rtl",
        width: "100%",
    },
    stickToBottom: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        marginTop: "auto",
    },
    termsAndConditionsAgreement: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        gap: "7px",
    },
    noActiveDeposit: {
        width: "100%",
        height: "136px",
        border: "1px dashed #989799",
        borderRadius: "12px",
    },
    continueBtn: {
        backgroundColor: "#0564aa",
        width: "100%",
        borderRadius: "12px",
        height: "42px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
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
    FormControlLabel: {
        display: "block",
        position: "relative",
        paddingLeft: "35px",
        marginRight: "0px",
        cursor: "pointer",
        userSelect: "none",
        "& .MuiTypography-root": {
            fontSize: "14px",
            // color: "#565656",
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

    /*---------------------- functions ------------------- */

    /*---------------------- data ------------------- */

    return { classes,styles };
};

export default RegularSavingsDepositLogic;
