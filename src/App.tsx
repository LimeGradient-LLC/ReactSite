import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'

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

class MenuBar extends React.Component {
  render() {
    return (
      <div className='menuBar'>
        
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MenuBar />
      <FrontPage />
    </div>
  )
}

export default App
