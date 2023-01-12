import "./Header.css"
import GraduationSitting from "../../imgs/Graduation Sitting.JPG"
import Computer from "../../imgs/Computer.jpg"
import MiamiShirt from "../../imgs/Miami shirt.jpg"
import BeReal from "../../imgs/BeReal.jpg"
import Milo from "../../imgs/Milo.JPG"
import Munchkin from "../../imgs/Munchkin.jpg"
import MayaAndMe from "../../imgs/Maya and Me.JPG"
import LuciaAndMe from "../../imgs/Lucia and Me.jpg"


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
                            <img src={LuciaAndMe}></img>
                        </div>
                        <div className="big-img img">
                            <img src={BeReal}></img>
                        </div>
                        <div className="small-img img">
                            <img src={Munchkin}></img>
                        </div>
                        <div className="big-img img">
                            <img src={Computer}></img>
                        </div>
                        
                        <div className="small-img img">
                            <img src={MayaAndMe}></img>
                        </div>
                        <div className="big-img img">
                            <img src={MiamiShirt}></img>
                        </div>
                        
                        <div className="small-img img">
                            <img src={Milo}></img>
                        </div>
                        <div className="big-img img">
                            {/* Main Image */}
                            <img src={GraduationSitting}></img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ) 
}