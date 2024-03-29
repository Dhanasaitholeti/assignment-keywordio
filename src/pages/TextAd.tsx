import BottomButtonGroup from "../components/BottomButtonGroup";
import BussinessLabel from "../components/formComponents/BussinessLabels";
import Headings from "../components/formComponents/Headings";

const TextAd = () => {
  return (
    <>
      <main className="p-10 flex flex-col gap-10 border-2 border-gray-300 shadow-sm">
        <Headings />
        <BussinessLabel />
        <BottomButtonGroup />
      </main>
    </>
  );
};

export default TextAd;
