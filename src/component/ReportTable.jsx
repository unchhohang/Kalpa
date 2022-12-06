/**
 * Component for bill as table in Report
 */

import {
  Box,
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
import React from "react";
import { useState } from "react";

export default function ReportTable(props) {
  console.log(props.data);
  let data = props.data;

  const [bill, setBill] = useState(data[0]);

  let billLength = data.length;

  return (
    <div className="table-container">
      <div className="table-top">
        <span>
          <h3>Bill NO: {bill.billNo}</h3>
        </span>
        <span>
          <h3>Date: {bill.date}</h3>
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
              {bill.orders.map((x, index) => {
                return (
                  <TableRow
                    // key={}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{x.productName}</TableCell>
                    <TableCell>{x.price}</TableCell>
                    <TableCell>{x.quantity}</TableCell>
                    <TableCell>{x.amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <span className="sub-total">Sub Total: {bill.subAmount} </span>
        </div>
      </div>
      <Divider/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid xs={3}>
            <List>
              <ListItem>
                <Typography>Customer Name: {bill.customerName}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Customer Address: {bill.customerAddress}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Contact No: {bill.contactNo} </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={3}>
            <List>
              <ListItem>
                <Typography>Printed By: {bill.printedBy}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Payment Mode: {bill.paymentMode}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Discount: {bill.discount}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={3}>
            <List>
              <ListItem>
                <Typography>Taxable amount: {bill.taxableAmount}</Typography>
              </ListItem>
              <ListItem>
                <Typography>VAT amount: {bill.vatAmount}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Total amount: {bill.totalAmount}</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <div>
        <Pagination
          count={billLength}
          onChange={(e, p) => {
            console.log(`in page ${p}`);
            setBill(data[p - 1]);
          }}
        />
      </div>
    </div>
  );
}
