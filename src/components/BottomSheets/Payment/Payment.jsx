import { Global } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import PaymentLogic from "./PaymentLogic";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor: grey[100],
    ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.background.default,
    }),
}));

const rtlTheme = createTheme({
    direction: "rtl",
    typography: {
        walet: {
            color: "#989799",
        },
    },
});

const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.applyStyles("dark", {
        backgroundColor: grey[800],
    }),
}));

const Puller = styled("div")(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: grey[300],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
    ...theme.applyStyles("dark", {
        backgroundColor: grey[900],
    }),
}));

export default function Payment(props) {
    const { classes } = PaymentLogic();
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const branches = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
        { value: "3", label: "3" },
    ];

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        // height: "443px",
                        overflow: "visible",
                    },
                }}
            />
            <Box sx={{ textAlign: "center", pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: false,
                }}
            >
                <StyledBox
                    sx={{
                        position: "absolute",
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography
                        align="center"
                        sx={{ p: 3, color: "#0564AA", height: "64px" }}
                    >
                        پرداخت با کیف
                    </Typography>
                </StyledBox>
                <Box className={classes.container}>
                    <ThemeProvider theme={rtlTheme}>
                        <Box className={classes.waletInfo}>
                            <Box className={classes.waletItems}>
                                <Typography
                                    variant="walet"
                                    sx={{ fontSize: "12px" }}
                                >
                                    موجودی کیف:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#00983D",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "15px",
                                    }}
                                >
                                    ۱۲۰۰۰۰۰
                                    <SearchIcon sx={{ color: "#989799" }} />
                                </Typography>
                            </Box>
                            <Box className={classes.waletItems}>
                                <Typography
                                    variant="walet"
                                    sx={{ fontSize: "12px" }}
                                >
                                    هزینه استعلام:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#565656",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "15px",
                                    }}
                                >
                                    ۱۲۰۰۰۰۰
                                    <SearchIcon sx={{ color: "#989799" }} />
                                </Typography>
                            </Box>
                            <Box className={classes.waletItems}>
                                <Typography
                                    variant="walet"
                                    sx={{ fontSize: "12px" }}
                                >
                                    نام کیف پول:
                                </Typography>
                                <Typography
                                    sx={{ color: "#565656", fontSize: "12px" }}
                                >
                                    امید بانک
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={classes.passwordSection}>
                            <TextField
                                variant="outlined"
                                placeholder="رمز کیف پول"
                                fullWidth
                                className={classes.textField}
                            />
                            <Typography
                                sx={{
                                    color: "#989799",
                                    paddingRight: "8px",
                                    alignSelf: "start",
                                    fontSize: "11px",
                                }}
                            >
                                رمز ۸ رقمی کیف پول:
                            </Typography>
                        </Box>
                        <Box className={classes.buttons}>
                            <Button
                                variant="contained"
                                sx={{ background: "#0564AA" }}
                            >
                                پرداخت با کیف پول
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ borderColor: "#0564AA" }}
                            >
                                انصراف
                            </Button>
                        </Box>
                    </ThemeProvider>
                </Box>
            </SwipeableDrawer>
        </Root>
    );
}
