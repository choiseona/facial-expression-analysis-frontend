import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import postDetailEmotions from "@/apis/postDetailEmotions";
import postCapturedImages from "@/apis/postCapturedImages";
import { useAtomValue } from "jotai";
import {
  capturedImagesAtom,
  detailEmotionAtom,
  samplesAtom,
  stepAtom,
} from "@/global/store";

function TestResultButton() {
  const detailEmotion = useAtomValue(detailEmotionAtom);
  const step = useAtomValue(stepAtom);
  const id = useAtomValue(samplesAtom)[step - 1].id;
  const capturedImages = useAtomValue(capturedImagesAtom);

  const navigate = useNavigate();

  const handleClickResult = async () => {
    try {
      await Promise.all([
        postCapturedImages({ id, capturedImages }),
        postDetailEmotions({ id, detailEmotion }),
      ]);

      navigate("/test/result");
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  /*
  const handleClickResult = async () => {
    navigate("/test/result");
  };
  */

  return <Button onClick={handleClickResult}>결과 보기</Button>;
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

export default TestResultButton;
