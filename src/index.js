import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import './index.css';
import JobPage from './Components/JobPage';

render((

  <BrowserRouter>
    <JobPage />
  </BrowserRouter>
  )
, document.getElementById('root'));
