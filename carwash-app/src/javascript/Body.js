import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardElement from './Card.js';

const useStyles = makeStyles(makeStyles(theme => ({
})));

class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'top',
    }
  }

  renderTop() {
    return (
      <div>
        MainPage
      </div>
    )
  }

  renderInfo() {
    return (
      <div>
        Information
      </div>
    )
  }

  render() {
    return (<div></div>);
  }
}

export default Body;