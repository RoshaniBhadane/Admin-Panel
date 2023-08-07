import { Box } from "@mui/material";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navigation/Navbar";

export const AdminHome = () => {
  const home = {
    display: 'flex'
  }
  const middleSection = {
    background: 'lightblue',
    flex: 6
  }

  return (
    <Box sx={home}>
      <Sidebar />
      <Box sx={middleSection}>
        <Navbar />
        home container
      </Box>
    </Box>
  );
};
