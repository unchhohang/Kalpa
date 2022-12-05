/**
 * Screen for Stock
 */

 import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Delete from "@mui/icons-material/Delete";


export default function Billing() {
  return (
    <div className="container">
      <h1>Manage</h1>
      <h2>Stock</h2>

    

      <div>
        <TableContainer className="billing-action-table">
          <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead sx={{backgroundColor: '#D9D9D9'}}>
              <TableRow>
                <TableCell>
                  <h3>Stock Name</h3>
                </TableCell>
                <TableCell>
                  <h3>Quantity</h3>
                </TableCell>
                <TableCell>
                  <h3>Action</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon/><Delete/>
                </TableCell>
              </TableRow>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
              <TableRow
                // key={}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>    
      </div>
      <div></div>
    </div>
  );
}
