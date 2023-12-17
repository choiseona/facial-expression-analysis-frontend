import Webcam from "@/components/TestProgresspage/Webcam";
import TestSample from "@/components/TestProgresspage/TestSample";
import styled from "styled-components";
import { useState, useEffect } from "react";
import EmotionTF from "@/components/TestProgresspage/EmotionTF";
import EmotionChoice from "@/components/TestProgresspage/EmotionChoice";
import NextTestButton from "@/components/TestProgresspage/NextTestButton";
import TestResultButton from "@/components/TestProgresspage/TestResultButton";
import { DropdownOpenType } from "@/global/type";
import getSamples from "@/apis/getSamples";
import { initialEmotionDropDown } from "@/global/data";
import FadeFramerMotion from "@/components/Common/FadeFramerMotion";
import { useAnimation } from "framer-motion";
import DropDownMotion from "@/components/Common/DropDownMotion";
import { useSetAtom, useAtomValue } from "jotai";
import {
  capturedImagesAtom,
  emotionTFAtom,
  idsAtom,
  imageLoadedAtom,
  samplesAtom,
  stepAtom,
} from "@/global/store";

function TestProgressPage() {
  const setIds = useSetAtom(idsAtom);
  const step = useAtomValue(stepAtom);
  const setSamples = useSetAtom(samplesAtom);
  const capturedImages = useAtomValue(capturedImagesAtom);
  const imageLoaded = useAtomValue(imageLoadedAtom);
  const emotionTF = useAtomValue(emotionTFAtom);

  const [dropdownOpen, setDropdownOpen] = useState<DropdownOpenType>(
    initialEmotionDropDown
  );
  const emotionDetailControl = useAnimation();
  const emotionDropdownControls = {
    happy: useAnimation(),
    surprise: useAnimation(),
    angry: useAnimation(),
    fear: useAnimation(),
    sad: useAnimation(),
  };

  useEffect(() => {
    getSamples({ setSamples, setIds });
  }, []);

  return (
    <FadeFramerMotion>
      <FlexCenter $isCenter={capturedImages.length !== 5 || !emotionTF}>
        <FadeFramerMotion key={step}>
          <TestSample />
        </FadeFramerMotion>

        {capturedImages.length === 5 && (
          <EmotionTF
            emotionDetailControl={emotionDetailControl}
            emotionDropdownControls={emotionDropdownControls}
            setDropdownOpen={setDropdownOpen}
          />
        )}

        {capturedImages.length === 5 && (
          <DropDownMotion controls={emotionDetailControl} initial="open">
            <EmotionChoice
              dropdownOpen={dropdownOpen}
              emotionDropdownControls={emotionDropdownControls}
              setDropdownOpen={setDropdownOpen}
            />
          </DropDownMotion>
        )}

        {capturedImages.length === 5 && step < 3 && <NextTestButton />}
        {capturedImages.length === 5 && step === 3 && <TestResultButton />}
      </FlexCenter>
      {imageLoaded && <Webcam />}
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
