import { capturedImagesAtom } from "@/global/store";
import useWebcam from "@/hooks/useWebcam";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import styled from "styled-components";

function Webcam() {
  const setCapturedImages = useSetAtom(capturedImagesAtom);
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
    </>
  );
}

export default Webcam;

const Video = styled.video`
  position: absolute;
  left: -100000px;
  transform: scaleX(-1);
`;

const Canvas = styled.canvas`
  display: none;
`;
