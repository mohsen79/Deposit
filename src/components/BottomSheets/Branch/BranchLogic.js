import { createUseStyles } from "react-jss";

const ProfileLogic = () => {
  document.title = "پروفایل";
  /*---------------------- customHooks ------------------- */

  /*---------------------- useContext ------------------- */

  /*---------------------- css ------------------- */
  const useStyle = createUseStyles({
    CardTopProfile: {
      borderRadius: " 0 0 30px 30px",
      width: " 100% !important",
      textAlign: "center !important",
      height: "250px",
      marginTop: "-28px",
      backgroundImage:
        "linear-gradient(to top, #003d8c, #164c9a, #265ba7, #356bb5, #437bc2)",
    },
    btn: {
      backgroundColor: theme?.pallet?.Peacock_Blue,
      border: "none",
      fontSize: "20px",
      height: "48px",
      borderRadius: "10px",
      color: theme?.pallet?.colorWithe,
      cursor: "pointer",
    },
    Invitedbtn: {
      backgroundImage: theme?.pallet?.Titan,
      border: "none",
      fontSize: "12px",
      padding: "4px 20px",
      borderRadius: "10px",
      color: theme?.pallet?.colorWithe,
      cursor: "pointer",
    },
    InvitedbtnDis: {
      backgroundColor: "#989898",
      border: "none",
      fontSize: "12px",
      padding: "4px 20px",
      borderRadius: "10px",
      color: theme?.pallet?.Titan,
      cursor: "pointer",
    },
  });
  const classes = useStyle();
  /*---------------------- states ------------------- */

  /*---------------------- functions ------------------- */

  /*---------------------- UseEffect -------------------*/

  /*------------------------------------------------- */
  return {};
};

export default ProfileLogic;
