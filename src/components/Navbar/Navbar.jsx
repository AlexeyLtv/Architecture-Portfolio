import "./navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            {/* Logo */}
            <div className="logo">
                <a href="#hero"><h2>ADAMSHAH</h2></a>
            </div>

            {/* Middle */}
            <div className="middle">
                <a href="#gallery"><h2>Gallery</h2></a>
                <a href="#about"><h2>About</h2></a>
                <a href="#contact"><h2>Contact</h2></a>
            </div>

            {/* Contact */}
            <div className="contact">
                <a href="./cv.pdf" download><h2>Download CV</h2></a>
            </div>
        </div>
    )
}

export default Navbar