import styled from 'styled-components';
import Header from '../components/Header';

export default function ChildPage() {
  return (
    <Wrapper>
      <Header />
      <StyledSection>
        <span>Du bist leider noch zu Jung um diese App nutzen zu können</span>
      </StyledSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  span {
    padding: 10px;
    text-align: center;
    line-height: 1.5;
  }
`;
