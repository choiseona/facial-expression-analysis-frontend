import { useRef } from "react";
interface props {
  setCapturedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

function useWebcam({ setCapturedImages }: props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

  const captureWebcam = () => {
    if (videoRef.current === null || canvasRef.current === null) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    if (context && video.videoWidth && video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.scale(-1, 1);

      // 원본 비디오의 가로 길이만큼 이동하여 좌우 반전 효과를 얻음
      context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL("image/jpeg");
      setCapturedImages((prevImages) => [...prevImages, imageDataUrl]);
    }
  };

  const setTimer = () => {
    let repeatCount = 0;
    const repeatInterval = 3000 / 5;
    let lastTimestamp = 0;

    const setTimeInterval = (timestamp: number) => {
      const elapsedTime = timestamp - lastTimestamp;
      if (elapsedTime >= repeatInterval) {
        repeatCount++;
        lastTimestamp = timestamp;
        captureWebcam();
      }

      if (repeatCount <= 5) {
        //왜 '<5' 로 하면 4번만 캡처되지? 해결해야함
        requestAnimationFrame(setTimeInterval);
      }
    };
    requestAnimationFrame(setTimeInterval);
  };

  return { startWebcam, captureWebcam, setTimer, videoRef, canvasRef };
}

export default useWebcam;
