import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { Container } from '@material-ui/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
