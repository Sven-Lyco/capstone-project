import { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

export default function VideoFrame({ videoList }) {
  const [playing, setPlaying] = useState(false);

  function handleReady() {
    setPlaying(true);
  }

  const videoUrl = videoList
    ?.filter(
      video =>
        video.site === 'YouTube' &&
        video.type === 'Trailer' &&
        video.size >= 720
    )
    ?.map(video => `https://www.youtube.com/watch?v=${video.key}wowK7ADGRsQ`);

  return (
    <VideoWrapper>
      <ReactPlayer
        url={videoUrl}
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
