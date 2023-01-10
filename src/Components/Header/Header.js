import "./Header.css"
import Maya from "../../imgs/Maya photo.jpg"

export function Header() {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Marlon Leon</h1>
                <h5 className="text-light">Front-End Developer</h5>
                <div className="card-group">
                    <div className="big-img">
                        <img src={Maya} alt="me"></img>
                    </div>
                    <div className="big-img">

                    </div>
                    <div className="big-img">
                        
                    </div>
                    <div className="big-img">
                        
                    </div>
                    <div className="small-img">
                        
                    </div>
                    <div className="small-img">
                        
                    </div>
                    <div className="small-img">
                        
                    </div>
                    <div className="small-img">
                        
                    </div>
                </div>
            </div>
        </header>
    ) 
}