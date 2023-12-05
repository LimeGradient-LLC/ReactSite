import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Main from './mainfunc';
import {Helmet} from 'react-helmet';

class FrontPage extends React.Component {
  render() {
    return (
      <div className='frontPage'>
        <h1>Kevin Burns</h1><br />
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
      <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4946403409755821" crossOrigin="anonymous"></script>
      </Helmet>
      <MenuBar />
      <Main />
    </div>
  )
}

export default App
export {FrontPage}
