/**
 * Screen for billing
 */

import {
  Button,
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
import ProductCss from "../css/products.module.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Done } from "@mui/icons-material";
export default function Product() {
  const [productStock, setProductStock] = useState([]);
  const [inputName, setInputName] = useState();
  const [inputPrice, setInputPrice] = useState();
  const [editableRow, setEditableRow] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const [updatedName, setUpdatedName] = useState();

  useEffect(() => {
    console.log(`use effect is ran....`);
    getProductStockList();
  }, []);

  // Function to add product
  function addProduct() {
    // Check if price is valid number
    if (Number(inputPrice) && inputName !== "") {
      axios
        .post("/productStock", {
          productName: inputName,
          price: inputPrice,
          quantity: 0,
        })
        .then((data) => {
          getProductStockList();
        })
        .catch((err) => console.log(err));
    }
  }

  // Retrives product stocks list

  function getProductStockList() {
    axios
      .get("/productStock")
      .then((data) => {
        setProductStock(data.data);
      })
      .catch((err) => console.log(err));
  }

  // Update product based on id and set default quantity
  function updateProduct(productStockId, quantity) {
    if (updatedPrice >= 0) {
      let name = updatedName.trim();
      let price = updatedPrice;

      axios
        .patch("/productStock", {
          productStockId: productStockId,
          productName: name,
          price: price,
          quantity: quantity,
        })
        .then((data) => {
          getProductStockList();
        })
        .catch((err) => console.log(err));
    }
  }

  // Delete product
  function deleteProduct(productId) {
    axios
      .delete("/productStock", { params: { id: productId } })
      .then((data) => {
        getProductStockList();
      })
      .catch((err) => console.log(err));
  }

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
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </div>
        <div className="billing-customer-input">
          <TextField
            sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
            type="number"
            label="Price"
            value={inputPrice}
            variant="outlined"
            onChange={(e) => {
              let value = e.target.value;
              if (value >= 0) {
                setInputPrice(value);
              } else {
                setInputPrice(0);
              }
            }}
          />
        </div>

        <Fab
          className="add-btn"
          size="large"
          color="success"
          aria-label="add"
          onClick={() => {
            addProduct();
          }}
        >
          <AddIcon />
        </Fab>
      </div>
      <div>
        <TableContainer className={ProductCss.producttable}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
              <TableRow>
                <TableCell>
                  <h3>Serail No</h3>
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
              {productStock.map((x, index) => {
                return (
                  <TableRow
                    // key={}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Typography>{index + 1}</Typography>
                    </TableCell>
                    <TableCell>
                      {x.productStockId === editableRow ? (
                        <TextField
                          value={updatedName}
                          onChange={(e) => {
                            setUpdatedName(e.target.value);
                          }}
                        />
                      ) : (
                        <Typography>{x.productName}</Typography>
                      )}
                    </TableCell>
                    <TableCell onChange={(e) => {}}>
                      {x.productStockId === editableRow ? (
                        <TextField
                          value={updatedPrice}
                          type="number"
                          onChange={(e) => {
                            setUpdatedPrice(e.target.value);
                          }}
                        />
                      ) : (
                        <Typography id="price-id">{x.price}</Typography>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        sx={{ color: "#000000" }}
                        onClick={() => {
                          if (editableRow !== null) {
                            setEditableRow(null);

                            // Update with api
                            updateProduct(x.productStockId, x.quantity);
                          } else {
                            setEditableRow(x.productStockId);
                            setUpdatedName(x.productName);
                            setUpdatedPrice(x.price);
                          }
                        }}
                      >
                        {editableRow === x.productStockId ? (
                          <DoneIcon />
                        ) : (
                          <EditIcon />
                        )}
                      </Button>
                      <Button
                        sx={{ color: "#000000" }}
                        onClick={() => {
                          deleteProduct(x.productStockId);
                        }}
                      >
                        <Delete />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div></div>
    </div>
  );
}
