import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'

var page = 0;

class FrontPage extends React.Component {
  render() {
    return (
      <div className='frontPage'>
        <h1>Kevin Burns</h1><br/>
        <h3>Coding, Youtube, and More</h3>
      </div>
    );
  }
}

function App() {
  if (page == 0) {
    return (
      <div className="App">
        <FrontPage />
      </div>
    )
  }
}

export default App
