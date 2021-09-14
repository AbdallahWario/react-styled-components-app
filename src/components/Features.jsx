import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 display:flex;
`;
const Left = styled.div`
width: 50%;
`;
const Right = styled.div`
width: 50%;
display:flex;
flex-direction:column;
`;

const Title = styled.h1`
font-size:50px;

`;
const SubTitle = styled.h2`
font-style:italic;

`;
const Desc =   styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px

`;

const Button = styled.button `
padding:15px 10px;
color:white;
background:darkblue;
border-radius:20px;
margin-bottom:30px;
letter-spacing:2px;
cursor:pointer;
`;



const Features = () => {
    return (
        <Container>
            <Left></Left>
            <Right>
                <Title>  <b>good</b> design
          <br />
          <b>good</b> business</Title>
          <SubTitle>We know that good design means good business.</SubTitle>
          <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
            </Right>
        </Container>
    )
}

export default Features
