import "./About.css"
import Maya from "../../imgs/Maya photo.jpg"
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
                        <img src={Maya} alt="About Image"></img>
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
                            <FontAwesomeIcon icon={faFolderClosed} className="about-icon"></FontAwesomeIcon>
                            <h5>Projects</h5>
                            <small>18 Projects</small>
                        </article>
                    </div>
                <p>
                I am an aspiring front-end web developer that studied music education. 
                Although I studied music education, technology has always been a passion of mine and has come somewhat naturally to me. 
                This is why I decided to leave the field of education because I always wanted to do something in tech; I just made that 
                connection after graduating with my bachelor's degree. Since early September 2022, I have been developing my programming skills. 
                I have spent many hours studying the fundamentals but, most importantly, creating as many projects from scratch as possible. 
                This way, I could practice fixing errors and learning to write cleaner code.
                </p>
                <a href="#contact" className="btn btn-primary"></a>
                </div>
            </div>
        </section>
    )
}