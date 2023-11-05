import styled from "styled-components";

function TestSample() {
  return (
    <FlexColumn>
      <Comment>사진 샘플에 대한 멘트 한 줄</Comment>
      <Figure>
        <Image src="/src/assets/image/puppy1.jpg" alt="강아지사진" />
        <FigCaption>감정 유발 샘플</FigCaption>
      </Figure>
    </FlexColumn>
  );
}

export default TestSample;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Comment = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FigCaption = styled.figcaption`
  margin-top: 5px;
  color: #cecccc;
  font-size: small;
`;
