import AbstractDepositLogic from "./AbstractDepositeLogic";
import { Box, Typography } from "@mui/material";

export default function AbstractDeposit({
    selected,
    title,
    description,
    setTitle,
    path,
    setPath,
    type,
    setDepositType
}) {
    const { classes } = AbstractDepositLogic();
    const handleClick = () => {
        setTitle(title);
        setPath(path);
        setDepositType(type);
    };

    return (
        <Box
            onClick={handleClick}
            className={
                selected === true
                    ? classes.selectedContainer
                    : classes.container
            }
        >
            <Typography
                className={
                    selected === true ? classes.selectedTitle : classes.title
                }
            >
                {title}
            </Typography>
            <Typography className={classes.description}>
                {description}
            </Typography>
        </Box>
    );
}
