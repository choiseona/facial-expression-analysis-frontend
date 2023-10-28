import useWebcam from "@/hooks/useWebcam";
import { useEffect } from "react";
import styled from "styled-components";

interface props {
  setCapturedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

function Webcam({ setCapturedImages }: props) {
  const { startWebcam, setTimer, videoRef, canvasRef } = useWebcam({
    setCapturedImages,
  });

  useEffect(() => {
    startWebcam();
    setTimer();
  }, []);

  return (
    <>
      <Video ref={videoRef} autoPlay playsInline muted />
      <Canvas ref={canvasRef} style={{ display: "none" }} />
      <button onClick={setTimer}>gg</button>
    </>
  );
}

export default Webcam;

const Video = styled.video`
  position: absolute;
  left: -100000px;
`;

const Canvas = styled.canvas`
  display: none;
`;
