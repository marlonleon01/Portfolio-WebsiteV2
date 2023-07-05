import "./Portfolio.css"
import TenziesGame from "../../imgs/Tenzies Game.webp"
import MovieWatchlist from "../../imgs/Movie Watchlist.webp"
import BlackJack from "../../imgs/BlackJack App.webp"
import Calculator from "../../imgs/Calculator.webp"
import MemeGenerator from "../../imgs/Meme Generator.webp"
import ColorSchemeGenerator from "../../imgs/Color Scheme Generator.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

const dataPortfolio = [
    {
        id: 1,
        image: TenziesGame,
        title: "Tenzies Game",
        github: "https://github.com/marlonleon01/Tenzies-Game",
        live: "https://tenzies-game.marlonleon.net/"
    },
    {
        id: 2,
        image: MovieWatchlist,
        title: "Movie Watchlist",
        github: "https://github.com/marlonleon01/Movie-Watchlist",
        live: "https://movie-watchlist.marlonleon.net/"
    },
    {
        id: 3,
        image: Calculator,
        title: "Calculator",
        github: "https://github.com/marlonleon01/Calculator",
        live: "https://calculator.marlonleon.net/"
    },
    {
        id: 4,
        image: ColorSchemeGenerator,
        title: "Color Scheme Generator",
        github: "https://github.com/marlonleon01/Color-Scheme-Generator",
        live: "https://colorscheme-generator.marlonleon.net/"
    },
]

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