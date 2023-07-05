import TenziesGame from "../../imgs/Tenzies Game.webp"
import MovieWatchlist from "../../imgs/Movie Watchlist.webp"
import Calculator from "../../imgs/Calculator.webp"
import ColorSchemeGenerator from "../../imgs/Color Scheme Generator.webp"

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

export default dataPortfolio