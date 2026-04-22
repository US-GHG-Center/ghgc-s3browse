import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Public Sans'`, // default for body text

    h1: { fontFamily: `'DM Sans'` },
    h2: { fontFamily: `'DM Sans` },
    h3: { fontFamily: `'DM Sans'` },
    h4: { fontFamily: `'DM Sans'` },
    h5: { fontFamily: `'DM Sans'` },
    h6: { fontFamily: `'DM Sans'` },
  },
  components: {
    MuiCheckbox: {
        styleOverrides: {
          root: {
            color: '#A9AEB1', 
            '&.Mui-checked': {
              color: '#222FBF',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: `'Public Sans'`,
            borderRadius: 2,
            color: '#222fbf',
            backgroundColor: '#fff',
            borderColor: '#222fbf',
            '&:hover': {
              backgroundColor: '#f1eff7',
              borderColor: '#222fbf',
            },
            '&:disabled': {
              color: 'rgba(34, 47, 191, 0.4)',
              borderColor: 'rgba(34, 47, 191, 0.4)',
              pointerEvents: 'none',
            },
          },
        },
      },
      
    
    
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: `'Public Sans'`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // This root affects all Typography variants,
        // so if you set Public Sans here, it overrides h1-h6 too
        // ❌ REMOVE or conditionally apply it
        root: ({ ownerState }) => {
          const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
          return {
            fontFamily: headingTags.includes(ownerState.variant)
              ? `'DM Sans'`
              : `'Public Sans'`,
          };
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: `'DM Sans'`,
        },
      },
    },
  },
});

export default theme;
