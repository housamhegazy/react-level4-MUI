import React, { useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Stack,
  Box,
} from "@mui/material";
import getDesignTokens from "./styles/MuTheme";
import Appbar from "components/AppBar";
import Listt from "components/List";
import Posts from "components/Posts";
import Rightbar from "components/Rightbar";

function App() {
 //showlist
  const [showList, setshowList] = useState("none")
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
        <Appbar setshowList={setshowList} showList={showList}/>

        <Stack direction="row">
          <Listt darkmoodFunc={darkmoodFunc} theme={theme} showList={showList} />

          <Posts/>
        
          <Rightbar theme={theme}/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
