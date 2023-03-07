import React, { useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider, Button } from "@mui/material";
import getDesignTokens from "./styles/MuTheme";

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
      <div className="App">
        <Button
          onClick={() => {
            darkmoodFunc();
          }}
          variant="contained"
          color="primary"
        >
          toggle mode
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
