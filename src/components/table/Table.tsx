import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({rows}:any) => {

  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Designation</TableCell>
            <TableCell className="tableCell">Age</TableCell>
            <TableCell className="tableCell">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <TableRow key={row.first_name}>
              <TableCell className="tableCell">{row.first_name}</TableCell>
              <TableCell className="tableCell">{row.last_name}</TableCell>
              <TableCell className="tableCell">{row.designation}</TableCell>
              <TableCell className="tableCell">{row.age}</TableCell>
              <TableCell className="tableCell">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
