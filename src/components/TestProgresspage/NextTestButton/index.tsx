import NextStepIcon from "@/assets/icon/drop_down-down.svg";
import styled from "styled-components";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  detailEmotion: {
    happy: number;
    surprise: number;
    angry: number;
    fear: number;
    disgust: number;
    sad: number;
  };
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}
function NextTestButton({
  step,
  setStep,
  detailEmotion,
  setImageLoaded,
}: Props) {
  const handleClickNextStep = () => {
    setStep(step + 1);
    setImageLoaded(false);
    console.log(detailEmotion);
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
