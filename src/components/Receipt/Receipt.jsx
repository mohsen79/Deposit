import React from "react";
import ReceiptLogic from "./ReceiptLogic";
import { Box, Typography, Button } from "@mui/material";
import { GrThreeD } from "react-icons/gr";
import { BsFillCupHotFill } from "react-icons/bs";

const Receipt = () => {
    const { classes , returnToApp} = ReceiptLogic();

    return (
        <Box className={classes.container}>
            <Box>
                <GrThreeD className={classes.topIcon} />
            </Box>
            <Box>
                <BsFillCupHotFill className={classes.middleIcon} />
            </Box>
            <Box className={classes.statement}>
                <Typography className={classes.successMessage}>
                    عملیات با <span className={classes.success}>"موفقیت"</span>{" "}
                    انجام شد.
                </Typography>
                <Typography className={classes.responseMessage}>
                    کاربر گرامی
                    <br />
                    سپرده قرض الحسنه پس انداز (دیجیتال) به شماره <br />
                    (فلان) در تاریخ (فلان) افتتاح گردید.
                </Typography>
            </Box>
            <Box component="section" className={classes.return}>
                <Button className={classes.returnButton} onClick={returnToApp}>بازگشت به اپ</Button>
            </Box>
        </Box>
    );
};

export default Receipt;
