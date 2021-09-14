import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";
import Play from "../img/play.png"
import woman1 from "../img/woman1.jpg"


const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  position:relative;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  display: flex;
 
`;
const Button = styled.button`
  padding: 15px 10px;
  width:300px;
  color: white;
  background: darkblue;
  border-radius: 20px;
  margin: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const PlayButton = styled.img`
width: 20px;
margin-right:20px;
`;
const LeftImg = styled.img`
width: 100%;
height:100%;
display:${(props)=>props.open && "none"};
`;

const Video = styled.video`
height:300px;
margin-right:20px;
position:absolute;
top:2;
left:0;
bottom:0;
display:${(props)=>!props.open && "none"}
`;

// const OnClickfunc=()=>{
//   return setOPen(!open);

// }
const Services = () => {

const [open, setOPen] = useState(true);
    
  return (
    <Container>
      <Left>
          <LeftImg open={open} src={woman1}/>
          <Video open={open} 
          autoPlay
          loop
          controls
           src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />

      </Left>
      <Right>
        <Title>Simple Process to Start</Title>
        <Desc>
          We provide digital experience services to startups and small
          businesses to looking for a partner of their digital media, design &
          development, lead generation and communications requirents. We work
          with you, not for you. Although we have a great resources
        </Desc>
        <Wrapper>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </Wrapper>

        <Button onClick={()=>setOPen(!open)}>
            <PlayButton
            src={Play}
            />  Learn How</Button>
      </Right>
    </Container>
  );
};

export default Services;
