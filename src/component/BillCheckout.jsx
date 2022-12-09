import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
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
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DesignServices } from "@mui/icons-material";
// import BillingCss from "../css/billing.module.css";
// import DeletePopup from "./DeletePopup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: "auto",
  backgroundColor: "#E3E4C4",
  border: "2px solid #000",
  boxShadow: 0,
  p: 3,
};

const BillCheckout = (props) => {
  return (
    <Modal keepMounted open={props.open} onClose={props.handleClose}>
      <Card sx={style}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid sx={6} md={6} align="left">
              <Typography>Date: 2022-12-09 </Typography>
            </Grid>
            <Grid sx={6} md={6} align="right">
              <Button onClick={props.handleClose}>
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
          <TableContainer className="billing-action-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#D9D9D9" }}>
                <TableRow>
                  <TableCell>
                    <h3>Product Name</h3>
                  </TableCell>
                  <TableCell>
                    <h3 align="center">Price</h3>
                  </TableCell>
                  <TableCell>
                    <h3 align="center">Quantity</h3>
                  </TableCell>
                  <TableCell>
                    <h3 align="center">Amount</h3>
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
                    <Typography align="center">200</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">2</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">400</Typography>
                  </TableCell>
                  <TableRow />
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Sathu</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">200</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">2</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">400</Typography>
                  </TableCell>
                  <TableRow />
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Sathu</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">200</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">2</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">400</Typography>
                  </TableCell>
                  <TableRow />
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography>Sathu</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">200</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">2</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="center">400</Typography>
                  </TableCell>
                  <TableRow />
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>
                    <Divider />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TableRow>
                      <TableCell>
                        <Typography>
                          Sub amount: <strong>Nrs. 500</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography>
                          Discount: <strong>Nrs. 500</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography>
                          Given amount: <strong>Nrs. 500</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography>
                          Return amount: <strong>Nrs. 1000</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableCell>
                  <TableCell align="center">
                    <TableRow>
                      <TableCell align="center">
                        <Typography>
                          Total amount: <strong>Nrs. 1000</strong>
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        <FormControl>
                          <FormLabel id="payment">Mode of Payment</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="payment mode"
                            defaultValue="qr"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="cash"
                              control={<Radio />}
                              label="CASH"
                            />
                            <FormControlLabel
                              value="qr"
                              control={<Radio />}
                              label="QR"
                            />
                            <FormControlLabel
                              value="other"
                              control={<Radio />}
                              label="Other"
                            />
                          </RadioGroup>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <TableRow>
                          <Typography align="center">
                            <strong>SIMO</strong>
                          </Typography>
                        </TableRow>
                        <TableRow>
                          <Divider />
                        </TableRow>
                        <TableRow>
                          <Typography align="center">
                            for kalpa production
                          </Typography>
                        </TableRow>
                      </TableCell>
                    </TableRow>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button
            style={{ "margin-left": "10px" }}
            variant="contained"
            color="warning"
            size="large"
            fullWidth
          >
            Done
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default BillCheckout;
