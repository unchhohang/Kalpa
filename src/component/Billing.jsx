/**
 * Screen for billing
 */

import React, { useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
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
import DeleteIcon from "@mui/icons-material/Delete";
import Delete from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material/Select";
import DeletePopup from "./DeletePopup";
import BillCheckout from "./BillCheckout";
import { useState } from "react";
import axios from "axios";

let staff;
const selectStaff = (event) => {
  //
  console.log("hmmmm");
};

export default function Billing() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const name = "Billing";

  const [openb, setOpenb] = React.useState(false);
  const handleOpenb = () => setOpenb(true);
  const handleCloseb = () => setOpenb(false);
  const nameb = "Billing";

  // State hook to manage
  const [productStock, setProductStock] = useState();
  const [orders, setOrders] = useState();
  const [bill, setBill] = useState();

  // Use effect to get ProductStock and active Bill

  useEffect(() => {
    // create Active bill and get it too
    createActiveBill();

    getProductStock();
  }, []);

  // Create new bill and get Active bill with orders
  // Creates active bill or if already there just gets it

  function createActiveBill() {
    axios
      .post("/billing")
      .then((data) => {
        getActiveBillOrders();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Function gets productStocks

  function getProductStock() {
    axios
      .get("/productStock")
      .then((data) => setProductStock(data.data))
      .catch((err) => console.log(err));
  }

  // Funtion gets orders

  function getOrders(billingId) {
    axios
      .get("/order", { params: { id: billingId } })
      .then((data) => setOrders(data.data))
      .catch((err) => console.log(err));
  }

  // Function gets bills

  function getActiveBillOrders() {
    axios
      .get("/billing/activeBill")
      .then((data) => {
        console.log(`activeBill...`);
        console.log(data.data);
        let bill = data.data;

        setBill(bill);
        setOrders(bill.billingId);
      })

      .catch((err) => console.log(err));
  }

  if (
    productStock === undefined &&
    orders === undefined &&
    bill === undefined
  ) {
    <div>...Loading</div>;
  }

  return (
    <>
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
                    <EditIcon />
                    <Button
                      onClick={handleOpen}
                      variant="outlined"
                      color="inherit"
                      startIcon={<DeleteIcon />}
                    ></Button>
                    <DeletePopup
                      open={open}
                      name={name}
                      handleClose={handleClose}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell colSpan={2} align="left">
                    Subtotal
                  </TableCell>
                  <TableCell align="left">Nrs. 500</TableCell>
                </TableRow>
                <Divider />
                {/* <TableRow selected variant="footer">
                  <TableCell colSpan={2} align="right">
                    <TextField
                      id="outlined-product"
                      label="Enter Product"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Chip color="success" align="left" label="Nrs. 500" />
                  </TableCell>
                  <TableCell colSpan={2} align="left">
                    <TextField
                      id="outlined-qty"
                      label="Enter quantity"
                      type="number"
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Divider />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid xs={6}>
              <List>
                <ListItem key={1}>
                  <TextField
                    fullWidth
                    id="outlined-product"
                    label="Enter Product"
                    variant="outlined"
                  />
                </ListItem>
                <ListItem key={2}>
                  <TextField
                    fullWidth
                    id="outlined-qty"
                    label="Enter quantity"
                    type="number"
                    variant="outlined"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    disabled
                    fullWidth
                    id="outlined-price"
                    label="Nrs. 500"
                    type="number"
                    variant="outlined"
                  />
                  <Button
                    style={{ "margin-left": "10px" }}
                    variant="contained"
                    color="success"
                    size="large"
                    fullWidth
                  >
                    Order
                  </Button>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={6}>
              <List>
                <ListItem>
                  <TextField
                    fullWidth
                    id="outlined-discount"
                    label="Discount"
                    variant="outlined"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    fullWidth
                    id="outlined-vat"
                    label="Vat %"
                    variant="outlined"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    fullWidth
                    id="outlined-given-amt"
                    label="Given Amount"
                    variant="outlined"
                  />
                  <Button
                    style={{ "margin-left": "10px" }}
                    variant="contained"
                    color="warning"
                    size="large"
                    fullWidth
                    onClick={handleOpenb}
                  >
                    Procced
                  </Button>
                  <BillCheckout
                    open={openb}
                    name={nameb}
                    handleClose={handleCloseb}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
