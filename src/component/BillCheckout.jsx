import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material/Select";
// import BillingCss from "../css/billing.module.css";
// import DeletePopup from "./DeletePopup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 700,
  backgroundColor: "#E3E4C4",
  border: "2px solid #000",
  boxShadow: 0,
  p: 3,
};

const BillCheckout = (props) => {
  console.log(props.open);
  return (
    <Modal keepMounted open={props.open} onClose={props.handleClose}>
      <Card sx={style}>
        <CardContent>
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
                  <TableRow />
                </TableRow>
                <TableRow>
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
                  <TableRow />
                </TableRow>
                <TableCell>
                  <Typography>Sub amount: Nrs. 500</Typography>
                </TableCell>
                <TableRow>
                  <TableCell>
                    <Typography>Discount. 500</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Taxable amount: Nrs. 500</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Vat amount. 500</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Total amount: Nrs. 500</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Staff: Simo</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button onClick={props.handleClose}>close</Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default BillCheckout;
