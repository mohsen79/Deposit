import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/joy";
import DialogueLogic from "./DialogueLogic";

export default function Dialogue() {
    const [open, setOpen] = React.useState(false);
    const { classes } = DialogueLogic();

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                Open modal
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: "md",
                        p: 1,
                        boxShadow: "lg",
                    }}
                >
                    <Box className={classes.dialogue}>
                        <Box className={classes.header}>
                            <Box className={classes.close}>
                                <ModalClose
                                    variant="plain"
                                    // sx={{ m: 1, background: "red" }}
                                />
                            </Box>
                            <Box className={classes.icon}>
                                <SearchIcon className={classes.exlamation} />
                            </Box>
                        </Box>
                        <Box className={classes.texts}>
                            <Typography>کمبود موجودی</Typography>
                            <Typography>
                                لطفا کیف پول خود را حداقل ۱۰۰۰۰۰ ریال بابت هزینه
                                های افتتاح حساب شارژ کنید.
                            </Typography>
                        </Box>
                    </Box>
                    {/* <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{ fontWeight: "lg", mb: 1 }}
                    >
                        This is the modal title
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Make sure to use <code>aria-labelledby</code> on the
                        modal dialog with an optional{" "}
                        <code>aria-describedby</code> attribute.
                    </Typography> */}
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}
