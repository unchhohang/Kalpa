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
import BillCheckout from "./BillCheckout";
import { useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/UseLocalStorage";
import SelectProductInput from "./SelectProductInput";
import BillingOrder from "./BillingOrder";

let staff;
const selectStaff = (event) => {
  //
  console.log("hmmmm");
};

export default function Billing() {
  const name = "Billing";

  const [openb, setOpenb] = React.useState(false);
  const handleOpenb = () => setOpenb(true);
  const handleCloseb = () => setOpenb(false);
  const nameb = "Billing";

  // State hook to manage for datas needed billing
  const [productStock, setProductStock] = useState();
  const [orders, setOrders] = useState();
  const [bill, setBill] = useState();

  // State for billing page input fields

  // Local storage hooks
  const [customerName, setCustomerName] = useLocalStorage("customerName", "");
  const [customerAddress, setCustomerAddress] = useLocalStorage(
    "customerAddress",
    ""
  );
  const [customerNo, setCustomerNo] = useLocalStorage("customerNo", "");
  const [staffName, setStaffName] = useLocalStorage("staffName", "");

  // States for order input
  const [orderProduct, setOrderProduct] = useState();
  // const [orderPrice, setOrderPrice] = useState("");
  const [orderQty, setOrderQty] = useState(0);

  // Hooks state for calc
  const [subTotal, setSubTotal] = useState(0);

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
      .then((data) => {
        let orders = data.data;
        setOrders(orders);

        // get subTotal
        let totals = orders.map((x, index) => {
          return x.price * x.orderQuantity;
        });

        let sTotal = totals.reduce((accum, cValue) => accum + cValue);

        setSubTotal(sTotal);
      })
      .catch((err) => console.log(err));
  }

  // Function gets bills

  function getActiveBillOrders() {
    axios
      .get("/billing/activeBill")
      .then((data) => {
        let bill = data.data;

        console.log(`in get active bill orders`);

        console.log(bill);

        setBill(bill);
        getOrders(bill.billingId);
      })

      .catch((err) => console.log(err));
  }

  // Function get and set price based on selected product pirce

  function handleOrder(orderId) {
    // Find product price based on order id

    let matched = productStock.filter((x) => x.productStockId === orderId);

    setOrderProduct(matched[0]);
    setOrderQty(0);
  }

  // Handle price change

  function handleQtyChange(qty) {
    console.log(qty);
    if (qty >= 0 && qty <= orderProduct.quantity) {
      setOrderQty(qty);
    } else {
      console.log(`not enough in the stock`);
      console.log(`out of range`);
    }
  }

  // on order btn clicked

  function onOrderClick() {
    let billingId = bill.billingId;
    let productStockId = orderProduct.productStockId;
    let orderQuantity = orderQty;

    if (orderQuantity !== 0) {
      axios
        .post("order", {
          billingId: billingId,
          productStockId: productStockId,
          orderQuantity: orderQuantity,
        })
        .then((data) => {
          // refreshOrders(); // From here its going wrong
          getOrders(billingId);
        })
        .catch((err) => console.log(err));
    }
  }

  // Return load if states are not ready

  if (
    productStock === undefined &&
    orders === undefined &&
    bill === undefined
  ) {
    return <div>...Loading</div>;
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
              value={customerName}
              variant="outlined"
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
            />
          </div>
          <div className="billing-customer-input">
            <TextField
              sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
              label="Customer Address"
              variant="outlined"
              value={customerAddress}
              onChange={(e) => {
                setCustomerAddress(e.target.value);
              }}
            />
          </div>
          <div className="billing-customer-input">
            <TextField
              sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
              label="Contact No"
              variant="outlined"
              value={customerNo}
              onChange={(e) => {
                setCustomerNo(e.target.value);
              }}
            />
          </div>
          <div className="billing-customer-input">
            <TextField
              sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
              label="Staff Name"
              variant="outlined"
              value={staffName}
              onChange={(e) => {
                setStaffName(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <BillingOrder
            bill={bill}
            orders={orders}
            getOrders={getOrders}
            subTotal={subTotal}
          />
        </div>
        <Divider />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid xs={6}>
              <List>
                <ListItem key={1}>
                  {/* <TextField
                    fullWidth
                    id="outlined-product"
                    label="Enter Product"
                    variant="outlined"
                  /> */}

                  {/* Select product */}

                  <SelectProductInput
                    productStock={productStock}
                    handleOrder={handleOrder}
                  />
                </ListItem>
                <ListItem key={2}>
                  <TextField
                    fullWidth
                    id="outlined-qty"
                    label="Enter quantity"
                    type="number"
                    variant="outlined"
                    value={orderQty}
                    onChange={(e) => {
                      handleQtyChange(e.target.value);
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    disabled
                    fullWidth
                    id="outlined-price"
                    value={
                      orderProduct === undefined ? " " : orderProduct.price
                    }
                    type="number"
                    variant="outlined"
                  />
                  <Button
                    style={{ "margin-left": "10px" }}
                    variant="contained"
                    color="success"
                    size="large"
                    fullWidth
                    onClick={() => {
                      onOrderClick();
                    }}
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
