import postCapturedImages from "@/apis/postCapturedImages";
import postDetailEmotions from "@/apis/postDetailEmotions";
import {
  capturedImagesAtom,
  detailEmotionAtom,
  emotionTFAtom,
  imageLoadedAtom,
  samplesAtom,
  stepAtom,
} from "@/global/store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import styled from "styled-components";
import { initialEmotion } from "@/global/data";

function NextTestButton() {
  const [step, setStep] = useAtom(stepAtom);
  const id = useAtomValue(samplesAtom)[step - 1].id;
  const [detailEmotion, setDetailEmotion] = useAtom(detailEmotionAtom);
  const [capturedImages, setCapturedImages] = useAtom(capturedImagesAtom);
  const setImageLoaded = useSetAtom(imageLoadedAtom);
  const setEmotionTF = useSetAtom(emotionTFAtom);

  const initialization = () => {
    setCapturedImages([]);
    setImageLoaded(false);
    setEmotionTF(true);
    setDetailEmotion(initialEmotion);
  };

  const handleClickNextStep = async () => {
    await Promise.all([
      postDetailEmotions({ id, detailEmotion }),
      postCapturedImages({ id, capturedImages }),
    ]);
    setStep((prev) => prev + 1);
    initialization();
  };

  /*
  const handleClickNextStep = () => {
    setStep((prev) => prev + 1);
    initialization();
  };
   */

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
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.5s ease;
  }
`;

export default NextTestButton;
