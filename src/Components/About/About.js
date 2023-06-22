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
                            <small>8 Months</small>
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
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>JSON</li>
                                    <li>Git/Github</li>
                                </ul>
                            </small>
                        </article>
                        <article className="about-card">
                            <FontAwesomeIcon icon={faFolderClosed} className="about-icon"></FontAwesomeIcon>
                            <h5>Projects</h5>
                            <small>40+ Projects</small>
                        </article>
                    </div>
                <p>
                I am an aspiring front-end web developer. I started learning through
                the freeCodeCamp curriculum, where I received the Responsive
                Web Design Certification and Javascript Algorithms and Data
                Structures Certification. I am also learning through Scrimba's
                Frontend Developer path. I have experience specializing in
                web development, UI/UX design, HTML, CSS, JavaScript, and React.
                I write my code to be efficient so that my web pages/apps have
                great accessibility, performance, and appeal to users. I love working 
                in a team environment and enjoy constantly testing myself to learn something new.
                </p>
                <a href="#contact" className="btn btn-primary">Contact</a>
                </div>
            </div>
        </section>
    )
}