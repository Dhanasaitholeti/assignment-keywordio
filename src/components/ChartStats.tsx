import { PieChart, Pie, Cell } from "recharts";
import { AdsMetrics } from "../configs/adsData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const ChartStats = () => {
  return (
    <>
      <PieChart width={400} height={250} className="w-min border-black border">
        <Pie
          data={AdsMetrics}
          cx={180}
          cy={125}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="Clicks"
        >
          {AdsMetrics.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default ChartStats;
