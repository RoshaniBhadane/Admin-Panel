import { Box } from "@mui/material";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navigation/Navbar";
import { GridLayoutComponent } from "../gridLayout/GridLayoutComponent";
import List from "../../components/table/Table";


export const AdminHome = () => {
  const home = {
    display: 'flex'
  }
  const middleSection = {
    flex: 6
  }
  const tableSection = {
    webkitBoxShadow: '2px 4px 10px 1px rgba(0, 0, 0, 0.47)',
    boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)',
    padding: '20px',
    margin: '20px'
  }
  const title = {
    fontWeight: '500',
    color: 'gray',
    marginBottom: '15px'
  }

  const charts = {
    display: 'flex',
    padding: '20px',
    gap: '20px'
  }

  let data = [

    { first_name: "Eleanor", last_name: "Bolton", designation: "CEO, Co-Founder", salary: "50000", age: 45 },

    { first_name: "Caspian", last_name: "Shields", designation: "CTO, Co-Founder", salary: "50000", age: 34 },

    { first_name: "Marek", last_name: "Goodman", designation: "CFO", salary: "10000", age: 31 },

    { first_name: "Lisa", last_name: "Whitehouse", designation: "CMO", salary: "15000", age: 39 },

    { first_name: "Buster", last_name: "Mackenzi", designation: "COO", salary: "10000", age: 43 }

  ];

  return (
    <Box sx={home}>
      <Sidebar />
      <Box sx={middleSection}>
        <Navbar />
        <Box sx={charts}>
         <GridLayoutComponent data={data}/>
        </Box>
        <Box sx={tableSection}>
          <Box sx={title}>Employee Info</Box>
          <List rows={data}/>
      </Box>
      </Box>  
    </Box>
  );
}
