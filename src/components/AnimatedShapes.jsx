import React from "react";
import styled from "styled-components";

const Rect = styled.div`
  width: 60px;
  height: 100px;
  background-color: #669966;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;

  animation: rect 25s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;
const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 25s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw,100vh);
    }
  }
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #ff97af;
  position: absolute;
  top:  300px;
  left:  -70px;
  z-index: -1;

  animation: circle 20s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw,-100vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
};

export default AnimatedShapes;
