import { AiOutlineTable, AiFillPieChart } from "react-icons/ai";
import ChartStats from "./ChartStats";
import { useState } from "react";
import TableStats from "./Tablestats";

const AdMetrics = () => {
  const [dType, setDType] = useState("table");
  const [selectedOption, setSelectedOption] = useState("Clicks");

  const handleToggleClick = () => {
    let option = dType == "table" ? "chart" : "table";
    setDType(option);
  };

  const handleSelectChange = (event: any) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };
  return (
    <div className="border border-gray-200 flex flex-col gap-5 w-[100%] lg:w-[50%]">
      <div
        className={`p-5 pb-2 text-xl font-semibold border-2 border-b-gray-200 text-gray-800`}
      >
        Ads Insight
      </div>

      {dType === "table" ? (
        <TableStats />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex justify-end px-20">
            <select onChange={handleSelectChange}>
              <option value="Clicks" selected>
                Clicks
              </option>
              <option value="Cost">Cost</option>
              <option value="Conversions">Conversions</option>
              <option value="Revenue">Revenue</option>
            </select>
          </div>
          <ChartStats metric={selectedOption} />
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
