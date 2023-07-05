import "./Portfolio.css"
import TenziesGame from "../../imgs/Tenzies Game.webp"
import MovieWatchlist from "../../imgs/Movie Watchlist.webp"
import Calculator from "../../imgs/Calculator.webp"
import ColorSchemeGenerator from "../../imgs/Color Scheme Generator.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"

const dataPortfolio = [
    {
        id: 1,
        image: TenziesGame,
        title: "Tenzies Game",
        github: "https://github.com/marlonleon01/Tenzies-Game",
        live: "https://tenzies-game.marlonleon.net/",
        description: `Tenzies game made with React.js that stores data 
                        with state and functions with useEffect.`
    },
    {
        id: 2,
        image: MovieWatchlist,
        title: "Movie Watchlist",
        github: "https://github.com/marlonleon01/Movie-Watchlist",
        live: "https://movie-watchlist.marlonleon.net/",
        description: `Movie watchlist app made with vanilla JavaScript 
                        and OMDb API that uses localstorage to store the data.`
    },
    {
        id: 3,
        image: Calculator,
        title: "Calculator",
        github: "https://github.com/marlonleon01/Calculator",
        live: "https://calculator.marlonleon.net/",
        description: `A calculator that use JavaScript classes, built in functions,
                        and data selectors.`

    },
    {
        id: 4,
        image: ColorSchemeGenerator,
        title: "Color Scheme Generator",
        github: "https://github.com/marlonleon01/Color-Scheme-Generator",
        live: "https://colorscheme-generator.marlonleon.net/",
        description: `A color scheme generator that connects and fetches data from and API.`
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
                    dataPortfolio.map(({id, image, title, description, github, live}) => {
                        return (
                            <article key={id} className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={image} alt={title}></img>
                                </div>
                                <div className="portfolio-item-text">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                                <div  className="portfolio-item-btns">
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