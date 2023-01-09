import "./Header.css"
import Maya from "../../imgs/Maya photo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export function Header() {
    return (
        <header>
            <div className="container header_container"></div>
            <h5>Hello I'm</h5>
            <h1>Marlon Leon</h1>
            <h5 className="text-light">Front-End Developer</h5>
            <div className="me">
                <img src={Maya} alt="me"></img>
            </div>
            <div className="header_socials">
                {/* Add real website links */}
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a href="https://github.com/marlonleon01" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                </a>
            </div>
        </header>
    ) 
}