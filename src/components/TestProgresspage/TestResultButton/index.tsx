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
import NextButton from "@/components/Common/NextButton";

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
  const handleClickResult = () => {
    navigate("/test/result");
  };
  */

  return (
    <NextButton
      onClick={handleClickResult}
      content="결과 보기"
      isMarginBottom={true}
    />
  );
}

export default TestResultButton;
