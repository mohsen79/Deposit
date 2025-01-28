import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    cost: {
        width: "100%",
        height: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: "12px",
        color: "#989799",
    },
    amountContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    amount: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#1F99A7",
    },
});

const CostLogic = () => {
    const classes = useStyle();

    return { classes };
};

export default CostLogic;
