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

function createData( no,name, quantity) {
  return { no, name, quantity};
}

const rows = [ 
  createData("1","Satu", " 150"),
  createData("2", "Mango Pickle", " 250"),
  createData( "3","Lemon Pickle", " 350"),
  createData( "4","Sel Roti", " 500"),
  createData("5","Satu", " 150"),
  createData( "6","Mango Pickle", " 250"),
  createData( "7","Lemon Pickle", " 350"),
  createData( "8","Sel Roti", " 500")   

];

function Stock() {
  return (
    <div>
      <div>
        <h1>Manage</h1>
        <h3>Stock</h3>
      </div>
    
    <div>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell align="left">No</TableCell>
           <TableCell align="left">Stock Name</TableCell>
           <TableCell align="left">Quantity</TableCell>
           <TableCell align="left">Action</TableCell>
           
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
            <TableRow key={row.name}>
             <TableCell align="left">{row.no}</TableCell>
             <TableCell align="left">{row.name}</TableCell>
             <TableCell align="left">{row.quantity}</TableCell>
             <TableCell align="left"><EditIcon/></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>

      </TableContainer>
    </div>

    </div>

  )
}

export default Stock

