import AbstractDepositLogic from "./AbstractDepositeLogic";
import { Box, Typography } from "@mui/material";

export default function AbstractDeposit({ selected, title, description }) {
  const { classes } = AbstractDepositLogic();

  return (
    <Box
      className={
        selected === true ? classes.selectedContainer : classes.container
      }
    >
      <Typography
        className={selected === true ? classes.selectedTitle : classes.title}
      >
        {title}
      </Typography>
      <Typography className={classes.description}>{description}</Typography>
    </Box>
  );
}
