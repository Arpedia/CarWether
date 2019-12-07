import React from 'react';
import './../stylesheet/App.css';
import Header from './Header';
import Body from "./Body";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title='Dashboard'/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Body />
      </main>
    </div>
  );
}

export default App;
