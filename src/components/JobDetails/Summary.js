import "./style.css";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  withStyles,
} from "@material-ui/core";
import MuiTableCell from "@material-ui/core/TableCell";

const Summary = ({ job }) => {
  const TableCell = withStyles({
    root: {
      borderBottom: "none",
    },
  })(MuiTableCell);

  return (
    <TableContainer className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="left">Sallery range</TableCell>
            <TableCell align="left">{job.salary}</TableCell>
            <TableCell className="border" align="left">
              Contract type
            </TableCell>
            <TableCell align="left">{job.contractType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">{job.locationName}</TableCell>
            <TableCell className="border" align="left">
              Num. of applicants
            </TableCell>
            <TableCell align="left">{job.applicationCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Summary;
