/**
 * Component for daily report
 */

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ReportTable from "./ReportTable";

export default function DailyReport(props) {
  return (
    <div>
      <div className="heads">
        <h1>Daily Report</h1>
        <span>
          <Button
            className="pdf-btn"
            variant="contained"
            color="success"
            size="small"
          >
            Generate PDF
          </Button>
        </span>
      </div>
      <div>
        <ReportTable data={props.data} />
      </div>
      <div className="report-stock-container">
        <h1>Stock Remaining</h1>
        <div>
          <TableContainer className="report-action-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
                <TableRow>
                  <TableCell>
                    <h3>Stock Name</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Quantity</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Mango Pickel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
