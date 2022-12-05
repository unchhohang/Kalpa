/**
 * Screen for billing
 */

import { Edit } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Delete from "@mui/icons-material/Delete";


export default function Billing() {
  return (
    <div className="container">
      <h1>Electronic Billing System</h1>

    

      <div className="customer-inputs">
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            label="Customer Name"
            variant="outlined"
          />
        </div>
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            label="Customer Address"
            variant="outlined"
          />
        </div>
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            label="Contact No"
            variant="outlined"
          />
        </div>
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            label="Staff Name"
            variant="outlined"
          />
        </div>
      </div>
      <div>
        <TableContainer className="billing-action-table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{backgroundColor: '#D9D9D9'}}>
              <TableRow>
                <TableCell>
                  <h3>Product Name</h3>
                </TableCell>
                <TableCell>
                  <h3>Price</h3>
                </TableCell>
                <TableCell>
                  <h3>Quantity</h3>
                </TableCell>
                <TableCell>
                  <h3>Amount</h3>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
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
                <TableCell>
                  <Typography>2</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <span className="billing-sub-totall">Sub Total: 500 </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
