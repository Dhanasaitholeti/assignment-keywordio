const BottomButtonGroup = () => {
  return (
    <div className="flex justify-end px-20">
      <div className="flex gap-10">
        <button className="border border-black px-5 py-2">Back</button>
        <button className="border border-black px-5 py-2">{"Next"}</button>
      </div>
    </div>
  );
};

export default BottomButtonGroup;
