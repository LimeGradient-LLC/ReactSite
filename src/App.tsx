import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'

var page = 0;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: page};
    console.log(this.state.page);
  }
  
  changePage = (pageNum: number) => () => {
    this.setState({page: pageNum});
    console.log(this.state.page);
  }

  render() {
    return (
      <div className='page'>
        <button onClick={this.changePage(0)}>Home</button>
        <h1>Kevin Burns</h1><br/>
        <h3>Coding, Youtube, and More</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  )
}

export default App
