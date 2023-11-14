import postCapturedImages from "@/apis/postCapturedImages";
import postDetailEmotions from "@/apis/postDetailEmotions";
import { EmotionType } from "@/global/type";
import styled from "styled-components";

interface Props {
  id: number | undefined;
  detailEmotion: EmotionType;
  capturedImages: string[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
function NextTestButton({ id, detailEmotion, capturedImages, setStep }: Props) {
  const initialization = () => {
    setStep((prev) => prev + 1);
  };

  /*
  const handleClickNextStep = async () => {
    await Promise.all([
      postDetailEmotions({ id, detailEmotion }),
      postCapturedImages({ id, capturedImages }),
    ]);
    initialization();
  };
*/

  const handleClickNextStep = async () => {
    initialization();
  };

  return <Button onClick={handleClickNextStep}>다음 테스트</Button>;
}

const Button = styled.button`
  z-index: 20;
  width: 150px;
  font-size: 1.1rem;
  font-weight: 550;
  padding: 10px 0;
  margin-bottom: 50px;
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
