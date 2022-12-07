/**
 * Component for bill as table in Report
 */

import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ReportTable(props) {
  let bills = props.bills;
  const [bill, setBill] = useState(bills[0]);
  const [orders, setOrders] = useState([]);
  const [billDate, setBillDate] = useState();

  useEffect(() => {
    if (bill !== undefined) {
      getOrders(bill.billingId);

      // Split only date
      let dArray = bill.bill_date.split("T");
      setBillDate(dArray[0]);
    }
  }, [bill]);

  function getOrders(billingId) {
    axios
      .get("/order", { params: { id: billingId } })
      .then((data) => setOrders(data.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="table-container">
      <div className="table-top">
        <span>
          <h3>Inovice NO: {bill.invoiceNo}</h3>
        </span>
        <span>
          <h3>Date: {billDate}</h3>
        </span>
      </div>
      <div>
        <TableContainer className="custome-table">
          <Table sx aria-label="simple table">
            <TableHead>
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
              {orders.length !== 0 &&
                orders.map((x, index) => {
                  return (
                    <TableRow
                      // key={}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{x.productName}</TableCell>
                      <TableCell>{x.price}</TableCell>
                      <TableCell>{x.quantity}</TableCell>
                      <TableCell>{x.price * x.quantity}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <span className="sub-total">Sub Total: {bill.amount} </span>
        </div>
      </div>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid xs={3}>
            <List>
              <ListItem>
                <Typography>Customer Name: {bill.customer_name}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Customer Address: {bill.customer_address}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Contact No: {bill.customer_no} </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={3}>
            <List>
              <ListItem>
                <Typography>Printed By: {bill.printed_by}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Payment Mode: {bill.payment_method}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Discount: {bill.discount}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={3}>
            <List>
              <ListItem>
                <Typography>Taxable amount: {bill.taxable_amount}</Typography>
              </ListItem>
              <ListItem>
                <Typography>VAT amount: {bill.tax_amount}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Total amount: {bill.total_amount}</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <div>
        <Pagination
          count={bills.length}
          onChange={(e, p) => {
            console.log(`in page ${p}`);
            setBill(bills[p - 1]);
          }}
        />
      </div>

      <div className="report-delete">
        <Button
          variant="contained"
          component="label"
          color="error"
          size="large"
          sx={{ margin: "10px" }}
          onClick={() => {
            console.log(bill.invoiceNo);
            axios
              .delete("/billing", { params: { invoiceId: bill.invoiceNo } })
              .then((data) => {
                let dArray = moment().format().split("T");
                let cDate = dArray[0];
                props.getBills(cDate);
              })
              .catch((err) => console.log(err));
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
