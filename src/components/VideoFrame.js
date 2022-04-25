import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

export default function VideoFrame({ videoUrl }) {
  const [playing, setPlaying] = useState(false);

  function handleReady() {
    setPlaying(true);
  }

  return (
    <VideoWrapper>
      {videoUrl && (
        <ReactPlayer
          url={videoUrl}
          muted={true}
          onReady={handleReady}
          controls={true}
          playing={playing}
        />
      )}
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
