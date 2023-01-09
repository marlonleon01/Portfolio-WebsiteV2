import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faBook} from "@fortawesome/free-solid-svg-icons"
import {faAddressBook} from "@fortawesome/free-solid-svg-icons"

export function Navbar() {
    return (
        <nav className="navbar">
            <a href="#">
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                <span className="navbar-text">Home</span>
            </a>
            <a href="#about">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <span className="navbar-text">About</span>
            </a>
            <a href="#portfolio">
                <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                <span className="navbar-text">Portfolio</span>
            </a>
            <a href="#contact">
                <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                <span className="navbar-text">Contact</span>
            </a>
        </nav>
    )
}