import BottomButtonGroup from "../components/BottomButtonGroup";
import BussinessLabel from "../components/BussinessLabels";
import Headings from "../components/Headings";
import MediaLabels from "../components/MediaLable";

const MediaAd = () => {
  return (
    <>
      <main className="p-10 flex flex-col gap-10 border-2 border-gray-300 shadow-sm">
        <Headings />
        <MediaLabels />
        <BussinessLabel />
        <BottomButtonGroup />
      </main>
    </>
  );
};

export default MediaAd;
