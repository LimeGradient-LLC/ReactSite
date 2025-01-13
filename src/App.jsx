import { useState } from 'react'

import Background from './components/Background';
import Navbar from './components/Navbar';

import "./styles/Card.scss"
import "./styles/_Fonts.scss";
import { useLanyard } from 'react-use-lanyard';
import DiscordActivity from './components/DiscordActivity';

function App() {
  const lanyard = useLanyard({
    userId: "662833597966843907",
  });

  return (
    <div className='app'>
      <Background />
      <Navbar />
      <div class="card">
        <b></b>
        <div class="content">
          <p class="title">
            <div className='flag-holder'>
              <img src="https://cdn3.emoji.gg/emojis/transgender_pride_flag.png" width="64px" height="64px" alt="transgender_pride_flag" style={{marginRight: 75}} />
              <img src="https://cdn3.emoji.gg/emojis/3654_pansexualpride.png" width="64px" height="64px" alt="pansexualpride" style={{marginLeft: 75}} />
            </div>
            Hi! I'm Lily!
            <br />
            <br />
            <span>Programmer</span>
            <br />
            <span>Musician</span>
            <br />
            <span>Camper</span>
            
          </p>
        </div>
        <DiscordActivity />
      </div>
    </div>
  )
}

export default App
