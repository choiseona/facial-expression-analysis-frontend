import styled from "styled-components";

interface props {
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function TestSample({ setImageLoaded }: props) {
  const handleToImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <FlexColumn>
      <Comment>사진 샘플에 대한 멘트 한 줄</Comment>
      <Image
        onLoad={handleToImageLoaded}
        src="/src/assets/image/puppy1.jpg"
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
  width: 800px;
`;
const Comment = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img``;
