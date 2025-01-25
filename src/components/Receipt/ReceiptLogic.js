import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    flexCol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    // container
    container: {
        extend: "flexCol",
        width: "100%",
        height: "100vh",
        padding: "16px",
    },
    topIcon: {
        fontSize: "50px",
        color: "#2CBDCF",
    },
    middleIcon: {
        fontSize: "140px",
        color: "#F9BF59",
    },
    statement: {
        extend: "flexCol",
        gap: "32px",
        width: "300px",
    },
    successMessage: {
        color: "#565656",
        fontSize: "16px",
    },
    success: {
        color: "#00983D",
    },
    responseMessage: {
        fontSize: "12px",
        color: "#0564AA",
    },
    return: {
        height: "42px",
        width: "100%",
    },
    returnButton: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        border: "1px solid #0564AA",
        borderRadius: "12px",
        outline: "none",
        color: "#0564AA",
    },
});

const ReceiptLogic = () => {
    const classes = useStyle();

    const returnToApp = () => window.location.replace("https://www.google.com");

    return { classes, returnToApp };
};

export default ReceiptLogic;
