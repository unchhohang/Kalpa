/**
 * Screen for Stock
 */

 import {
   Breadcrumbs,
  Chip,
  Divider,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Delete from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from '@mui/icons-material/Inventory';


export default function Billing() {
  return (
    <div className="container">

      <Breadcrumbs>
        <Link 
          underline="hover" 
          color="inherit" 
          sx={{ display: 'flex', alignItems: 'center' }}
          href="/">
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          EBS
        </Link>
        <Link 
          underline="hover" 
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center' }}
          href="/stock">
        <InventoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Stock
        </Link>
        <Typography color="text.primary">Manage stock</Typography>
      </Breadcrumbs>
      <Divider >
        <Chip label="Stock table" color="success"/>
      </Divider>
      {/* <h1>Manage</h1>
      <h2>Stock</h2> */}

    

      <div>
        <TableContainer className="billing-action-table" component={Paper}>
          <Table sx aria-label="simple table">
            <TableHead sx={{backgroundColor: '#D9D9D9'}}>
              <TableRow>
                <TableCell>
                  <h3>Stock Name</h3>
                </TableCell>
                <TableCell>
                  <h3>Quantity</h3>
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
                <TableCell align="left">
                  <EditIcon/><Delete/>
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
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
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
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
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
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
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
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
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
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
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
                <TableCell align="left"><EditIcon/><Delete/></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>    
      </div>
      <div></div>
    </div>
  );
}
