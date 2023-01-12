import "./Portfolio.css"
import InfoSite from "../../imgs/React Info Site.png"
import BusinessCard from "../../imgs/React Business Card.png"
import BlackJack from "../../imgs/BlackJack App.png"
import Calculator from "../../imgs/Calculator.png"
import QuoteGenerator from "../../imgs/Quote Generator.png"
import Stopwatch from "../../imgs/Stopwatch.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

const dataPortfolio = [
    {
        id: 1,
        image: InfoSite,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
    },
    {
        id: 2,
        image: BusinessCard,
        title: "React Business Card",
        github: "https://github.com/marlonleon01/React-Business-Cards",
    },
    {
        id: 3,
        image: BlackJack,
        title: "BlackJack App",
        github: "https://github.com/marlonleon01/BlackJack-App",
    },
    {
        id: 4,
        image: Calculator,
        title: "Calculator",
        github: "https://github.com/marlonleon01/Calculator",
    },
    {
        id: 5,
        image: QuoteGenerator,
        title: "Random Quote Generator",
        github: "https://github.com/marlonleon01/Random-Quote-Generator",
    },
    {
        id: 6,
        image: Stopwatch,
        title: "Stopwatch",
        github: "https://github.com/marlonleon01/Stopwatch",
    },
]

export function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <a href="https://github.com/marlonleon01" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon> More projects
            </a>
            <div className="container portfolio-container">
                {
                    dataPortfolio.map(({id, image, title, github, liveView}) => {
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
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}