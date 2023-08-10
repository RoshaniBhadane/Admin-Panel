import { Box } from "@mui/material";
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    YAxis,
} from "recharts";


export const AreaChartComponent = ({ data }: any) => {
    return (
        <ResponsiveContainer width="100%" height="84%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="first_name" />
          <YAxis/>
          <Tooltip />
          <Area type="monotone" dataKey="salary" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
};
