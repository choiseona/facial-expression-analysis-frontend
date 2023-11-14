import Webcam from "@/components/TestProgresspage/Webcam";
import TestSample from "@/components/TestProgresspage/TestSample";
import styled from "styled-components";
import { useState, useEffect } from "react";
import EmotionTF from "@/components/TestProgresspage/EmotionTF";
import EmotionChoice from "@/components/TestProgresspage/EmotionChoice";
import NextTestButton from "@/components/TestProgresspage/NextTestButton";
import TestResultButton from "@/components/TestProgresspage/TestResultButton";
import { DropdownOpenType, SampleType } from "@/global/type";
import getSamples from "@/apis/getSamples";
import {
  initialEmotion,
  initialEmotionDropDown,
  initialSample,
  testSample,
} from "@/global/data";
import FadeFramerMotion from "@/components/Common/FadeFramerMotion";
import { useAnimation } from "framer-motion";
import DropDownMotion from "@/components/Common/DropDownMotion";

interface Props {
  setId: React.Dispatch<React.SetStateAction<number[] | undefined>>;
}

function TestProgressPage({ setId }: Props) {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [emotionTF, setEmotionTF] = useState(true);
  const [detailEmotion, setDetailEmotion] = useState(initialEmotion);
  const [dropdownOpen, setDropdownOpen] = useState<DropdownOpenType>(
    initialEmotionDropDown
  );
  const [step, setStep] = useState(1);
  const [sample, setSample] = useState<SampleType[]>([initialSample]);
  const emotionDetailControl = useAnimation();

  const emotionDropdownControls = {
    happy: useAnimation(),
    surprise: useAnimation(),
    angry: useAnimation(),
    fear: useAnimation(),
    sad: useAnimation(),
  };

  useEffect(() => {
    setSample(
      testSample.map((item: SampleType) => ({
        id: item.id,
        sampleImg: item.sampleImg,
        comment: item.comment,
      }))
    );
    setId(testSample.map((item: SampleType) => item.id || 0));
  }, []);

  useEffect(() => {
    setDropdownOpen(initialEmotionDropDown);
    setDetailEmotion(initialEmotion);

    Object.keys(emotionDropdownControls).forEach((key) => {
      emotionDropdownControls[
        key as keyof typeof emotionDropdownControls
      ].start("closed");
    });
  }, [emotionTF]);

  useEffect(() => {
    setCapturedImages([]);
    setImageLoaded(false);
    setEmotionTF(true);
    setDetailEmotion(initialEmotion);
  }, [step]);

  /*
  useEffect(() => {
    getSamples({ setSample, setId });
  }, []);
*/

  return (
    <FadeFramerMotion>
      <FlexCenter $isCenter={capturedImages.length !== 5 || !emotionTF}>
        <FadeFramerMotion key={step}>
          <TestSample
            capturedImages={capturedImages}
            setImageLoaded={setImageLoaded}
            sample={sample[step - 1]}
          />
        </FadeFramerMotion>

        {capturedImages.length === 5 && (
          <EmotionTF
            setEmotionTF={setEmotionTF}
            emotionTF={emotionTF}
            emotionDetailControl={emotionDetailControl}
          />
        )}

        {capturedImages.length === 5 && (
          <DropDownMotion controls={emotionDetailControl} initial="open">
            <EmotionChoice
              emotionDropdownControls={emotionDropdownControls}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              setDetailEmotion={setDetailEmotion}
              emotionTF={emotionTF}
            />
          </DropDownMotion>
        )}

        {capturedImages.length === 5 && step < 3 && (
          <NextTestButton
            id={sample[step - 1].id}
            detailEmotion={detailEmotion}
            capturedImages={capturedImages}
            setStep={setStep}
          />
        )}
        {capturedImages.length === 5 && step === 3 && (
          <TestResultButton
            detailEmotion={detailEmotion}
            id={sample[step - 1].id}
            capturedImages={capturedImages}
          />
        )}
        {imageLoaded && <Webcam setCapturedImages={setCapturedImages} />}
      </FlexCenter>
    </FadeFramerMotion>
  );
}

export default TestProgressPage;

const FlexCenter = styled.div<{ $isCenter: boolean }>`
  width: 90%;
  min-height: 100%;
  padding-top: ${(props) => (props.$isCenter ? "0" : "90px")};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
