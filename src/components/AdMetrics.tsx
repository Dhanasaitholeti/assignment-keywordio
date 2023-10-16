import ChartStats from "./ChartStats";
import TableStats from "./Tablestats";

const AdMetrics = () => {
  return (
    <div className="border border-gray-200 flex flex-col gap-5">
      <div className="p-5 pb-2 text-xl font-semibold border-2 border-b-gray-200 text-gray-800">
        Ads Insight
      </div>
      {<TableStats /
      >}
      {/* <ChartStats /> */}
      <div className="bg-red w-full p-10">
        <div className="flex items-center justify-end gap-10">
          <button>table</button>
          <button>chart</button>
        </div>
      </div>
    </div>
  );
};

export default AdMetrics;
