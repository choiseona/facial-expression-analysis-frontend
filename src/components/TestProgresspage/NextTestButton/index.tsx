import styled from "styled-components";

interface EmotionProps {
  happy: number;
  surprise: number;
  angry: number;
  fear: number;
  sad: number;
}

interface Props {
  step: number;
  id: number | undefined;
  detailEmotion: EmotionProps;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCapturedImages: React.Dispatch<React.SetStateAction<string[]>>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setEmotionTF: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailEmotion: React.Dispatch<React.SetStateAction<EmotionProps>>;
}
function NextTestButton({
  step,
  setStep,
  setCapturedImages,
  setImageLoaded,
  setEmotionTF,
  setDetailEmotion,
}: Props) {
  const handleClickNextStep = () => {
    //서버로 detailEmotion 전송하는 코드
    //서버로 사용자 사진 5장 전송하는 코드
    setStep(step + 1);
    setCapturedImages([]);
    setImageLoaded(false);
    setEmotionTF(true);
    setDetailEmotion({
      happy: 0,
      surprise: 0,
      angry: 0,
      fear: 0,
      sad: 0,
    });
  };

  return <Button onClick={handleClickNextStep}>다음 테스트</Button>;
}

const Button = styled.button`
  z-index: 20;
  width: 150px;
  font-size: 1.1rem;
  font-weight: 550;
  padding: 10px 0;
  border-radius: 10px;
  color: #cecccc;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default NextTestButton;
