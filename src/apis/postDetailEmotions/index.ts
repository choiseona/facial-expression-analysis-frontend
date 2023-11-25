import { EmotionType } from "@/global/type";
import customAxios from "..";

interface Variables {
  id: number | undefined;
  detailEmotion: EmotionType;
}

async function postDetailEmotions({ id, detailEmotion }: Variables) {
  try {
    const response = await customAxios.post(
      `api/test/feedback?id=${id}`,
      JSON.stringify(detailEmotion),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default postDetailEmotions;
