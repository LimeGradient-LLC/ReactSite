import React, { useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Main from './mainfunc';


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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4946403409755821";
    script.async = true
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script)
    }
  });
  return (
    <div className="App">
      <MenuBar />
      <Main />
    </div>
  )
}

export default App
export {FrontPage}
