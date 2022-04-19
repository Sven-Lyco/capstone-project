import styled from 'styled-components';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function RatingCircle({ rating }) {
  function handleColor(rating) {
    if (rating <= 3.3) {
      return '#F25C78';
    }
    if (rating < 6.6) {
      return '#F2AF5C';
    }
    return '#2BD999';
  }

  return (
    <Wrapper>
      <CircularProgressbarWithChildren
        value={rating}
        maxValue={10}
        minValue={0}
        background
        backgroundPadding={9}
        styles={buildStyles({
          backgroundColor: '#454545',
          pathColor: handleColor(rating),
          trailColor: 'transparent',
          strokeLinecap: 'round',
          pathTransitionDuration: 0.5,
        })}
      >
        <TextWrapper>
          <RatingText>
            <ScreenReaderOnly>Bewertung:</ScreenReaderOnly>
            {`${rating}`}
            <ScreenReaderOnly>von 10</ScreenReaderOnly>
          </RatingText>
        </TextWrapper>
      </CircularProgressbarWithChildren>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: calc((120px / 2) - (45px / 2));
  bottom: -20px;
  height: 45px;
  width: 45px;
`;

const TextWrapper = styled.div`
  margin-top: -23px;
`;

const RatingText = styled.span`
  font-size: 0.85em;
`;
