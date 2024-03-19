import React from "react";
import "./coding.css";

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <h3>My Projects</h3> <br />
                <h1>GDWii</h1>
                <p>GDWii is a port of the popular game Geometry Dash to the Wii. It is written in C++ using devkitpro and GRRLIB</p>
                <p>It has taught me many things such as OOP and Memory Management due to the limitations of the Wii.</p>
                <p>You can view the Github Repository  <a href="https://github.com/LimeGradient/GD-Wii">here</a></p>
                <br />
            </div>
        )
    }
}