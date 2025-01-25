import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    textField: {
        direction: "rtl",
        textAlign: "right",
        borderRadius: 12,
        borderColor: "#989799",
        border: "none",
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
        },
        "& .MuiInputBase-input": {
            padding: "12px",
        },
    },
    buttons: {
        height: "92px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        "& button": {
            borderRadius: 12,
            height: "42px",
        },
    },
    container: {
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        justifyContent: "space-between",
        alignItems: "center",
    },
    waletInfo: {
        width: "343px",
        height: "116px",
        background: "#F8F8F8",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        borderRadius: "6px",
        justifyContent: "center",
        padding: "16px",
    },
    waletItems: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    passwordSection: {
        width: "100%",
    },
});

const PaymentLogic = () => {
    document.title = "پروفایل";
    /*---------------------- customHooks ------------------- */

    /*---------------------- useContext ------------------- */

    /*---------------------- css ------------------- */
    const classes = useStyle();
    /*---------------------- states ------------------- */

    /*---------------------- functions ------------------- */

    /*---------------------- UseEffect -------------------*/

    /*------------------------------------------------- */
    return { classes };
};

export default PaymentLogic;
