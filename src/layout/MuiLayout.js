import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MiniDrawer from 'components/drawer/MiniDrawer';
import Appbar from 'components/appbar/Appbar';
import MainPanel from 'components/surfaces/MainPanel';

import routes from 'routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
      background: 'transparent',

    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,

    backgroundColor: 'red',
        boxShadow:
          "0 12px 20px -10px rgba( 255, 255, 255,.28), 0 4px 20px 0 rgba(255, 255, 255,.12), 0 7px 8px -5px rgba(255, 255, 255,.2)",
        "&:hover,&:focus": {
          backgroundColor: 'blue',
          boxShadow:
            "0 12px 20px -10px rgba(0,0,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,0,0,.2)"
        }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
    background: 'transparent',
    marginLeft: '-3px',
    marginTop: '-3px',
  },
}));

export default function DashboardLayout() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar
        open={open}
                handleDrawerOpen={handleDrawerOpen}
                routes={routes}

        />
      <MiniDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        routes={routes}

      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainPanel />
      </main>
    </div>
  );
}
