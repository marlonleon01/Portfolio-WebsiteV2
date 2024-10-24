import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export function Footer() {
    return (
        <footer>
            <div className="footer-icons">
                <a 
                    href="https://www.facebook.com/marlon.leon.710" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="anchor-facebook"
                    aria-label="Visit my Facebook profile"
                >
                    <FontAwesomeIcon icon={faSquareFacebook} alt="facebook icon"></FontAwesomeIcon>
                </a>
                <a 
                    href="https://www.instagram.com/marlon.z32/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="anchor-instagram"
                    aria-label="Visit my Instagram profile"
                >
                    <FontAwesomeIcon icon={faInstagramSquare} alt="instagram icon"></FontAwesomeIcon>
                </a>
                <a 
                    href="https://www.linkedin.com/in/marlon-leon/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                >
                    <FontAwesomeIcon icon={faLinkedin} alt="linkedin icon"></FontAwesomeIcon>
                </a>
                <a 
                    href="https://github.com/marlonleon01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                >
                    <FontAwesomeIcon icon={faGithubSquare} alt="github icon"></FontAwesomeIcon>
                </a>
            </div> 
            <a href="#/" className="footer-name">Marlon Leon ©2024</a>
        </footer>
    )
}