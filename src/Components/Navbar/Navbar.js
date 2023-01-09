import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faBook} from "@fortawesome/free-solid-svg-icons"
import {faAddressBook} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export function Navbar() {
    return (
        <nav className="navbar">
            {/* Add real website links */}
            <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="brand-icons"></FontAwesomeIcon>
                </a>
                <a href="https://github.com/marlonleon01" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} className="brand-icons"></FontAwesomeIcon>
                </a>
            </div>
            <div className="navbar-menu">
                <a href="#about">
                    <FontAwesomeIcon icon={faUser} className="solid-icons"></FontAwesomeIcon>
                    <span className="navbar-text">About</span>
                </a>
                <a href="#portfolio">
                    <FontAwesomeIcon icon={faBook} className="solid-icons"></FontAwesomeIcon>
                    <span className="navbar-text">Portfolio</span>
                </a>
                <a href="#contact">
                    <FontAwesomeIcon icon={faAddressBook} className="solid-icons"></FontAwesomeIcon>
                    <span className="navbar-text">Contact</span>
                </a>
            </div>
        </nav>
    )
}