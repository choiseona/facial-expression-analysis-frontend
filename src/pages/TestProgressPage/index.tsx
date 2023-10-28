import Background from "@/components/Common/Background";
import Header from "@/components/Common/Header";
import Webcam from "@/components/TestProgresspage/Webcam";
import TestSample from "@/components/TestProgresspage/TestSample";
import styled from "styled-components";
import { useState } from "react";
import EmotionTF from "@/components/TestProgresspage/EmotionTF";

function TestProgressPage() {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Background>
        <Header />
        <FlexCenter>
          <TestSample setImageLoaded={setImageLoaded} />
          <EmotionTF></EmotionTF>
        </FlexCenter>
        {imageLoaded && <Webcam setCapturedImages={setCapturedImages} />}
      </Background>
    </>
  );
}

export default TestProgressPage;

const FlexCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
