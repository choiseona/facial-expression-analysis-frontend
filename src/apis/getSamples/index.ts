import customAxios from "..";
import { SampleType } from "@/global/type";

interface Props {
  setSample: React.Dispatch<React.SetStateAction<SampleType[]>>;
  setId: React.Dispatch<React.SetStateAction<number[] | undefined>>;
}
function getSamples({ setSample, setId }: Props) {
  customAxios
    .get("api/test/start")
    .then((res) => {
      const data = res.data.tests;
      setSample(
        data.map((item: SampleType) => ({
          id: item.id,
          sampleImg: `data:image/jpeg;base64,${item.sampleImg}`,
          comment: item.comment,
        }))
      );
      setId(data.map((item: SampleType) => item.id || 0));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export default getSamples;
