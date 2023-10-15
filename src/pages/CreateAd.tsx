import BottomButtonGroup from "../components/BottomButtonGroup";

const CreateAd = () => {
  const boxStyle =
    "h-[50vh] max-w-md w-full bg-white rounded-lg drop-shadow-2xl";

  return (
    <>
      <main className="border-2 border-gray-200 max-h-[85vh] h-screen flex flex-col items-center justify-center gap-20">
        <div className="container flex items-center justify-center gap-20">
          <div className={boxStyle}>
            <input type="checkbox" />
          </div>
          <div className={boxStyle}>
            <input type="checkbox" />
          </div>
        </div>
        <div className="w-full px-20">
          <BottomButtonGroup />
        </div>
      </main>
    </>
  );
};

export default CreateAd;
