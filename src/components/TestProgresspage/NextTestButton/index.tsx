import axios from "axios";
import styled from "styled-components";

interface EmotionProps {
  happy: number;
  surprise: number;
  angry: number;
  fear: number;
  sad: number;
}

interface Props {
  step: number;
  id: number | undefined;
  detailEmotion: EmotionProps;
  capturedImages: string[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCapturedImages: React.Dispatch<React.SetStateAction<string[]>>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setEmotionTF: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailEmotion: React.Dispatch<React.SetStateAction<EmotionProps>>;
}
function NextTestButton({
  step,
  id,
  detailEmotion,
  capturedImages,
  setStep,
  setCapturedImages,
  setImageLoaded,
  setEmotionTF,
  setDetailEmotion,
}: Props) {
  const initialization = () => {
    setStep(step + 1);
    setCapturedImages([]);
    setImageLoaded(false);
    setEmotionTF(true);
    setDetailEmotion({
      happy: 0,
      surprise: 0,
      angry: 0,
      fear: 0,
      sad: 0,
    });
  };

  const postDetailEmotion = () => {
    axios
      .post(
        `http://localhost:8080/api/test/feedback?id=${id}`,
        JSON.stringify(detailEmotion),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([int8Array], { type: "image/jpeg" });
  };

  const postCapturedImages = () => {
    console.log("id", id);
    console.log("capturedimages", capturedImages);

    const formData = new FormData();
    capturedImages?.forEach((image, index) => {
      const blob = dataURItoBlob(image.split(",")[1]);
      formData.append(`file${index + 1}`, blob);
    });

    axios
      .post(`http://localhost:8080/api/test/camera/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const postToServer = async () => {
    postDetailEmotion();
    postCapturedImages();
  };

  const handleClickNextStep = async () => {
    await postToServer();
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
