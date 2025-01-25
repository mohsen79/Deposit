import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    textField: {
        direction: "rtl",
        textAlign: "right",
        borderRadius: 12,
        border: "none",
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
        },
        "& .MuiInputBase-input": {
            padding: "12px",
        },
        // height: "48px",
    },
    deposits: {
        width: "100%",
        // height: "156px",
        // margin: "24px 0",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        // flexWrap: "nowrap",
    },
    deposit: {
        width: "100%",
        height: "72px",
        borderBottom: "1px solid #D9D9D9",
        display: "flex",
        background: "#F8F8F8",
        alignItems: "center",
        borderRadius: "12px",
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
        padding: "1rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bankIcon: {
        width: "31px",
        height: "34px",
        color: "#69BBF6",
    },
    depositText: {
        width: "100%",
        height: "100%",
    },
    depositTextItem: {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "space-between",
        padding: "12px",
        alignItems: "center",
    },
    rial: {
        width: "20px",
        height: "20px",
    },
    active: {
        border: "1px solid #0564AA",
    },
});

const WithdrawLogic = () => {
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

export default WithdrawLogic;
