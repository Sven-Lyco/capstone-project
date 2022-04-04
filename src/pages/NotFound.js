import { useNavigate } from 'react-router-dom';
import { GoHome, GoChevronLeft } from 'react-icons/go';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <AnimatedGradientText>ERROR 404</AnimatedGradientText>
      <span>🎉🥳</span>
      <span>Herzlichen Glückwunsch!</span>
      <span>Du hast eine Seite gefunden, die es nicht gibt!</span>
      <Button buttonType="neueFische" onClick={() => navigate(-1)}>
        <GoHome />
        <GoChevronLeft />
        <span>zurück</span>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: papayawhip;
  color: hotpink;

  span {
    text-align: center;
  }
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
