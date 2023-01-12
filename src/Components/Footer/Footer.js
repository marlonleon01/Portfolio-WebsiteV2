import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    return (
        <footer>
            <a href="#" className="footer-name">Marlon Leon</a>
            <ul className="links">
                <li><a href="#navbar">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>
            <div className="footer-icons">
                <a href="https://www.facebook.com/marlon.leon.710" target="_blank" 
                rel="noopener noreferrer" className="anchor-facebook">
                    <FontAwesomeIcon icon={faSquareFacebook} alt="facebook icon"></FontAwesomeIcon>
                </a>
                <a href="https://www.instagram.com/marlon.z32/" target="_blank" 
                rel="noopener noreferrer" className="anchor-instagram">
                    <FontAwesomeIcon icon={faInstagramSquare} alt="instagram icon"></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/marlon-leon/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} alt="linkedin icon"></FontAwesomeIcon>
                </a>
                <a href="https://github.com/marlonleon01" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} alt="github icon"></FontAwesomeIcon>
                </a>
            </div> 
        </footer>
    )
}