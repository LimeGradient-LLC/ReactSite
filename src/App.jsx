import { useState } from 'react'

import Background from './components/Background';
import Navbar from './components/Navbar';

import "./styles/Card.scss"
import "./styles/_Fonts.scss";

function App() {
  return (
    <div className='app'>
      <Background />
      <Navbar />
      <div class="card">
        <b></b>
        <div class="content">
          <p class="title">
            Hi! I'm Luna!
            <br />
            <span>Hobbyist Programmer</span>
          </p>
          <img src="https://cdn3.emoji.gg/emojis/transgender_pride_flag.png" width="64px" height="64px" alt="transgender_pride_flag" style={{marginRight: 75}} />
          <img src="https://cdn3.emoji.gg/emojis/3654_pansexualpride.png" width="64px" height="64px" alt="pansexualpride" style={{marginLeft: 75}} />
          
        </div>
      </div>
    </div>
  )
}

export default App
