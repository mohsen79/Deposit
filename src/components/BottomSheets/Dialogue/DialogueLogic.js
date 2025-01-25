import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    dialogue: {
        width: "343px",
        height: "158px",
        background: "yellow",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    header: {
        width: "100%",
        height: "48px",
        background: "blue",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        width: "100%",
        height: "100%",
        background: "pink",
        display: "flex",
        justifyContent: "center",
    },
    exlamation: {
        color: "red",
        background: "black",
        height: "100%",
    },
    texts: {
        height: "54px",
        background: "white",
        "& p": {
            lineHeight: "18px",
            fontSize: "12px",
        },
    },
});

const DialogueLogic = () => {
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

export default DialogueLogic;
