import React, { useEffect, useState } from "react";
import { Box, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import axios from "axios"

export const DeleteEmployee = ({selectedItem,handleClose}:any) => {

    const deleteEmp = async () => {
        await axios.delete(`http://localhost:4201/employees/${selectedItem}`);  
        handleClose()  
    }

    return (
        <Box>
            <DialogTitle>Delete Employees Information</DialogTitle>
            <DialogContent>
                    <DialogActions>
                        <Button className="btn btn-primary" onClick={deleteEmp} >Delete</Button>
                        <Button className="btn btn-primary" onClick={()=>handleClose()
}>cancel</Button>
                    </DialogActions>
            </DialogContent>
        </Box>
    );
};
