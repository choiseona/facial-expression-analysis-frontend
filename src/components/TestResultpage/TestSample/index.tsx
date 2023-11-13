import styled from "styled-components";

interface Props {
  image: string | undefined;
}

function TestSample({ image }: Props) {
  return (
    <FlexColumn>
      <Figure>
        <Image src={image} alt="강아지사진" />
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

const Image = styled.img`
  height: 225px;
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
