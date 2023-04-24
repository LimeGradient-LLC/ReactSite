import React from "react";

export default class CodingProjects extends React.Component {
    render() {
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
              <h1>MC-JSON-Gen - 4/24/2023</h1>
              <br />
              <p>MC-JSON-Gen is a quick program I made in 10 minutes to streamline the Minecraft title command. It is hosted <a href="https://limegradient.github.io/mc-json-gen/index.html">here</a></p>
            </div>
          );
    }
}