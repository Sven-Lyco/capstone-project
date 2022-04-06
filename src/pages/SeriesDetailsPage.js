import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Poster from '../components/Poster';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import LoadingSpinner from '../components/LoadingSpinner';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow_back.svg';
import { ReactComponent as PlusIcon } from '../assets/icons/plus_icon.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete_icon.svg';
import useSeriesDetails from '../hooks/useSeriesDetails';

export default function SeriesDetailsPage({
  onHandleAddSeries,
  checkIsOnWatchlist,
  onHandleDeleteItem,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: seriesDetails, isLoading } = useSeriesDetails(id);
  const isOnWatchlist = checkIsOnWatchlist(id);

  const {
    name,
    poster_path: posterPath,
    number_of_seasons: seasons,
    first_air_date: firstAirDate,
    overview,
    backdrop_path: backdropPath,
  } = seriesDetails;

  return (
    <Wrapper>
      <StyledButtonBack onClick={() => navigate(-1)}>
        <StyledArrowBackIcon />
        <ScreenReaderOnly>Zurück</ScreenReaderOnly>
      </StyledButtonBack>
      {!isLoading ? (
        <>
          <StyledBackdropImage backdropPath={backdropPath} />
          <StyledHeader>
            <Poster
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300${posterPath}`
                  : require('../assets/images/poster.png')
              }
              alt={`${name}`}
            />
            <StyledHeaderBox>
              <StyledTitle>{name}</StyledTitle>
              <p>
                {seasons}
                {seasons === 1 ? ' Staffel - ' : ' Staffeln - '}

                {firstAirDate
                  ? firstAirDate.substr(0, 4)
                  : 'kein Release Datum vorhanden'}
              </p>
              {!isOnWatchlist ? (
                <StyledAddButton
                  onClick={() => onHandleAddSeries(id, name, posterPath)}
                >
                  <StyledDeleteIcon />
                </StyledAddButton>
              ) : (
                <StyledDeleteButton onClick={() => onHandleDeleteItem(id)}>
                  <StyledPlusIcon />
                </StyledDeleteButton>
              )}
            </StyledHeaderBox>
          </StyledHeader>
          <StyledMain>
            <h3>Handlung</h3>
            <p>
              {overview
                ? overview
                : 'Aktuell ist leider keine Beschreibung verfügbar'}
            </p>
          </StyledMain>
        </>
      ) : (
        <>
          <LoadingSpinner />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledBackdropImage = styled.div`
  z-index: -1;
  position: relative;
  @media (min-width: 576px) {
    min-height: ${({ backdropPath }) => (backdropPath ? `360px` : `140px`)};
  }

  min-height: ${({ backdropPath }) => (backdropPath ? `300px` : `140px`)};

  height: 100%;
  background: ${({ backdropPath }) =>
      backdropPath
        ? `url(https://image.tmdb.org/t/p/original${backdropPath})`
        : ''}
    center 0 no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -60px;
  box-shadow: inset 0px -65px 50px 0px var(--color-black);
`;

const StyledButtonBack = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-white);
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: var(--border-radius);
`;

const StyledHeader = styled.header`
  display: flex;
  max-height: 180px;
  margin-left: 20px;
`;

const StyledTitle = styled.span`
  font-size: x-large;
  font-weight: bold;
  margin: 0;
  padding: 25px 0px 5px;
`;

const StyledHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  margin: 10px;
  width: 100%;

  p {
    font-size: large;
    font-style: italic;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;

const StyledMain = styled.main`
  margin: 20px;
  padding: 0;
`;

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-orange);
`;

const StyledDeleteIcon = styled(PlusIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: 50%;
`;

const StyledDeleteButton = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-orange);
`;

const StyledPlusIcon = styled(DeleteIcon)`
  background-color: rgba(18, 18, 18, 0.4);
  border-radius: 50%;
`;
