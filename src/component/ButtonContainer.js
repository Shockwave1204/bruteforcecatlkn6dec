import React from 'react';
import styled, { keyframes } from 'styled-components';

const neonGlow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4);
  }
`;

const ButtonContainer = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background: none;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  transition: background 0.5s ease-out, color 0.5s ease-out;

  &:hover {
    background: #0c1022; /* Fill color when hovering */
    color: #fff; /* Text color when hovering */
    animation: ${neonGlow} 1s infinite alternate; /* White neon glow animation */
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  }
`;

function AnimatedButton() {
  return <ButtonContainer>Hover Me</ButtonContainer>;
}

export default AnimatedButton;
