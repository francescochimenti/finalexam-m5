import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

const ThemeWrapper = ({ children }) => {
  const themeMode = useSelector((state) => state.theme); // Get theme

  const theme = createTheme({
    palette: {
      mode: themeMode, //set theme mode light or dark
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
