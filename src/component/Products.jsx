
import billingCss from '../css/products.module.css'
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
import { Stack } from '@mui/material';

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
  createData(4, "Sel Roti", "Rs 500"),
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
  padding: "20px 40px"
};

function Products() {
  return (
    <div className="container" style={{'min-width': "80vw"}}>
    <div>
      <div>
        <h1>Manage</h1>
        <h2>Products</h2>
      </div>
      </div>
    <form>
    <TextField style={{
    marginRight: "30px",
    backgroundColor: "#FFFEFE"
    }}
     id="outlined-basic" label="Product Name" variant="outlined"/>
    <TextField style={{
      backgroundColor: "#FFFEFE"
    }}
    id="outlined-basic" label="Price" variant="outlined"/>
      
    <Button
    className="button"
    variant="contained"
    color="success"
    size="large">
    ADD
    </Button>
    </form>
    
    <div className="table-container" style = {{'align-self':'center'}}   >
      <TableContainer component={Paper}
      sx={{
        border: "4px solid rgba(0,0,0,0.2)",
        backgroundColor: '#D9D9D9', 
        padding: 0,
        width: 1250,
        height: 750,
        // margin: 10,
        "&::-webkit-scrollbar": {
          width: 10
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#D9D9D9"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#9D9898",
          borderRadius: 10
        },
        overflowX: "hidden"
      }}>
    <Table  sx={{
          tableLayout: "auto",
          width: "max-content"
        }}/>
      <Table aria-label="simple table">
       <TableHead>
       
         <TableRow>
         
           <TableCell align="left">Id</TableCell>
           <TableCell align="left">Product Name</TableCell>
           <TableCell align="left">Price</TableCell>
           <TableCell align="left">Action</TableCell>
           
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
            <TableRow key={row.right}>
             <TableCell align="left">{row.id}</TableCell>
             <TableCell align="left">{row.name}</TableCell>
             <TableCell align="left">{row.price}</TableCell>
             <TableCell align="left"><EditIcon/> <DeleteIcon/></TableCell>
             
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
