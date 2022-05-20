import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import usePerson from '../hooks/usePerson';
import LoadingSpinner from '../components/LoadingSpinner';
import Navigation from '../components/Navigation';
import ButtonBack from '../components/ButtonBack';

export default function PersonDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { personDetails, isLoading } = usePerson(id);
  const { profile_path, name, biography, birthday, place_of_birth, deathday } =
    personDetails;
  const year = birthday?.substring(0, 4);
  const month = birthday?.substring(5, 7);
  const day = birthday?.substring(8, 10);

  return (
    <>
      <Main>
        <ButtonBack onClick={() => navigate(-1)} />
        {!isLoading && (
          <>
            <Wrapper>
              <Image
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={`${name}`}
              />
              <InnerWrapper>
                <section>
                  <h1>{name}</h1>
                  <p>
                    Geboren am: {day}.{month}.{year} <br /> in {place_of_birth}
                  </p>
                  {deathday && <p>Gestorben am: {deathday}</p>}
                </section>
              </InnerWrapper>
            </Wrapper>
            <section>
              <h3>Biographie:</h3>
              {biography ? (
                <p>{biography}</p>
              ) : (
                <p>Eine Biographie ist leider nicht vorhanden</p>
              )}
            </section>
          </>
        )}
        {isLoading && <LoadingSpinner />}
      </Main>
      <Navigation />
    </>
  );
}

const Main = styled.main`
  width: 100%;
  position: relative;
  margin-bottom: 85px;

  section {
    margin: 0;
    padding: 0 20px;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
    text-align: justify;
    hyphens: auto;
    line-height: 1.5;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 10px;
`;
