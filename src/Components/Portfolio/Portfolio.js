import "./Portfolio.css"
import dataPortfolio from "./dataPortfolio"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="more-projects-container">
            <a href="https://github.com/marlonleon01" target="_blank" rel="noopener noreferrer" className="more-projects-section">
                <FontAwesomeIcon icon={faGithubSquare} alt="github icon">
                </FontAwesomeIcon>
                <span className="more-projects-text">More projects</span>
            </a>
            </div>
            <div className="container portfolio-container">
                {
                    dataPortfolio.map(({id, image, title, description, github, live}, index) => {
                        if (index % 2 === 0) {
                            return (
                                <article key={id} className="projects-container">
                                    <div className={`project-img img-left`}>
                                        <img src={image} alt={title}></img>
                                    </div>
                                    <div className="project-main-content main-left">
                                        <div className="project-text">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                        <div  className="project-btns">
                                            <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                                                GITHUB
                                            </a>
                                            <a href={live} className="btn" target="_blank" rel="noopener noreferrer">
                                                LIVE VIEW
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            )
                        } else {
                            return (
                                <article key={id} className="projects-container">
                                    <div className="project-main-content main-right">
                                        <div className="project-text">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                        <div  className="project-btns">
                                            <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                                                GITHUB
                                            </a>
                                            <a href={live} className="btn" target="_blank" rel="noopener noreferrer">
                                                LIVE VIEW
                                            </a>
                                        </div>
                                    </div>                                    
                                    <div className={`project-img img-right`}>
                                        <img src={image} alt={title}></img>
                                    </div>
                                </article>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}