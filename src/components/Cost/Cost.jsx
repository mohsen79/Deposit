import React from "react";
import grayRial from "../../assets/images/gray-rial.png";
import { Box, Typography } from "@mui/material";
import CostLogic from "./CostLogic";

const Cost = ({ title , price }) => {
    const { classes } = CostLogic();

    return (
        <Box className={classes.cost}>
            <Typography className={classes.title}>
                {title}
            </Typography>
            <Box className={classes.amountContainer}>
                <Typography className={classes.amount}>
                    {price}
                </Typography>
                <img src={grayRial} alt="rial"/>
            </Box>
        </Box>
    );
};

export default Cost;
