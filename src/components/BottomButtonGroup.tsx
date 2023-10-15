import { useLocation } from "react-router-dom";

const BottomButtonGroup = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const buttonStyles = "font-semibold px-10 py-2 rounded-lg";

  return (
    <div className="flex justify-end px-20">
      <div className="flex gap-10">
        {!(pathname === "/create-ad") && (
          <button className={buttonStyles}>Back</button>
        )}
        <button className={`${buttonStyles} bg-blue-500 text-white`}>
          {"Next"}
        </button>
      </div>
    </div>
  );
};

export default BottomButtonGroup;
