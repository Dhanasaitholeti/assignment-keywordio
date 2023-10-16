import { useState } from "react";
import BottomButtonGroup from "../components/BottomButtonGroup";

const CreateAd = () => {
  const [adType, setAdType] = useState<string | undefined>(undefined);

  const handleCardClick = (val: string) => {
    setAdType(val);
  };

  const boxStyle =
    "group h-[50vh] max-w-md w-full bg-white rounded-lg drop-shadow-2xl p-5";

  return (
    <>
      <main className="border-2 border-gray-200 max-h-[85vh] h-screen flex flex-col items-center justify-center gap-20">
        <div className="container flex items-center justify-center gap-20">
          <div className={boxStyle} onClick={() => handleCardClick("textad")}>
            <input type="checkbox" className="w-6 h-6" />
            <h1>Text Ad</h1>
          </div>
          <div className={boxStyle} onClick={() => handleCardClick("mediaad")}>
            <input type="checkbox" className="w-6 h-6" />
            <h1>Media Ad</h1>
          </div>
        </div>
        <div className="w-full px-20">
          <BottomButtonGroup  />
        </div>
      </main>
    </>
  );
};

export default CreateAd;
