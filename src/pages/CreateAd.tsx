import { useState } from "react";
import BottomButtonGroup from "../components/BottomButtonGroup";

const CreateAd = () => {
  const [adType, setAdType] = useState<string | undefined>(undefined);

  const handleCardClick = (val: string) => {
    setAdType(val);
  };

  const boxStyle =
    "group aspect-potrait max-w-lg w-full bg-white rounded-lg drop-shadow-2xl p-5 hover:cursor-pointer";

  return (
    <>
      <main className="border-2 border-gray-200 max-h-[85vh] h-screen flex flex-col items-center justify-center gap-20">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-20">
          <div className={boxStyle} onClick={() => handleCardClick("textad")}>
            <input
              type="checkbox"
              checked={adType == "textad"}
              className="w-6 h-6"
            />
            <h1>Text Ad</h1>
          </div>
          <div className={boxStyle} onClick={() => handleCardClick("mediaad")}>
            <input
              type="checkbox"
              checked={adType == "mediaad"}
              className="w-6 h-6"
            />
            <h1>Media Ad</h1>
          </div>
        </div>
        <div className="w-full px-20">
          <BottomButtonGroup typeofad={adType} />
        </div>
      </main>
    </>
  );
};

export default CreateAd;
