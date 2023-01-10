import "./Portfolio.css"

import Maya from "../../imgs/Maya photo.jpg"

const dataPortfolio = [
    {
        id: 1,
        image: Maya,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
        liveView: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 2,
        image: Maya,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
        liveView: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 3,
        image: Maya,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
        liveView: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 4,
        image: Maya,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
        liveView: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 5,
        image: Maya,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
        liveView: "https://github.com/marlonleon01/React-Info-Site"
    },
    {
        id: 6,
        image: Maya,
        title: "React Info Site",
        github: "https://github.com/marlonleon01/React-Info-Site",
        liveView: "https://github.com/marlonleon01/React-Info-Site"
    },
]

export function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
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
                                <a href={liveView} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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