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

                <h1>HySky Client</h1>
                <p>HySky Client was my first attempt at making a Minecraft Launcher in JS.</p>
                <p>It taught me many things such as Electron, Discord RPC, and Microsoft Authentication</p>
                <p>You can view the Github Repoisitory <a href="https://github.com/LimeGradient/HySky-Client">here</a></p>
            </div>
        )
    }
}