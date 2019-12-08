import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

// icon
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { makeStyles, Divider, Button } from '@material-ui/core';

function NavCarList() {
    return (
        <ListItem button key='Car'>
          <ListItemIcon><DriveEtaIcon /></ListItemIcon>
          <ListItemText primary='CT200h' />
        </ListItem>
    )
}



var useStyles = makeStyles(theme => ({
  listPaper: {
    padding: '1rem',
  },
  carlistIcon: {
    margin: 'auto',
    fontSize: '6rem',
  },
  carDetailButton: {
    textAlign: 'center',
  },
}));

function CarList() {
  var classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.listPaper}>
          <Grid container spacing={2}>
            <Grid item>
              <DriveEtaIcon className={classes.carlistIcon} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5">CT200h</Typography>
              <Divider />
              <p>2015年式 次回車検 令和2年4月</p>
              <Button variant="contained" color="primary" className={classes.carDetailButton}>詳細へ</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export { NavCarList, CarList };