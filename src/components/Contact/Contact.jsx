import Navbar from "../Navbar/Navbar";
import "./contact.css";

const Contact = () => {
    return(
        <div className="contact-me" id="contact">
            <Navbar/>
            {/* Email */}
            <div className="email">
                <div className="work">
                    <h1>LET`S TALK</h1>
                </div>
                <div className="mail">
                    <a href="mailto:adamshah@gmail.com" ><h1>adamshah@gmail.com</h1></a>
                </div>
            </div>

            {/* Line */}
            <div className="line">
                <div className="line-self"></div>
            </div>

            {/* Map */}
            <div className="map">
                {/* Sitemap */}
                <div className="sitemap">
                    <ul>
                        <li className="list-title" >Site Map</li>
                        <a href="#hero"><li>Home</li></a>
                        <a href="#gallery"><li>Gallery</li></a>
                        <a href="#about"><li>About</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </div>

                {/* Social */}
                <div className="social">
                    <ul>
                        <li className="list-title" >Social</li>
                        <a target="_blank" href=""><li>Instagram</li></a>
                        <a target="_blank" href=""><li>Twitter</li></a>
                        <a href="mailto:adamshah@gmail.com" ><li>Email</li></a>
                        <a href="./cv.pdf" download><li>CV</li></a>
                    </ul>
                </div>
            </div>

            {/* Logo */}
            <div className="footer">
                <h1>ADAM SHAH<span>TM</span></h1>
            </div>
        </div>
    )
}

export default Contact