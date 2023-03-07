import {
    purple,
    lightBlue,
    indigo,
    deepPurple,
    cyan,
  } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              housam: {
                main: "#64748B",
              },
              faveColor: {
                main: lightBlue[500],
                primary: cyan[500],
                secondary: purple[600],
              },
            }
          : {
              // palette values for dark mode
              housam: {
                main: "#ab47bc",
              },
              faveColor: {
                main: "#009688",
                primary: indigo[500],
                secondary: deepPurple[600],
              },
            }),
      },
  });
  
  export default getDesignTokens