import "./Header.css"
import Maya from "../../imgs/Maya photo.jpg"

export function Header() {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Marlon Leon</h1>
                <h5 className="text-light">Front-End Developer</h5>
                <div className="main-img">
                    <img src={Maya} alt="me"></img>
                </div>
            </div>
        </header>
    ) 
}