import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Delete from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material/Select";
import DeletePopup from "./DeletePopup";

export default function BillingOrder(props) {
  let orders = props.orders;

  const [open, setOpen] = useState(false);
  const deleteOpen = () => setOpen(true);
  const deleteClose = () => setOpen(false);

  if (orders === undefined) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <TableContainer className="billing-action-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
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
            {orders.map((x, index) => {
              return (
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>{x.productName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.price}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.orderQuantity}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.price * x.orderQuantity}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <EditIcon />
                    <Button
                      onClick={deleteOpen}
                      variant="outlined"
                      color="inherit"
                      startIcon={<DeleteIcon />}
                    ></Button>
                    <DeletePopup open={open} handleClose={deleteClose} />
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={2} />
              <TableCell colSpan={2} align="left">
                Subtotal
              </TableCell>
              <TableCell align="left">Nrs. {props.subTotal}</TableCell>
            </TableRow>
            <Divider />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
