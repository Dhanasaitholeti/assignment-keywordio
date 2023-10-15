const BottomButtonGroup = () => {
  const buttonStyles = "border border-black px-10 py-2";

  return (
    <div className="flex justify-end px-20">
      <div className="flex gap-10">
        <button className={buttonStyles}>Back</button>
        <button className={buttonStyles}>{"Next"}</button>
      </div>
    </div>
  );
};

export default BottomButtonGroup;
