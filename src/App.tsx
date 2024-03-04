import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Main from './mainfunc';

import githubLogo from "./assets/github.png"

class FrontPage extends React.Component {
  render() {
    return (
      <div className='frontPage'>
        <h1>LimeGradient</h1><br />
        <h3>Coding, Youtube, and More</h3>
      </div>
    )
  }
  }

class MenuBar extends React.Component {
  render() {
    return (
      <div className='menuBar'>
        <Link to="/">
          <button>Home</button>
        </Link>
        <div className='divider' />
        <Link to="/coding">
          <button>Coding</button>
        </Link>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Main />
      <br />
      <a href='https://github.com/limegradient' target="_blank">
        <img src={githubLogo} className="logo" alt='Github Logo'/>
      </a>
    </div>
  )
}

export default App
export {FrontPage}
