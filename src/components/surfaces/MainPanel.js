import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    zIndex: theme.zIndex.drawer + 2,
    boxShadow: '-4px 12px 4px 2px rgba(0,0,0,0.75)',


    padding: '0px',
    margin: '0px',
    background: 'rgba(0,0,0,0.8)',

    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100vh',

  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper variant="outlined" className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
