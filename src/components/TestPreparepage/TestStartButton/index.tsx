import { useNavigate } from "react-router-dom";
import NextButton from "@/components/Common/NextButton";

function TestStartButton() {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/test/progress");
  };
  return <NextButton onClick={handleClickButton} content="시작하기" />;
}

export default TestStartButton;
