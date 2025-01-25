import { Global } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import {
    FormControl,
    FormControlLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { createUseStyles } from "react-jss";

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
});

const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.applyStyles("dark", {
        backgroundColor: grey[800],
    }),
}));

const useStyles = createUseStyles({
    textField: {
        direction: "rtl",
        textAlign: "right",
        borderRadius: 12,
        border: "none",
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
        },
        "& .MuiInputBase-input": {
            padding: "12px",
        },
        // height: "48px",
    },
    formControl: {
        direction: "rtl",
        overflow: "hidden auto",
    },
    radioGroup: {
        width: "100%",
        height: "230px",
        margin: "24px 0",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
    },
    radioButtons: {
        width: "100%",
        borderBottom: "1px solid #D9D9D9",
        height: "150px",
        "&:last-child": {
            border: "none",
        },
    },
    buttons: {
        height: "92px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        "& button": {
            borderRadius: 12,
            height: "42px",
        },
    },
    container: {
        height: "100%",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

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

export default function Branch(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const branches = [
        { value: "1", label: "شعبه پونک شمالی" },
        { value: "2", label: "شعبه جنت آباد" },
        { value: "3", label: "شعبه طرشت" },
        { value: "3", label: "شعبه سعادت آباد" },
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
                        height: "523px",
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
                        شعبه افتتاح سپرده
                    </Typography>
                </StyledBox>
                <Box className={classes.container}>
                    <ThemeProvider theme={rtlTheme}>
                        <CssBaseline />
                        <TextField
                            variant="outlined"
                            placeholder="جستجو ..."
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            className={classes.textField}
                        />
                        <Box className={classes.radioGroup}>
                            <FormControl className={classes.formControl}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    className={classes.radioGroup}
                                >
                                    {branches.map((branch) => (
                                        <FormControlLabel
                                            value={branch.value}
                                            control={<Radio />}
                                            label={branch.label}
                                            className={classes.radioButtons}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box className={classes.buttons}>
                            <Button
                                variant="contained"
                                sx={{ background: "#0564AA" }}
                            >
                                تایید
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
