import { useLocation, useNavigate } from "react-router-dom";

const BottomButtonGroup: React.FC<{ typeofad?: string }> = ({ typeofad }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigator = useNavigate();

  const buttonStyles = "font-semibold px-10 py-2 rounded-lg";

  return (
    <div className="flex justify-center items-center lg:justify-end px-20">
      <div className="flex gap-10">
        {!(pathname === "/create-ad") && (
          <button className={buttonStyles} onClick={() => navigator(-1)}>
            Back
          </button>
        )}

        <button
          className={`${buttonStyles} bg-blue-500 text-white ${
            pathname === "/create-ad" && !typeofad && "cursor-not-allowed"
          }`}
          disabled={pathname === "/create-ad" && !typeofad}
          onClick={
            pathname == "/create-ad"
              ? () => navigator(`/${typeofad}`)
              : () => navigator("/success")
          }
        >
          {pathname == "/textad" || pathname == "/mediaad" ? "submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default BottomButtonGroup;
