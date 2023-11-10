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
    sad: 0,
  });
  const [step, setStep] = useState(1);
  const [sample, setSample] = useState<{
    id: number | undefined;
    base64Image: string[] | undefined;
    comment: string[] | undefined;
  }>({
    id: undefined,
    base64Image: undefined,
    comment: undefined,
  });

  useEffect(() => {
    console.log(detailEmotion);
  }, [detailEmotion]);

  useEffect(() => {
    setSample({
      id: 2,
      comment: ["테스트1", "테스트2", "테스트3"],
      base64Image: [
        "/src/assets/image/puppy1.jpg",
        "/src/assets/image/puppy2.jpg",
        "/src/assets/image/puppy3.jpg",
      ],
    });
  }, []);

  return (
    <>
      <FlexCenter>
        <TestSample
          setImageLoaded={setImageLoaded}
          step={step}
          sample={sample}
        />
        {capturedImages.length === 5 && (
          <EmotionTF
            setEmotionTF={setEmotionTF}
            emotionTF={emotionTF}
            setDetailEmotion={setDetailEmotion}
          />
        )}
        {capturedImages.length === 5 && emotionTF && (
          <EmotionChoice setDetailEmotion={setDetailEmotion} />
        )}
        {capturedImages.length === 5 && step < 3 && (
          <NextTestButton
            sample={sample}
            step={step}
            detailEmotion={detailEmotion}
            setStep={setStep}
            setCapturedImages={setCapturedImages}
            setImageLoaded={setImageLoaded}
            setEmotionTF={setEmotionTF}
            setDetailEmotion={setDetailEmotion}
          />
        )}
        {capturedImages.length === 5 && step === 3 && <TestResultButton />}
      </FlexCenter>
      {imageLoaded && <Webcam setCapturedImages={setCapturedImages} />}
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
