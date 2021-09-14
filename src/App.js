import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Services from "./components/Services";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shapes = css`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shapes}
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const FeaturesShape = styled.div`
  ${Shapes}
  // clip-path: polygon(55% 0%, 55% 0%, 0% 100%, 0% 1%, 0% 0%);
clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;
const ServicesShape = styled.div`
  ${Shapes}
clip-path: polygon(0% 0%, 46% 0%, 46% 100%, 0% 100%);

background-color: crimson;
margin-top:2px;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Features />
        <FeaturesShape />
      </Container>
      <Container>
        <Services />
        {/* <ServicesShape/> */}
      </Container>
      <Container>
        <Prices/>
      </Container>
       <Container>
        <Contact/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
