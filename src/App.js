import React from "react";
import { Form } from "./components/Form/Form";

import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
    secondary: {
      main: "#da61bf",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Form formName="Sample Form Submit" />
      </div>
    </ThemeProvider>
  );
}

export default App;
