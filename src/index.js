import { createRoot } from 'react-dom/client';
import { CloudBrowse } from "./CloudBrowse";
import { TopBar } from './components/universal/TopBar';
import { Footer } from './components/universal/Footer';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';


const root = createRoot(document.getElementById('root'));

root.render(
  <>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      <TopBar />
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <CloudBrowse />
      </Box>
      <Footer />
    </Box>
    </ThemeProvider>
  </>
);
