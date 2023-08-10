import React, { useEffect,useState} from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navigation/Navbar";
import { GridLayoutComponent } from "../gridLayout/GridLayoutComponent";
import List from "../../components/table/Table";
import axios from "axios"

export const AdminHome = () => {
  const [empData, setEmpData] = useState([])

  useEffect(() => {
    fetchEmployeeData();
}, []);

const fetchEmployeeData = async () => {
    let employees = await axios('http://localhost:4201/employees');
    setEmpData(employees.data)
    
}

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
  
  return (
    <Box sx={home}>
      <Sidebar />
      <Box sx={middleSection}>
        <Navbar />
        <Box sx={charts}>
         <GridLayoutComponent data={empData}/>
        </Box>
        <Box sx={tableSection}>
          <Box sx={title}>Employee Info</Box>
          <List rows={empData} fetchEmployeeData={fetchEmployeeData}/>
      </Box>
      </Box>  
    </Box>
  );
}
