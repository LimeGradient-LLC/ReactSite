import React from "react";
import "./coding.css";

export default class Coding extends React.Component {
    render() {
        return (
            <div className="coding">
                <h1>Coding</h1>
                <h3>My Background/Knowledge + Projects</h3> <br />
                <h1>Background</h1>
                <div className="floatLeft">
                    <h3>HTML/CSS</h3>
                    <p>I wouldnt call this my first language I learned to code in as HTML/CSS is very basic and is very entry level. I have kept with HTML/CSS for many years and have created many projects with it (including this one) and have grown more advanced with it</p>
                </div>
                <div style={{clear: "both", padding: "50px"}} />
                <div className="floatRight">
                    <h3>JavaScript/TypeScript</h3>
                    <p>I learned JavaScript first as it was entry level enough for me at a young age to understand the fundamentals. I then got hooked with making my websites interactive and wanted to learn more. I used courses online and books to further my knowledge in JS and after getting my own computer I learned NodeJS.</p>
                </div>
                <div style={{clear: "both", padding: "50px"}} />
                <div className="floatLeft">
                    <h3>C# and Unity</h3>
                    <p>After learning JavaScript I wanted to learn how to make games as I have been playing games all my life and have wanted to learn how to make them for the longest time. I chose Unity as it was free and learned the C# Language with it. I have made many prototype games using UnityC# and would consider myself more advanced than the average user.</p>
                </div>
                <div style={{clear: "both", padding: "50px"}} />
                <div className="floatRight">
                    <h3>Java</h3>
                    <p>Around the time I was learning how to make games I also wanted to learn how to mod Minecraft as that was a game I frequently played. I used many tutorials and learned the basics of Java, enough to make some very basic Minecraft Mods/Plugins. I then took my knowledge and created some standalone Java projects using it.</p>
                </div>
                <div style={{clear: "both", padding: "50px"}} />
                <div className="floatLeft">
                    <h3>Python</h3>
                    <p>I also learned Python as I heard it was a good entry level PC Programming language. I again used many courses and tutorials online to create some very basic Python programs. I know Python very well and have made many projects with it.</p>
                </div>
                <div style={{clear: "both", padding: "50px"}} />
                <div className="floatRight">
                    <h3>C/C++</h3>
                    <p>I learned C++ for the sole purpose of making games since it looked like a fun challenge. I have since taken my knowledge to other programs and use it in a lot of projects</p>
                </div>
            </div>
        )
    }
}