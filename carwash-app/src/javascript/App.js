import React from 'react';
import './../stylesheet/App.css';
import CardElement from './Card.js';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="App">
      <CardElement />
    </Container>
  );
}

export default App;
