import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import postDetailEmotions from "@/apis/postDetailEmotions";
import postCapturedImages from "@/apis/postCapturedImages";
import { EmotionType } from "@/global/type";

interface Props {
  detailEmotion: EmotionType;
  id: number | undefined;
  capturedImages: string[];
}

function TestResultButton({ detailEmotion, id, capturedImages }: Props) {
  const navigate = useNavigate();

  const handleClickResult = async () => {
    await Promise.all([
      postDetailEmotions({ id, detailEmotion }),
      postCapturedImages({ id, capturedImages }),
    ]);
    navigate("/test/result");
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default TestResultButton;
