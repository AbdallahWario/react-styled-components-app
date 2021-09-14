import styled from "styled-components";
import woman from "../img/woman.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  margin: 20px;
  padding: 20px;
  display:flex;
  
`;
const Left = styled.div`
  width: 60%;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 40%;
  font-size: 20px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  margin-top: 20px;
`;
const Image =  styled.img`
width:100% ;

`;
const Info =  styled.div`
margin:50px ;
width: 60%;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Button =  styled.button`
padding: 15px;
letter-spacing:2px;
background-color:darkblue;
font-weight:bold;
cursor:pointer;
color:white;
border-radius:10px;
`;
const Contact =  styled.span`
display:flex;
flex-direction:column;

`;
const ContactNo =  styled.span`
color: #ff97af;
font-weight:bold;
`;
const Contactdesc =  styled.span`
color: gray;
margin-top:10px;
`;




const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>ADVENTURES IN CREATIVE AGE</Title>
        <Desc>
          We believe that designing products and Services in close partnership
          with our clients is the only way to have real impact on their
          business.
        </Desc>
        <Info>
          <Button>Start a Project</Button>
          <Contact>
            <ContactNo>Call us 0701779957</ContactNo>
            <Contactdesc>For any questions or concerns</Contactdesc>
          </Contact>
        </Info>
      </Left>
      <Right>
        {/* <Image  src= {woman}/> */}
        </Right>
        <AnimatedShapes/>
    </Container>
  );
};

export default Intro;
