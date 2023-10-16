import { AiOutlineTable, AiFillPieChart } from "react-icons/ai";

import ChartStats from "./ChartStats";
import { useState } from "react";
import TableStats from "./Tablestats";

const AdMetrics = () => {
  const [dType, setDType] = useState("table");

  const handleToggleClick = () => {
    let option = dType == "table" ? "chart" : "table";
    setDType(option);
  };

  return (
    <div className="border border-gray-200 flex flex-col gap-5">
      <div className="p-5 pb-2 text-xl font-semibold border-2 border-b-gray-200 text-gray-800">
        Ads Insight
      </div>
      {dType === "table" ? (
        <TableStats />
      ) : (
        <div className="flex items-center justify-center gap-10">
          <ChartStats />
        </div>
      )}
      <div className="bg-red w-full flex justify-end p-10">
        <div
          className="flex items-center justify-end gap-2 bg-slate-900 p-2 text-white rounded-full"
          onClick={handleToggleClick}
        >
          <div
            className={`${dType == "table" && "bg-blue-400"} p-2 rounded-full`}
          >
            <AiOutlineTable size={24} />
          </div>
          <div
            className={`${dType == "chart" && "bg-blue-400"} p-2 rounded-full`}
          >
            <AiFillPieChart size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdMetrics;
