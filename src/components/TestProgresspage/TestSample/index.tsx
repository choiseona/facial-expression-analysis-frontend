import styled from "styled-components";

interface props {
  step: number;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  sample: {
    base64Image: string[] | undefined;
    comment: string[] | undefined;
  };
}

function TestSample({ setImageLoaded, sample, step }: props) {
  const handleToImageLoaded = () => {
    setImageLoaded(true);
  };
  if (!sample.comment) return null;
  if (!sample.base64Image) return null;
  return (
    <FlexColumn>
      <Comment>{sample.comment[step - 1]}</Comment>
      <Image
        onLoad={handleToImageLoaded}
        src={`${sample.base64Image[step - 1]}`}
        alt="sampleImage"
      />
    </FlexColumn>
  );
}

export default TestSample;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px; //800->500
`;
const Comment = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img``;
