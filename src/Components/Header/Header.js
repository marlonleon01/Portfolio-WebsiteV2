import {useEffect, useRef} from "react"
import "./Header.css"
import GraduationSitting from "../../imgs/Graduation Sitting.webp"
import Computer from "../../imgs/Computer.webp"
import MiamiShirt from "../../imgs/Miami shirt.webp"
import MayaAndMe from "../../imgs/Maya and Me.webp"



export function Header() {
    const divRef1 = useRef(null)
    const divRef2 = useRef(null)
    const divRef3 = useRef(null)
    const divRef4 = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            const imgClasses = [
                "big-img1-effect", 
                "big-img2-effect", 
                "big-img3-effect", 
                "big-img4-effect"
            ]

            divRef1.current.classList.add(imgClasses[0])            
            divRef2.current.classList.add(imgClasses[1])            
            divRef3.current.classList.add(imgClasses[2])            
            divRef4.current.classList.add(imgClasses[3])            
        }, 1000)
    }, [])

    return (
        <header id="home">
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Marlon Leon</h1>
                <h5 className="text-light">Full-Stack Developer</h5>
                <div className="img-container">
                    <div className="img-group">
                        <div className="big-img1 img" ref={divRef1}>
                            <img src={MayaAndMe} alt="Maya and Me"></img>
                        </div>
                        <div className="big-img2 img" ref={divRef2}>
                            <img src={Computer} alt="Computer"></img>
                        </div>
                        <div className="big-img3 img" ref={divRef3}>
                            <img src={MiamiShirt} alt="Marlon"></img>
                        </div>
                        <div className="big-img4 img" ref={divRef4}>
                            {/* Main Image */}
                            <img src={GraduationSitting} alt="Graduation" rel="preload" as="image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    ) 
}