import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';

ReactDOM.render(
  <>
    <BrowserRouter>
    <Container maxWidth="L">
      <App />
    </Container>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);


