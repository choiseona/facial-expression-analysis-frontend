import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import postDetailEmotions from "@/apis/postDetailEmotions";
import postCapturedImages from "@/apis/postCapturedImages";

interface Props {
  detailEmotion: {
    happy: number;
    surprise: number;
    angry: number;
    fear: number;
    sad: number;
  };
  id: number | undefined;
  capturedImages: string[];
}

function TestResultButton({ detailEmotion, id, capturedImages }: Props) {
  const navigate = useNavigate();

  /*
  const handleClickResult = async () => {
    await postDetailEmotions({ id, detailEmotion });
    await postCapturedImages({ id, capturedImages });
    navigate("/test/result");
  };
*/

  const handleClickResult = async () => {
    navigate("/test/result");
  };

  return <Button onClick={handleClickResult}>결과 보기</Button>;
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

export default TestResultButton;
