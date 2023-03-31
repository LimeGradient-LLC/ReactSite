import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'
import CodingProjects from './pages/projects';
import CodingKnowledge from './pages/knowledge';
import Emulator from './pages/emulator';

var page = 0;
var update: any = 0;

class FrontPage extends React.Component<{}, {update: number}> {
  constructor(props: any) {
    super(props);
    this.state = {update: 0}
  }

  componentDidMount(): void {
      update = setInterval(
        () => this.tick(),
        10
      );
      this.setState({
        update: update
      });
  }

  componentWillUnmount(): void {
      clearInterval(this.state.update);
  }

  tick() {
    this.setState({
      update: 0
    });
  }

  render() {
    if (page == 0) {
      return (
        <div className='frontPage'>
          <h1>Kevin Burns</h1><br/>
          <h3>Coding, Youtube, and More</h3>
        </div>
      );
    }
    if (page == 1) {
      return (
        <div className='codingProjects'>
          <CodingKnowledge />
          <h4>Website created with Vite + React</h4>
          <div className='logos'>
          <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href='https://github.com/LimeGradient' target="_blank">
          <img src="/github.png" className='logo' alt="Github Logo" />
        </a>
          </div>
          </div>
      );
    }
    if (page == 2) {
      return (
        <CodingProjects />
      );
    }
    if (page == 3) {
      return (
        <Emulator />
      );
    }
  }
}

class MenuBar extends React.Component {
  render() {
    return (
      <div className='menuBar'>
        <button onClick={function() { page = 0; console.log(page);}}>Home</button>
        <div className='divider' />
        <button onClick={function() { page = 1; console.log(page);}}>Coding</button>
        <div className='divider' />
        <button onClick={function() { page = 2; console.log(page); }}>Projects</button>
        <div className='divider' />
        <button onClick={function() { page = 3; console.log(page);}}>Emulator</button>
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
