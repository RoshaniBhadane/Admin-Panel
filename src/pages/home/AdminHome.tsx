import { Box } from "@mui/material";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navigation/Navbar";
import { AreaChartComponent } from "../../components/charts/AreaChart";
import { LineChartComp } from "../../components/charts/LineChart";
// import GridLayout from "react-grid-layout";


export const AdminHome = () => {
  const home = {
    display: 'flex'
  }
  const middleSection = {
    flex: 6
  }
  const charts = {
    display: 'flex',
    padding: '20px',
    gap: '20px'
  }

  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 7 },
    { i: "b", x: 6, y: 0, w: 5.5, h: 7, },
    { i: "c", x: 0, y: 0, w: 6, h: 4 },
    { i: "d", x: 6, y: 0, w: 5.5, h: 6, }
  ];

  return (
    <Box sx={home}>
      <Sidebar />
      <Box sx={middleSection}>
        <Navbar />
        <Box sx={charts}>
          {/* <GridLayout 
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
          > */}
            <LineChartComp data={data} title="Last 6 Months " aspect={2 / 1} />
            <AreaChartComponent data={data} title="Last 6 Months " aspect={2 / 1} />
          {/* </GridLayout> */}
        </Box>
      </Box>
    </Box>
  );
};
