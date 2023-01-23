import "./About.css"
import GraduationStanding from "../../imgs/Graduation Standing.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMedal} from "@fortawesome/free-solid-svg-icons"
import {faFolderClosed} from "@fortawesome/free-solid-svg-icons"


export function About() {
    return (
        <section id="about">
            <h5>A Little</h5>
            <h2>About me</h2>
            <div className="container about-container">
                <div className="about-me">
                    {/* Add image of myself */}
                    <div className= "about-img">
                        <img src={GraduationStanding} alt="Graduation Image"></img>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FontAwesomeIcon icon={faMedal} className="about-icon"></FontAwesomeIcon>
                            <h5>Experience</h5>
                            <small>4 Months</small>
                        </article>
                        <article className="about-card">
                            <FontAwesomeIcon icon={faMedal} className="about-icon"></FontAwesomeIcon>
                            <h5>Specilizations</h5>
                            <small>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React.js</li>
                                    <li>Git/Github</li>
                                </ul>
                            </small>
                        </article>
                        <article className="about-card">
                            <FontAwesomeIcon icon={faFolderClosed} className="about-icon"></FontAwesomeIcon>
                            <h5>Projects</h5>
                            <small>18+ Projects</small>
                        </article>
                    </div>
                <p>
                I am an aspiring front-end web developer. I started learning through 
                the freeCodeCamp curriculum, where I received the Responsive Web Design 
                Certification and Javascript Algorithms and Data Structures Certification. 
                Still, I have also used other resources to learn. In that time, I have created 
                over 15 projects, all ranging in difficulty. I am proficient in writing HTML, 
                CSS, and JavaScript. I can also use Git/Github to make the development process 
                more manageable. I have used HTML, CSS, and JavaScript daily since I began 
                learning and have focused on making my web applications more user-friendly and 
                appealing. I have also used React to write composable code and avoid code clutter 
                by using separate components. I love working in a team environment and enjoy constantly 
                testing myself to learn something new.
                </p>
                <a href="#contact" className="btn btn-primary">Contact</a>
                </div>
            </div>
        </section>
    )
}