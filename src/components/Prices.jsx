import React from 'react'
import styled from 'styled-components';
import PriceCard from './PriceCard'

const Container = styled.div`
  display:flex;
  margin:20px;
  overflow: hidden;
  position: relative;
  align-items:center;
  justify-content:center;
  

`;

const Prices = () => {
    return (
        <Container>
            <PriceCard plan="Basic" amount="20"/>
            <PriceCard plan="Premium" amount="40"/>
            <PriceCard   plan="Advance" amount="80"/>
            


        </Container>
    )
}

export default Prices
