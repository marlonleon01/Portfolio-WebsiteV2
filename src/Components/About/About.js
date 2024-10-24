import "./About.css"
import GraduationStanding from "../../imgs/Graduation Standing.webp"
import HTML from "../../imgs/HTML-Icon.webp"
import Node from "../../imgs/Node.js-Icon.webp"
import Java from "../../imgs/Java-Icon.webp"
import React from "../../imgs/React-Icon.webp"
import SQL from "../../imgs/SQL-Icon.webp"
import MongoDB from "../../imgs/MongoDB-Icon.webp"
import JavaScript from "../../imgs/JavaScript-Icon.webp"
import Git from "../../imgs/Git-Icon.webp"
import Python from "../../imgs/Python-Icon.webp"
import CSS from "../../imgs/CSS-Icon.webp"


export function About() {
    return (
        <section id="about">
            <h2>About me</h2>
            <div className="container about-container">
                
                <div className="about-me">
                    <div className= "about-img">
                        <img src={GraduationStanding} alt="Graduation"></img>
                    </div>
                </div>
                
                <p>
                    As a passionate developer, I am dedicated to becoming a 
                    well-rounded software engineer with a strong foundation in both 
                    front-end and back-end development. With proficiency in languages 
                    like Python, Java, JavaScript, and frameworks like React, I build 
                    efficient, user-friendly web applications. My skillset spans across 
                    UI/UX design using Figma and Adobe Suite, ensuring that my 
                    applications are not only functional but also visually appealing. 
                    I have a solid understanding of database technologies like SQL and 
                    MongoDB, allowing me to handle data management effectively. I 
                    continuously seek new challenges to push the boundaries of my 
                    knowledge and grow as a developer, always focusing on 
                    code efficiency, accessibility standards, and optimized performance. 
                    Collaboration and problem-solving drive my work, and I am committed 
                    to learning and evolving with every project.
                </p>

                <div className="skills-div">
                    <div className="skills-container1">
                        <div className="individual-skill">
                            <img src={HTML} alt="HTML Icon"></img>
                            <p>HTML</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Python} alt="Python Icon"></img>
                            <p>PYTHON</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Java} alt="Java Icon"></img>
                            <p>JAVA</p>
                        </div>
                    </div>
                    <div className="skills-container2">
                        <div className="individual-skill">
                            <img src={JavaScript} alt="JavaScript Icon"></img>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="individual-skill">
                            <img src={React} alt="React Icon"></img>
                            <p>REACT</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Node} alt="Node.js Icon"></img>
                            <p>NODE.JS</p>
                        </div>
                        <div className="individual-skill">
                            <img src={Git} alt="Git Icon"></img>
                            <p>GIT</p>
                        </div>
                    </div>
                    <div className="skills-container3">
                        <div className="individual-skill">
                            <img src={CSS} alt="CSS Icon"></img>
                            <p>CSS</p>
                        </div>
                        <div className="individual-skill">
                            <img src={MongoDB} alt="MongoDB Icon"></img>
                            <p>MONGODB</p>
                        </div>
                        <div className="individual-skill">
                            <img src={SQL} alt="SQL Icon"></img>
                            <p>SQL</p>
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