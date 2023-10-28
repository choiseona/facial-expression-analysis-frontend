import Background from "@/components/Common/Background";
import Header from "@/components/Common/Header";
import Webcam from "@/components/TestProgresspage/Webcam";
import TestSample from "@/components/TestProgresspage/TestSample";
import styled from "styled-components";
import { useState } from "react";

function TestProgressPage() {
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Background>
        <Header />
        <FlexCenter>
          <TestSample setImageLoaded={setImageLoaded} />
        </FlexCenter>
      </Background>
      {imageLoaded && <Webcam setCapturedImages={setCapturedImages} />}
      {capturedImages.length === 5 && (
        <div>
          <h2>Captured Images</h2>
          {capturedImages.map((image, index) => (
            <div key={index}>
              <h3>Image {index + 1}</h3>
              <img src={image} alt={`Captured ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TestProgressPage;

const FlexCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
