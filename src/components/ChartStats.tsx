import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { AdsMetrics } from "../configs/adsData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const ChartStats = () => {
  return (
    <>
      <PieChart width={600} height={250}>
        <Pie
          data={AdsMetrics}
          cx={300}
          cy={125}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="Clicks"
          nameKey="Group"
        >
          {AdsMetrics.map((entry, index) => (
            <Cell
              key={`cell-${entry.Group}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  );
};

export default ChartStats;
