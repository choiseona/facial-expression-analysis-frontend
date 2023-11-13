import { EmotionType } from "@/global/type";
import customAxios from "..";

interface Variables {
  id: number | undefined;
  detailEmotion: EmotionType;
}

function postDetailEmotions({ id, detailEmotion }: Variables) {
  customAxios
    .post(`api/test/feedback?id=${id}`, JSON.stringify(detailEmotion), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export default postDetailEmotions;
