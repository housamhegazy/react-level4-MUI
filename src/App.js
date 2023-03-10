import React, { useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
 
  Stack,

  Paper,
  Typography,
  Box,
} from "@mui/material";
import getDesignTokens from "./styles/MuTheme";
import Appbar from "components/AppBar";
import { styled } from "@mui/material/styles";
import Listt from "components/List";
import Posts from "components/Posts";

function App() {
 
  const localTheme = localStorage.getItem("localTheme");
  const [mode, setmode] = useState(
    localTheme === null ? "light" : localTheme === "light" ? "light" : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  //dark mood function
  const darkmoodFunc = () => {
    localStorage.setItem(
      "localTheme",
      theme.palette.mode === "dark" ? "light" : "dark"
    );
    setmode(theme.palette.mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <Appbar/>

        <Stack direction="row">
          <Listt darkmoodFunc={darkmoodFunc} theme={theme} />

          <Posts/>
        

          <Typography sx={{ flexGrow: "1.5" }} className="border">
            text 3
          </Typography>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
