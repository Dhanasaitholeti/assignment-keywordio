import { useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator("/create-ad");
    }, 600);
  }, []);

  return (
    <div className="bg-white backdrop-blur-3xl max-h-[80vh] h-screen w-full flex items-center justify-center">
      <div className="aspect-video h-[50%] shadow-2xl flex flex-col items-center justify-center font-bold text-3xl">
        <TiTickOutline size={44} />
        Success
      </div>
    </div>
  );
};

export default Success;
