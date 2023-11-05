import styled from "styled-components";

interface props {
  step: number;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Images = [
  "/src/assets/image/puppy1.jpg",
  "/src/assets/image/puppy2.jpg",
  "/src/assets/image/puppy3.jpg",
];

function TestSample({ setImageLoaded, step }: props) {
  const handleToImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <FlexColumn>
      <Comment>사진 샘플에 대한 멘트 한 줄</Comment>
      <Image
        onLoad={handleToImageLoaded}
        src={`${Images[step - 1]}`}
        alt="강아지사진"
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
