import React, { useEffect, useRef } from "react";
import { TweenMax, Expo } from "gsap";
import anime from "animejs";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

//CSS
const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	background: white;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const HeroImage = styled.div`
  position: absolute;
	top: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 600px){
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const WrapperImg = styled.div`
  position: absolute;
	overflow: hidden;
	position: relative;
	margin: 0 auto;
	width: 50%;
	height: 100vh;
  pointer-events: none;

  @media (max-width: 600px){
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    margin-left: 8vw;
  }
`;

const Img = styled.img`
  width: 100%;
	height: 100%;
	object-fit: cover;
  pointer-events: none;

  @media (max-width: 600px){
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 70vw;
    height: 100vh;
    margin-left: 8vw;
  }
`;

const Box = styled.div`
  background: white;
	opacity: 1;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 2;
  pointer-events: none;

  @media (max-width: 600px){
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const Images = styled.div`
  position: absolute;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
  pointer-events: none;
`;

const ImgDiv = styled.div`
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	height: 400px;
	background: black;
  pointer-events: none;
`;

const Left = styled(ImgDiv)`
  background: url("./Img/Left.png")
		no-repeat 50% 50%;
	background-size: cover;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 600px){
    display: none;
  }
`;

const Right = styled(ImgDiv)`
  background: url("./Img/Right.png")
		no-repeat 50% 50%;
	background-size: cover;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 600px){
    display: none;
  }
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "Roboto";
  font-size: 300px;
  pointer-events: none;
  z-index: 2;

  & .letter {
    display: inline-block;
    line-height: 1em;
    pointer-events: none;
  }

  @media (max-width: 2100px){
    font-size: 220px;
  }

  @media (max-width: 600px){
    font-size: 4em;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20vh;
  position: relative;
  z-index: 0;
`;

const Button = styled.button`
  border-style: none;
  background-color: black;
  color: white;
  font-family: "Roboto";
  font-size: 1.6vh;
  padding: 20px 60px;
  border-radius: 40px;
  position: relative;
  z-index: 0;
  transition: all 0.3s;

  @media (max-width: 2100px){
    font-size: 1.5vh;
    padding: 20px 50px;
  }

  &:hover{
    background-color: white;
    color: black;
    border: 2px solid black;
    transform: scale(1.1);
  }

  &:active{
    background-color: black;
    color: white;
  }
`;

function Hero() {
  const titleRef = useRef(null);
  const boxRef = useRef(null);
  const wrapperImgRef = useRef(null);
  const imgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const navRef = useRef(null);

  //Intro Animation
  useEffect(() => {

    if (titleRef.current) {
      const textContent = titleRef.current.textContent;
      titleRef.current.innerHTML = textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime.timeline().add({
      targets: titleRef.current.querySelectorAll(".letter"),
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 40 * i,
    });

    const tl = new TimelineMax();

    //Timeline
    tl.to(boxRef.current, 2.4, { 
      y: "-100%",
      ease: Expo.easeInOut
    }, 0)

    .from(imgRef, 4, { 
      scale: 2, 
      ease: Expo.easeInOut
    }, 1)

    .from(imgRef, 0.4, { 
      opacity: 0, 
      ease: Expo.easeInOut
    }, 3.4)
    
    .to(wrapperImgRef.current, 2.4, { 
      width: "400px", 
      height: "500px", 
      ease: Expo.easeInOut
    }, 3.6)

    .to(leftRef.current, 2, { 
      x: "-450", 
      rotation: -10, 
      ease: Expo.easeInOut
    }, 3.8)

    .to(rightRef.current, 2, { 
      x: "150", 
      rotation: 10, 
      ease: Expo.easeInOut
    }, 3.8);

  }, []);

  //HTML
  return (
    <Container id="hero">
      <Navbar/>
      <Images>
        <Left ref={leftRef}></Left>
        <Right ref={rightRef}></Right>
      </Images>

      <HeroImage>
        <WrapperImg ref={wrapperImgRef}>
          <Box ref={boxRef}></Box>
          <div>
            <Img
              className="image"
              src="./Img/Intro.png"
              alt="hero"
              ref={imgRef}
            />
          </div>
        </WrapperImg>
      </HeroImage>

      <div className="header">
        <Title ref={titleRef}>
          ADAM SHAH
        </Title>
      </div>
      <ButtonDiv>
        <a href="#gallery"><Button>Learn More</Button></a>
      </ButtonDiv>
    </Container>
  );
}

export default Hero;