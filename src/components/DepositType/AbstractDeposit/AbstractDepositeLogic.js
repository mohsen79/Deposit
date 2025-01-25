import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  container: {
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "5px 10px",
  },
  selectedContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "5px 10px",
    border: "1px solid #0564aa",
  },
  title: {
    color: "#a9a8aa",
    fontSize: "14px",
  },
  description: {
    color: "#a9a8aa",
    fontSize: "12px",
  },
  selectedTitle: {
    color: "#0564aa",
  },
});

const AbstractDepositLogic = () => {
  const classes = useStyle();
  /*---------------------- states ------------------- */

  /*---------------------- functions ------------------- */

  /*---------------------- data ------------------- */

  return { classes };
};

export default AbstractDepositLogic;
