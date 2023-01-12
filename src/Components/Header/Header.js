import "./Header.css"
import GraduationSitting from "../../imgs/Graduation Sitting.webp"
import Computer from "../../imgs/Computer.webp"
import MiamiShirt from "../../imgs/Miami shirt.webp"
import MayaAndMe from "../../imgs/Maya and Me.webp"



export function Header() {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Marlon Leon</h1>
                <h5 className="text-light">Front-End Developer</h5>
                <div className="img-container">
                    <div className="img-group">
                        <div className="big-img img" >
                            <img src={MayaAndMe} alt="Maya and Me Image"></img>
                        </div>
                        <div className="big-img img">
                            <img src={Computer} alt="Image of computer"></img>
                        </div>
                        <div className="big-img img">
                            <img src={MiamiShirt} alt="Image of Me"></img>
                        </div>
                        <div className="big-img img">
                            {/* Main Image */}
                            <img src={GraduationSitting} alt="Graduation Image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ) 
}