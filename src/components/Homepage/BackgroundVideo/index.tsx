import styled from "styled-components";

const Video = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
`;

const Source = styled.source``;

function BackgroundVideo() {
  return (
    <Video autoPlay muted loop>
      <Source
        data-testid="background-video"
        src="/src/assets/video/background-video.mp4"
        type="video/mp4"
      />
    </Video>
  );
}

export default BackgroundVideo;
