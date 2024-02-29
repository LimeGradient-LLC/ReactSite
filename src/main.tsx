import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'

import './index.css'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>  
  ),document.getElementById('root')
)