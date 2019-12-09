import React from 'react';
import './../stylesheet/App.css';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CarDetails from './CarDetails';
import { CarList } from './CarList';

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
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header title='Car Care Console'/>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path='/' exact component={CarDetails} />
          <Route path='/carlist' exact component={CarList} />
          <Route path='/car/:id' exact component={CarDetails} />
        </main>
      </div>
    </Router>
  );
}

export default App;
