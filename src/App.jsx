import Gallery from "./components/Gallery/Gallery"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {

  return (
    <Container>
      <Hero/>
      <Gallery/>
      <About/>
      <Contact/>
    </Container>
  )
}

export default App
