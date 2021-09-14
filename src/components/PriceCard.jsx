import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 20px;
  justify-content:center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: gray;
  margin-right:30px;
  border-radius: 10px;
`;
const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  padding: 15px 10px;
  width:300px;
  color: white;
  background: darkblue;
  border-radius: 10px;
  margin: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const PlanButton = styled.button`
  padding: 15px 10px;
  width:300px;
  color: white;
  background: darkblue;
  border-radius: 20px;
  margin: 10px;
  letter-spacing: 2px;
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Price = styled.span`
  font-size:50px;
  font-weight:bold;
  display:flex;
  align-items:center;
`;
const PriceWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;


const PriceCard = ({amount,plan}) => {
    return (
        <Container>
            <PriceWrapper>
          $<Price> {amount}</Price>/month <br/>
             
            </PriceWrapper>
            <PlanButton>{plan}</PlanButton>
            <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>{" "}
      </List>
            <Button>Join Now</Button>
        </Container>
    )
}

export default PriceCard
