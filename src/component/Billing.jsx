/**
 * Screen for billing
 */

import { Edit } from "@mui/icons-material";
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
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material/Select";

let staff;
const selectStaff = (event: SelectChangeEvent) => {
  //
  console.log("hmmmm");
};
export default function Billing() {
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
            {/* <FormControl fullWidth>
              <InputLabel id="staff-select">Staff</InputLabel>
              <Select
                sx={{ borderColor: "#D9D9D9", backgroundColor: "#FFFFFF" }}
                labelId="staff-select"
                id="staff-select"
                value={staff}
                label="Staff"
                onChange={selectStaff}
              >
                <MenuItem value={"Ram"}>Ram</MenuItem>
                <MenuItem value={"Shyam"}>Shyam</MenuItem>
                <MenuItem value={"Hari"}>Hari</MenuItem>
              </Select>
            </FormControl> */}
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
                    <Typography>2</Typography>
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
                  <Button style={{'margin-left': '10px'}} variant="contained" color="success" size="large" fullWidth>Order</Button>
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
                  <Button style={{'margin-left': '10px'}} variant="contained" color="warning" size="large" fullWidth>Procced</Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
