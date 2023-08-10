import React, { useEffect, useState } from "react";
import { Box, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import axios from "axios"
import { AnyMxRecord } from "dns";

export const AddEmployee = ({handleClose}:any) => {

    const [employeeData, setEmployeeData] = useState({
        name: '',
        age: '',
        designation: '',
        salary: ''
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeeData({ ...employeeData, [name]: value });

    }

    const submitInfo = async () => {
        await axios.post('http://localhost:4201/employees', employeeData);
        handleClose()
    }

    return (
        <Box>
            <DialogTitle>Add Employees Information</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onSubmit={submitInfo}
                    >
                    <TextField required type="text" label="Name" name="name" value={employeeData.name} onChange={handleInput} />
                    <TextField required type="text" label="Age" name="age" value={employeeData.age} onChange={handleInput} />
                    <TextField required type="text" label="Designation" name="designation" value={employeeData.designation} onChange={handleInput} />
                    <TextField required type="text" label="Salary" name="salary" value={employeeData.salary} onChange={handleInput} />
                    <DialogActions>
                        <Button >Submit</Button>
                        <Button onClick={()=>handleClose()}>cancel</Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Box>
    );
};
