/**
 * Screen for billing
 */

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
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import ProductCss from "../css/products.module.css"

export default function Billing() {
  return (
    <div className="container">
      <h1>Manage</h1>
      <h2>Products</h2>

      <div className="customer-inputs">
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            label="Product Name"
            variant="outlined"
          />
        </div>
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            label="Price"
            variant="outlined"
          />
        </div>

        <Fab className="add-btn" size="large" color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <div>
        <TableContainer className={ProductCss.producttable}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
              <TableRow>
                <TableCell>
                  <h3>Product Id</h3>
                </TableCell>
                <TableCell>
                  <h3>Product Name</h3>
                </TableCell>
                <TableCell>
                  <h3>Price</h3>
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
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
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                  <Typography>Sathu</Typography>
                </TableCell>
                <TableCell>
                  <Typography>200</Typography>
                </TableCell>
                <TableCell>
                  <Typography>400</Typography>
                </TableCell>
                <TableCell align="left">
                  <EditIcon />
                  <Delete />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div></div>
    </div>
  );
}
