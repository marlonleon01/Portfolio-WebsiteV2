import "./About.css"
import GraduationStanding from "../../imgs/Graduation Standing.webp"
import HTML from "../../imgs/HTML-Icon.webp"
import Node from "../../imgs/Node.js-Icon.webp"
import TypeScript from "../../imgs/TypeScript-Icon.webp"
import React from "../../imgs/React-Icon.webp"
import Next from "../../imgs/Next.js-Icon.webp"
import MongoDB from "../../imgs/MongoDB-Icon.webp"
import JavaScript from "../../imgs/JavaScript-Icon.webp"
import Git from "../../imgs/Git-Icon.webp"
import Express from "../../imgs/Express-Icon.webp"
import CSS from "../../imgs/CSS-Icon.webp"


export function About() {
    return (
        <section id="about">
            <h2>About me</h2>
            <div className="container about-container">
                
                <div className="about-me">
                    <div className= "about-img">
                        <img src={GraduationStanding} alt="Graduation Image"></img>
                    </div>
                </div>
                
                <p>
                    As a passionate developer, I have embarked on a journey to become a
                    versatile full-stack developer. With a strong foundation in front-end 
                    development, I have expanded my skillset to encompass the world of 
                    back-end technologies. I am growing my understanding of Node.js, Express.js, 
                    and am on a path to becoming a well-rounded full-stack developer. I have 
                    used many online resources to learn, including the freeCodeCamps curriculum, 
                    where I obtained two certifications, Scrimba's Front-end Developer Path, 
                    and popular Udemy courses for learning Node.js. With a specialization in 
                    web development, UI/UX design, HTML, CSS, JavaScript, and React, I bring a 
                    comprehensive skill set. I strive for code efficiency, implementation of 
                    accessibility standards, optimized performance, and user appeal. I love 
                    collaborating with others, and I constantly seek new challenges to help me 
                    learn and grow while pushing the boundaries of my knowledge. 
                </p>

                <div className="skills-div">
                    <div className="skills-container1">
                        <div className="individual-skill">
                            <img src={HTML}></img>
                            <p>HTML</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Express}></img>
                            <p>EXPRESS.JS</p>
                        </div>
                        <div className="individual-skill">
                            <img src={TypeScript}></img>
                            <p>TYPESCRIPT</p>
                        </div>
                    </div>
                    <div className="skills-container2">
                        <div className="individual-skill">
                            <img src={JavaScript}></img>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="individual-skill">
                            <img src={React}></img>
                            <p>REACT</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Node}></img>
                            <p>NODE.JS</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Git}></img>
                            <p>GIT</p>
                        </div>
                    </div>
                    <div className="skills-container3">
                        <div className="individual-skill">
                            <img src={CSS}></img>
                            <p>CSS</p>
                        </div>
                        <div className="individual-skill">
                            <img src={MongoDB}></img>
                            <p>MONGODB</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Next}></img>
                            <p>NEXT.JS</p>
                        </div>
                    </div>
                </div>

                <div className="contact-button-div">
                    <a href="#contact" className="btn btn-primary">Contact</a>
                </div>
            </div>
        </section>
    )
}