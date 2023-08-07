import { Box } from "@mui/material";
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const LineChartComp = ({ data, title, aspect }: any) => {
    const chart = {
        flex: 4,
        webkitBoxShadow: '2px 4px 10px 1px rgba(0, 0, 0, 0.47)',
        boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
        padding: '10px',
        color: 'gray'
    }
    const titleGrid = {
        marginBottom: '20px'
    }
    return (
        <Box sx={chart}>
            <Box sx={titleGrid}>{title}</Box>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
}
