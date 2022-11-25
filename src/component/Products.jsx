import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import { makeStyles } from "@material-ui/styles";


function createData(id, name, price) {
  return { id, name, price};
}

const rows = [ 
  createData(1, "Satu", "Rs 150"),
  createData(2, "Mango Pickle", "Rs 250"),
  createData(3, "Lemon Pickle", "Rs 350"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500"),
  createData(4, "Sel Roti", "Rs 500")
];

const tableStyling = {
  padding: "15px 40px"
};

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });

function Products() {
  // const classes = useStyles();

  return (
    <div>
      <div>
        <h1>Manage</h1>
        <h5>Products</h5>
      </div>
    <form>
    <TextField id="outlined-basic" label="Product Name" variant="outlined"/>
    <TextField id="outlined-basic" label="Price" variant="outlined"/>
    <Button  style={{
      borderRadius: 35,
      backgroundColor: "#1E853C",
      padding: "10px 30px",
      fontSize: "16px"
    }}
     variant='contained'>ADD</Button>
    </form>
    <div>
      <TableContainer component={Paper} sx={{
          border: "2px solid rgba(0,0,0,0.2)",
          padding: 1,
          width: 700,
          height: 550,
          margin: 10,
          "&::-webkit-scrollbar": {
            width: 15
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#D9D9D9"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#9D9898",
            borderRadius: 2
          },
          overflowX: "hidden"
        }}>
      <Table  sx={{
            tableLayout: "auto",
            width: "max-content"
          }}>
       <TableHead>
         <TableRow>
           <TableCell  align="right" >Product ID</TableCell>
           <TableCell sx={{ ...tableStyling, width: 100 }} align="right">Product Name</TableCell>
           <TableCell sx={{ ...tableStyling, width: 100 }} align="right">Price&nbsp;(Rs)</TableCell>
           <TableCell sx={{ ...tableStyling, width: 100 }} align="right">Action</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.id}>
             <TableCell component="th" scope="row">
               {row.id}
             </TableCell>
             <TableCell sx={{ ...tableStyling }} align="right">{row.name}</TableCell>
             <TableCell sx={{ ...tableStyling }} align="right">{row.price}</TableCell>
             <TableCell sx={{ ...tableStyling }} align="right"><EditIcon/></TableCell>
             <TableCell sx={{ ...tableStyling }} align='right'><DeleteIcon/></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
      </TableContainer>
    </div>

    </div>

  )
}

export default Products