import React from 'react';
import Paper from '@material-ui/core/Paper'
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Grid, Typography, createMuiTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    palette: {
      type: 'white',
    },
    background: 'white',
  },
}));

function CarDetails() {

    var classes = useStyles();

    return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <img src={`${process.env.PUBLIC_URL}/images/GraphSample.png`} alt="graph" width="40%" />
          </Grid>
          <Grid item sm={12} md={8}>
            <Typography variant='h6'>カーステータス</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
    );
  }
// }

export default CarDetails;