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
import { initialEmotion } from "@/global/data";
import NextButton from "@/components/Common/NextButton";

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

  return (
    <NextButton
      onClick={handleClickNextStep}
      content="다음 테스트"
      isMarginBottom={true}
    />
  );
}

export default NextTestButton;
