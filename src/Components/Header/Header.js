import "./Header.css"
import SmartDog from "../../imgs/Smart Dog.jpg"
import DogCat from "../../imgs/Dog and Cat.jpg"
import DogLicking from "../../imgs/Dog Licking Cat.jpg"
import BlackCat from "../../imgs/Black Cat.jpg"

export function Header() {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Marlon Leon</h1>
                <h5 className="text-light">Front-End Developer</h5>
                <div className="img-container">
                    <div className="img-group">
                        <div className="small-img img">
                            <img src={BlackCat}></img>
                        </div>
                        <div className="big-img img">
                            <img src={BlackCat}></img>
                        </div>
                        <div className="small-img img">
                            <img src={SmartDog}></img>
                        </div>
                        <div className="big-img img">
                            <img src={DogCat}></img>
                        </div>
                        
                        <div className="small-img img">
                            <img src={DogLicking}></img>
                        </div>
                        <div className="big-img img">
                            <img src={SmartDog}></img>
                        </div>
                        
                        <div className="small-img img">
                            <img src={DogCat}></img>
                        </div>
                        <div className="big-img img">
                            <img src={DogLicking}></img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ) 
}