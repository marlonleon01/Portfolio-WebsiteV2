import "./Portfolio.css"
import TenziesGame from "../../imgs/Tenzies Game.webp"
import BusinessCard from "../../imgs/React Business Card.webp"
import BlackJack from "../../imgs/BlackJack App.webp"
import Calculator from "../../imgs/Calculator.webp"
import QuoteGenerator from "../../imgs/Quote Generator.webp"
import Stopwatch from "../../imgs/Stopwatch.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

const dataPortfolio = [
    {
        id: 1,
        image: TenziesGame,
        title: "Tenzies Game",
        github: "https://github.com/marlonleon01/Tenzies-Game",
        live: "https://marlonleon.net/tenzies-game.marlonleon.net"
    },
    {
        id: 2,
        image: BusinessCard,
        title: "React Business Card",
        github: "https://github.com/marlonleon01/React-Business-Cards",
        live: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 3,
        image: BlackJack,
        title: "BlackJack App",
        github: "https://github.com/marlonleon01/BlackJack-App",
        live: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 4,
        image: Calculator,
        title: "Calculator",
        github: "https://github.com/marlonleon01/Calculator",
        live: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 5,
        image: QuoteGenerator,
        title: "Random Quote Generator",
        github: "https://github.com/marlonleon01/Random-Quote-Generator",
        live: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 6,
        image: Stopwatch,
        title: "Stopwatch",
        github: "https://github.com/marlonleon01/Stopwatch",
        live: "https://github.com/marlonleon01/React-Info-Site"
    },
]

export function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
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
                    dataPortfolio.map(({id, image, title, github, live}) => {
                        return (
                            <article key={id} className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={image} alt={title}></img>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio-item-btns">
                                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                                <a href={live} className="btn" target="_blank" rel="noopener noreferrer">
                                    Live View
                                </a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}