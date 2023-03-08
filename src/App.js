import React, { useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider, Button, Menu, MenuItem } from "@mui/material";
import getDesignTokens from "./styles/MuTheme";
import { useRef } from "react";
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
//menu usestate
const inputElement =useRef(null)
const [isOpen,setisOpen]=useState(false)
 const closeMenu = () => { setisOpen(false) }
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


      <Button ref={inputElement} sx={{ml:"199px"}}
        variant="contained"
        onClick={() => { 
          setisOpen(!isOpen)
        }}
        
      >
        Dashboard
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={inputElement.current}
        open={isOpen}
        onClose={() => { closeMenu() }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {closeMenu()  }}>Profile</MenuItem>
        <MenuItem onClick={() => {closeMenu()  }}>My account</MenuItem>
        <MenuItem onClick={() => {closeMenu()  }}>Logout</MenuItem>
      </Menu>





      </div>
    </ThemeProvider>
  );
}

export default App;
