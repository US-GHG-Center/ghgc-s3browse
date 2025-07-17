import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Public Sans', sans-serif`,
    h1: { fontFamily: `'DM Sans', sans-serif` },
    h2: { fontFamily: `'DM Sans', sans-serif` },
    h3: { fontFamily: `'DM Sans', sans-serif` },
    h4: { fontFamily: `'DM Sans', sans-serif` },
    h5: { fontFamily: `'DM Sans', sans-serif` },
    h6: { fontFamily: `'DM Sans', sans-serif` },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `'Public Sans', sans-serif`,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: `'Public Sans', sans-serif`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'Public Sans', sans-serif`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: `'DM Sans', sans-serif`,
        },
      },
    },
  },
});

export default theme;
