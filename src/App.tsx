import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import './App.css'

var page = 0;

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {update: 0}
  }

  componentDidMount(): void {
      this.state.update = setInterval(
        () => this.tick(),
        10
      );
  }

  componentWillUnmount(): void {
      clearInterval(this.state.update);
  }

  tick() {
    this.setState({
      update: new Date()
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
          <h1>Coding Knowledge</h1>
          <h3>I know C++, Unity C#, Python, HTML/CSS/ReactJS</h3>
          <h5>All Self Taught</h5>
          <br/>
          <h1>C++</h1>
          <p>I learned C++ to use SDL2 and OpenGL to make games/engines.
            <br />
            I started learning C++ in 2022 around the start of the year with
            SDL2 tutorials by LazyFoo, setting out to make a game engine, even with
            my little knowledge
            <br />
            Even though my efforts were fruitless it taught me many things
              about the C++ language that I use today.
            <br />
            I still am attempted to make a game engine, just not using SDL2 this
            time. I am going to use OpenGL as to have more control over my engine
          </p>

          <br/>
          <h1>Unity C#</h1>
          <p>I learned C# in the Unity context to make games with my friends
            and to make games for competitions
            <br />
            I started learning Unity C# in 2017 for the purpose of a club I was
            in, TSA. There was a game making competition and I wanted to enter.
            I joined and started to learn Unity C#.
            <br />
            There is still a video of my first game I made out on Youtube.
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5Q_WswfeAZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br />
            It was not good but it was the start that led to where I am now, 5
            years later
          </p>
          <br />
          <h1>Python</h1>
          <p>I started learning Python in 2020 because I was bored and wanted
            to learn how to code. I heard that Python and Lua were both easy
            starter languages but I wasnt sure which one to pick. After some
            more research I decided to go with Python because it had more support
            and more features I wanted.
            <br />
            I have put some of my recent Python projects on Github. If you would
            like to see, just click on the Github logo at the bottom of this
            page.
          </p>
          <br />
          <h1>HTML/CSS/ReactJS</h1>
          <p>I started learning HTML/CSS/JS around 8 years ago since it was
            the most simple languages to pickup and start coding with. I didnt
            know about compilers or anything with Command Prompt so I stuck
            with this just for the fact that I could edit the HTML file and immediately
            see results.
            <br />
            <p>I got the foundations of HTML and CSS down but I didnt know much
              about Javascript. I didnt like the Syntax compared to HTML, it was
              too confusing. I did eventually get around to learning Javascript
              and got the hang of it. I wanted more though and wanted to learn more.
              I heard about Javascript frameworks from Youtube videos but never
              thought about trying one. I found a popular framework known as
              React, the framework used to build this website, and I was set on learning it.
              I did get React down and I know the basics of React but I could
              definately learn more. React is the most recent coding thing I have 
              pursued to learn more about.
              <br />
              You can see the source code of this website on Github by clicking
              the logo at the bottom of the site.
            </p>
          </p>
          <br />
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
        <div className='projects'>
          <h1>Coding Projects</h1>
          <h3>Projects I have made being shown here</h3>
          <br />
          <h1>Math.c</h1>
          <p>Math.c is a custom built Math Library for C. I am working on it to
            improve my Math skills and C skills. <a href='https://github.com/LimeGradient/math.c'>
              You can find the Github Repo here.
            </a>
          </p>
        </div>
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
