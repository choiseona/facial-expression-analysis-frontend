import Button from "@/components/Common/NextButton";
import { useNavigate } from "react-router-dom";

function ProgramStartButton() {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/test/prepare");
  };
  return <Button onClick={handleClickButton} content="시작하기" />;
}

export default ProgramStartButton;
