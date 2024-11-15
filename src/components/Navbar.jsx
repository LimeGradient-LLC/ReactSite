import "../styles/Navbar.scss"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/">limegradient</a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Socials</a>
                    </li>
                    <li>
                        <a href="https://github.com/LimeGradient">Github</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}