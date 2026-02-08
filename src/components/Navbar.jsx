import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/personal">Personal</NavLink></li>
            </ul>
        </nav>
    );
}