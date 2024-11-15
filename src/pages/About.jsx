import Background from '../components/Background';
import Navbar from '../components/Navbar';

import "../styles/_Fonts.scss"

import "../styles/AboutPage.scss"

export default function AboutPage() {
    return (
        <div className='aboutPage'>
            <Background />
            <Navbar />
            <div className='content'>
                <h1>About me!</h1>
                <p>
                    I have been very interested in programming even from a very young age. I started learning because I wanted to make my own website (and minecraft mods).
                </p>
            </div>
        </div>
    );
}