import dataURItoBlob from "@/utils/uriToBlob";
import customAxios from "..";

interface Variables {
  capturedImages: string[] | undefined;
  id: number | undefined;
}

function postCapturedImages({ capturedImages, id }: Variables) {
  const formData = new FormData();
  capturedImages?.forEach((image, index) => {
    const blob = dataURItoBlob(image.split(",")[1]);
    formData.append(`file${index + 1}`, blob);
  });

  customAxios
    .post(`api/test/camera/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export default postCapturedImages;
