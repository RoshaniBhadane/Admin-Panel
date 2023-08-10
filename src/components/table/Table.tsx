import React, { useState } from "react"
import { Table, Dialog } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddEmployee } from "../employee/AddEmployee";
import { EditEmployee } from "../employee/EditEmployee";
import { DeleteEmployee } from "../employee/DeleteEmployee";

const List = ({ rows , fetchEmployeeData}: any) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchEmployeeData()
  };

  const openDeleteMode = (id:any) => {
    setOpenDelete(true);
    setSelectedEmployee(id)
  };

  const deleteClose = () => {
    setOpenDelete(false);
    fetchEmployeeData()
  };

  const editClose = ():void => {
    setOpenEdit(false);
    fetchEmployeeData()
  };

  const openEditMode = (id:any) => {
    setOpenEdit(true)
    setSelectedEmployee(id)
  }
 
  return (
    <Box>
      <Box>
        <Button variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon />}>
          Add Employee
        </Button>
      </Box>
      <Box>
        <Dialog open={open} onClose={handleClose}>
          <AddEmployee handleClose={handleClose}/>
        </Dialog>
      </Box>
      <Box>
        <Dialog open={openEdit} onClose={editClose}>
          <EditEmployee selectedItem={selectedEmployee} handleClose={editClose}/>
        </Dialog>
      </Box>
      <Box>
        <Dialog open={openDelete} onClose={deleteClose}>
          <DeleteEmployee selectedItem={selectedEmployee} handleClose={deleteClose}/>
        </Dialog>
      </Box>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Designation</TableCell>
              <TableCell className="tableCell">Age</TableCell>
              <TableCell className="tableCell">Salary</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.first_name}>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.designation}</TableCell>
                <TableCell className="tableCell">{row.age}</TableCell>
                <TableCell className="tableCell">{row.salary}</TableCell>
                <TableCell className="tableCell">
                  <Button variant="outlined" onClick={() => openEditMode(row.id)} startIcon={<EditIcon />}>
                    Edit
                  </Button> &nbsp;
                  <Button variant="outlined" onClick={() => openDeleteMode(row.id)} startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;
