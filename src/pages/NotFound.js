import { NavLink } from 'react-router-dom';
import { isChrome } from 'react-device-detect';
import { GoHome } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export default function NotFound() {
  return (
    <Wrapper>
      {isChrome ? (
        <h1>ERROR 404</h1>
      ) : (
        <AnimatedGradientText>ERROR 404</AnimatedGradientText>
      )}

      <span>🎉🥳</span>
      <span>Herzlichen Glückwunsch!</span>
      <span>Du hast eine Seite gefunden, die es nicht gibt!</span>
      <StyledNavLink to="/">
        <GoHome />
        <GoChevronLeft />
        <span>zurück</span>
      </StyledNavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: papayawhip;
  color: hotpink;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  align-self: center;
  height: 50px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 90, 54);
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
`;

const gradient = keyframes`
0% {background-position: 0 50%;}
50% {background-position: 100% 50%;}
100% {background-position: 0 50%;}`;

const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(
    to right,
    #f2f2f2,
    #aebcbf,
    #454545,
    #121212,
    #2bd999,
    #3d90d9,
    #f25c78,
    #f2af5c
  );
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
