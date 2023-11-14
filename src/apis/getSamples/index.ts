import customAxios from "..";
import { SampleType } from "@/global/type";

interface Props {
  setSamples: React.Dispatch<React.SetStateAction<SampleType[]>>;
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
}
function getSamples({ setSamples, setIds }: Props) {
  customAxios
    .get("api/test/start")
    .then((res) => {
      const data = res.data.tests;
      setSamples(
        data.map((item: SampleType) => ({
          id: item.id,
          sampleImg: `data:image/jpeg;base64,${item.sampleImg}`,
          comment: item.comment,
        }))
      );
      setIds(data.map((item: SampleType) => item.id || 0));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export default getSamples;
