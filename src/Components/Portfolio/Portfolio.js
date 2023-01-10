import "./Portfolio.css"

import Maya from "../../imgs/Maya photo.jpg"

export function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Maya} alt="React Info Site"></img>
                    </div>
                    <h3>React Info Site</h3>
                    <div className="portfolio-item-btns">
                    <a href="https://github.com/marlonleon01/React-Info-Site" className="btn" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <a href="https://github.com/marlonleon01/React-Info-Site" className="btn btn-primary">
                        Live View
                    </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Maya} alt="React Info Site"></img>
                    </div>
                    <h3>React Info Site</h3>
                    <div className="portfolio-item-btns">
                    <a href="https://github.com/marlonleon01/React-Info-Site" className="btn" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <a href="https://github.com/marlonleon01/React-Info-Site" className="btn btn-primary">
                        Live View
                    </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Maya} alt="React Info Site"></img>
                    </div>
                    <h3>React Info Site</h3>
                    <div className="portfolio-item-btns">
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn btn-primary">
                            Live View
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Maya} alt="React Info Site"></img>
                    </div>
                    <h3>React Info Site</h3>
                    <div className="portfolio-item-btns">
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn btn-primary">
                            Live View
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Maya} alt="React Info Site"></img>
                    </div>
                    <h3>React Info Site</h3>
                    <div className="portfolio-item-btns">
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn btn-primary">
                            Live View
                        </a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={Maya} alt="React Info Site"></img>
                    </div>
                    <h3>React Info Site</h3>
                    <div className="portfolio-item-btns">
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a href="https://github.com/marlonleon01/React-Info-Site" className="btn btn-primary">
                            Live View
                        </a>
                    </div>
                </article>
                
            </div>
        </section>
    )
}