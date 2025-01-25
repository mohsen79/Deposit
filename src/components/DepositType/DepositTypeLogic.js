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
  description: {
    color: "#565656",
  },
  emphasizedPart: {
    fontWeight: "bold",
    color: "#0564aa",
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
});

const RegularSavingsDepositLogic = () => {
  const classes = useStyle();
  /*---------------------- states ------------------- */

  /*---------------------- functions ------------------- */

  /*---------------------- data ------------------- */

  return { classes };
};

export default RegularSavingsDepositLogic;
