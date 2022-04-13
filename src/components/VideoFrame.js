import { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

export default function VideoFrame({ src }) {
  const [playing, setPlaying] = useState(false);

  function handleReady() {
    setPlaying(true);
  }
  return (
    <VideoWrapper>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=lsD1xWpkQU4"
        muted={true}
        onReady={handleReady}
        controls={true}
        playing={playing}
      />
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;
