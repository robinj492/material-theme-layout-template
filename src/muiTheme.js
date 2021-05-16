import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
        elevation: '-1000',
    },
  },
  palette: {
  type: 'dark',
    primary: {
      light: '#757ce8',
      main: '#61dafb',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#002884',
    },
    background: {
        default: '#eee',
        paper: '#000',
    },
  },
});

export default theme;