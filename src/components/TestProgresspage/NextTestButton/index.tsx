import NextStepIcon from "@/assets/icon/drop_down-down.svg";
import styled from "styled-components";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCapturedImages: React.Dispatch<React.SetStateAction<string[]>>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setEmotionTF: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailEmotion: React.Dispatch<
    React.SetStateAction<{
      happy: number;
      surprise: number;
      angry: number;
      fear: number;
      sad: number;
    }>
  >;
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

  return (
    <Image src={NextStepIcon} alt="다음단계" onClick={handleClickNextStep} />
  );
}

const Image = styled.img`
  transform: rotate(270deg);

  &:hover {
    cursor: pointer;
  }
`;

export default NextTestButton;
