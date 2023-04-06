import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import { FrontPage } from './App';

import './index.css'
import CodingKnowledge from './pages/knowledge';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>  
  ),document.getElementById('root')
)