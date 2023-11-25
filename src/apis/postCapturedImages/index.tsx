import dataURItoBlob from "@/utils/uriToBlob";
import customAxios from "..";

interface Variables {
  capturedImages: string[] | undefined;
  id: number | undefined;
}

async function postCapturedImages({ capturedImages, id }: Variables) {
  const formData = new FormData();
  capturedImages?.forEach((image, index) => {
    const blob = dataURItoBlob(image.split(",")[1]);
    formData.append(`file${index + 1}`, blob);
  });

  try {
    const response = await customAxios.post(`api/test/camera/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default postCapturedImages;
