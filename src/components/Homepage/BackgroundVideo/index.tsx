import background from "@/assets/video/background.mp4";
import styled from "styled-components";

const Source = styled.source``;

function BackgroundVideo() {
  return (
    <Wrapper role="videoWrapper">
      <UpperShadow />
      <BelowShadow />

      <VideoPlayer autoPlay muted loop role="videoPlayer">
        <Source role="videoSource" src={background} type="video/mp4" />
      </VideoPlayer>
    </Wrapper>
  );
}

export default BackgroundVideo;

const UpperShadow = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh; /* 1/2 높이 */
  background: linear-gradient(to top, transparent 20%, black 80%);
`;

const BelowShadow = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%; /* 1/2 위치 */
  left: 0;
  width: 100%;
  height: 50vh; /* 1/2 높이 */
  background: linear-gradient(to top, black 20%, transparent 80%);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
