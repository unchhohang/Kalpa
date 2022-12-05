/* 
* Stock screen component
 */

import React from 'react';
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
import "../css/main.css";

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
  createData( "8","Sel Roti", " 500"), 
  createData("9","Satu", " 150"),
  createData("10", "Mango Pickle", " 250"),
  createData( "11","Lemon Pickle", " 350"),
  createData( "12","Sel Roti", " 500"),
  createData("13","Satu", " 150"),
  createData( "14","Mango Pickle", " 250"),
  createData( "15","Lemon Pickle", " 350"),
  createData( "16","Sel Roti", " 500")   
  

];

function Stock() {
  return (
    <div className="container" style={{'min-width': "80vw"}}>

      <div>
        <h1>Manage</h1>
        <h2>Stock</h2>
      </div>
    
    <div className="table-container" style = {{'align-self':'center'}}   >
      <TableContainer component={Paper}
      sx={{
        border: "2px solid rgba(0,0,0,0.2)",
        backgroundColor: '#D9D9D9', 
        padding: 1,
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
          borderRadius: 20
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
           <TableCell align="right">No</TableCell>
           <TableCell align="right">Stock Name</TableCell>
           <TableCell align="right">Quantity</TableCell>
           <TableCell align="right">Action</TableCell>
           
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
            <TableRow key={row.right}>
             <TableCell align="right">{row.no}</TableCell>
             <TableCell align="right">{row.name}</TableCell>
             <TableCell align="right">{row.quantity}</TableCell>
             <TableCell align="right"><EditIcon/></TableCell>
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

