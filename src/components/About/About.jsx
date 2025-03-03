import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import "./about.css";

const Picture = styled.div`
    width: 17vw;
    height: 17vw;
    background-image: url("./Img/AdamProfile.png");
    background-position: 30%;
    background-repeat: no-repeat;
    background-size: 150%;
    margin-left: 3vw;
    z-index: 5;
    flex-shrink: 0;

    @media (max-width: 600px){
        width: 140px;
        height: 140px;
    }
`

const About = () => {
    return(
        <div className="about" id="about">
            {/* Navbar */}
            <Navbar/>

            {/* Content */}
            <div className="content">

                {/* Left */}
                <div className="left">
                    <div className="img">
                        <Picture></Picture>
                    </div>
                    <div className="who">
                        <h1>WHO</h1> 
                        <h1>AM I?</h1>
                    </div>
                </div>

                {/* Right */}
                <div className="right">
                    <p>
                        I am Adam Shahidov, a civil architect based in Antalya, Turkey. I enjoy incorporating local culture into functional spaces and innovative solutions.
                    </p>
                    <p className="gray">
                        I focus on human-centered design and <span>collaborate</span> with teams. By merging timeless aesthetics with new techniques, I aim to enrich everyday life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About