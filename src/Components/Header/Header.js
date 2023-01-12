import "./Header.css"
import GraduationSitting from "../../imgs/Graduation Sitting.avif"
import Computer from "../../imgs/Computer.avif"
import MiamiShirt from "../../imgs/Miami shirt.avif"
import MayaAndMe from "../../imgs/Maya and Me.avif"



export function Header() {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Marlon Leon</h1>
                <h5 className="text-light">Front-End Developer</h5>
                <div className="img-container">
                    <div className="img-group">
                        <div className="big-img img">
                            <img src={MayaAndMe}></img>
                        </div>
                        <div className="big-img img">
                            <img src={Computer}></img>
                        </div>
                        <div className="big-img img">
                            <img src={MiamiShirt}></img>
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