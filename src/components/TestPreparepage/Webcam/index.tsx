import { useEffect, useRef } from "react";
import styled from "styled-components";
function Webcam() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    startWebcam();
  }, []);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadeddata = () => {
          videoRef.current?.play();
        };
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  return (
    <>
      <Video ref={videoRef} autoPlay playsInline muted />
    </>
  );
}

export default Webcam;

const Video = styled.video`
  width: 30%;
`;
