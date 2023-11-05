import Webcam from "@/components/TestProgresspage/Webcam";
import TestSample from "@/components/TestProgresspage/TestSample";
import styled from "styled-components";
import { useState, useEffect } from "react";
import EmotionTF from "@/components/TestProgresspage/EmotionTF";
import EmotionChoice from "@/components/TestProgresspage/EmotionChoice";
import NextTestButton from "@/components/TestProgresspage/NextTestButton";
import TestResultButton from "@/components/TestProgresspage/TestResultButton";

function TestProgressPage() {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [emotionTF, setEmotionTF] = useState(true);
  const [detailEmotion, setDetailEmotion] = useState({
    happy: 0,
    surprise: 0,
    angry: 0,
    fear: 0,
    disgust: 0, //disgust 없애기
    sad: 0,
  });
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(imageLoaded);
  }, [imageLoaded]);

  return (
    <>
      <FlexCenter>
        <TestSample setImageLoaded={setImageLoaded} />
        {capturedImages.length === 5 && (
          <EmotionTF setEmotionTF={setEmotionTF} emotionTF={emotionTF} />
        )}
        {capturedImages.length === 5 && emotionTF && (
          <EmotionChoice setDetailEmotion={setDetailEmotion} />
        )}
        {capturedImages.length === 5 && step <= 3 && (
          <NextTestButton
            step={step}
            setStep={setStep}
            detailEmotion={detailEmotion}
            setImageLoaded={setImageLoaded}
          />
        )}
        {capturedImages.length === 5 && step > 3 && <TestResultButton />}
      </FlexCenter>
      {imageLoaded && <Webcam setCapturedImages={setCapturedImages} />}
      {capturedImages.length === 5 && console.log(capturedImages)}
    </>
  );
}

export default TestProgressPage;

const FlexCenter = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 90px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
