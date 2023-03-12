import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Tooltip,
  Fab,
  Box,
  Typography,
  Modal,
  TextField,
  Stack,
  Avatar,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/system";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoIcon from "@mui/icons-material/Photo";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { CalendarMonth } from "@mui/icons-material";
export default function AddPost() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs:"97%",sm:400},
    bgcolor: theme.palette.background.default,
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box>
      <Tooltip
        sx={{ position: "fixed", bottom: "10px", left: "10px" }}
        title="Add Post"
      >
        <Fab
          onClick={() => {
            handleOpen();
          }}
          color="secondary"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ textAlign: "center" }} variant="h6" component="h2">
            Creat Post
          </Typography>
          <Stack direction="row" sx={{ alignItems: "center", my: "10px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://e0.365dm.com/22/01/768x432/skysports-mohamed-salah-liverpool_5638215.jpg?20220111105345"
            />
            <Typography id="modal-modal-description" sx={{ mx: "10px" }}>
              Mohammed Salah.
            </Typography>
          </Stack>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%", my: 2 }}
            multiline
            rows={4}
            placeholder="what is in your mind?"
            variant="standard"
          />
          <Stack direction={"row"}>
            <InsertEmoticonIcon color="primary" sx={{ mx: 1 }} />
            <PhotoIcon color="secondary" sx={{ mx: 1 }} />
            <VideocamIcon color="success" sx={{ mx: 1 }} />
            <PersonAddIcon color="error" sx={{ mx: 1 }} />
          </Stack>
          <ButtonGroup sx={{ width: "100%", mt: 2 }} variant="contained">
            <Button sx={{ flexGrow: "1" }}>post</Button>
            <Button>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </Box>
  );
}
