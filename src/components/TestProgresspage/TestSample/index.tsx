import {
  capturedImagesAtom,
  imageLoadedAtom,
  samplesAtom,
  stepAtom,
} from "@/global/store";
import { useAtomValue, useSetAtom } from "jotai";
import styled from "styled-components";

function TestSample() {
  const step = useAtomValue(stepAtom);
  const samples = useAtomValue(samplesAtom);
  const capturedImages = useAtomValue(capturedImagesAtom);
  const setImageLoaded = useSetAtom(imageLoadedAtom);

  const sample = samples[step - 1];

  const handleToImageLoaded = () => {
    setImageLoaded(true);
  };
  if (!sample.comment) return null;
  if (!sample.sampleImg) return null;
  return (
    <FlexColumn $isCapturing={capturedImages.length !== 5}>
      <Comment>{sample.comment}</Comment>
      <Image
        onLoad={handleToImageLoaded}
        src={`${sample.sampleImg}`}
        alt="sampleImage"
      />
    </FlexColumn>
  );
}

export default TestSample;

const FlexColumn = styled.div<{ $isCapturing: boolean }>`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => (props.$isCapturing ? "550px" : "500px")};
  transition: ${(props) => (props.$isCapturing ? "" : "width 0.7s ease")};
`;

const Comment = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img``;
