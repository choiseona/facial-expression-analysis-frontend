import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const Source = styled.source``;

function BackgroundVideo() {
  return (
    <Wrapper>
      <Video autoPlay muted loop>
        <Source
          data-testid="background-video"
          src="/src/assets/video/background-video.mp4"
          type="video/mp4"
        />
      </Video>
    </Wrapper>
  );
}

export default BackgroundVideo;
