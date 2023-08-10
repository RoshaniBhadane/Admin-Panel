import { Box } from "@mui/material";
import { AreaChartComponent } from "../../components/charts/AreaChart";
import { LineChartComp } from "../../components/charts/LineChart";
import GridLayout from "react-grid-layout";


export const GridLayoutComponent = ({data}:any) => {

    const chart = {
        flex: 4,
        webkitBoxShadow: '2px 4px 10px 1px rgba(0, 0, 0, 0.47)',
        boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
        padding: '10px',
        color: 'gray'
    }
    const title = {
        fontWeight: '500',
        color: 'gray',
        marginBottom: '15px'
      }
    const layout = [
        { i: "a", x: 0, y: 0, w: 6, h: 7 },
        { i: "b", x: 6.5, y: 0, w: 5.5, h: 7, }];

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
        >
            <Box key={"a"} sx={chart}>
            <Box sx={title}>Employee Area Charts</Box>
                <AreaChartComponent data={data} />
            </Box>
            <Box key={"b"} sx={chart}>
            <Box sx={title}>Employee Line Charts</Box>
                <LineChartComp data={data} />
            </Box>
        </GridLayout>
    );
};
