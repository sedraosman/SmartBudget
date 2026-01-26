// MUI
import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Box, FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem  from '@mui/material/MenuItem';
// Date picker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
//component
import Total from './Total';
//custom 
import useCustom from '../useCustom/useCustom';
export default function Expense() {

const{text_,date_,add_,delete_,isCom,input,label_}= useCustom()

  return (
    <>
     <div style={{background:"#662222"}}> 
      <Container maxWidth="sm">
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background:"#842A3B",
            borderRadius:"20px"
          }}
        >
           <Total item={label_}/>
          <TextField
          required
          id="outlined-required"
          name="name" 
          label="Expense Name"
          style={{ margin: '20px' }}
          value={input.name}
          onChange={text_}
        />
          <Select
          name="categori"
          value={input.categori}
          onChange={text_}
           style={{ margin: '20px' }}>
          <MenuItem  value="all">All</MenuItem >
          <MenuItem  value="food">Food</MenuItem >
          <MenuItem  value="rent">Rent</MenuItem >
          <MenuItem  value="transport">Transport</MenuItem >
          <MenuItem  value="travel">Travel</MenuItem >
        </Select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ margin: '20px' }}
          name="date"
          value={input.date}
            onChange={date_} />
          </LocalizationProvider>

          <FormControl sx={{ m: 2, mr: '20px' }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Amount
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  $
                </InputAdornment>
              }
              name="amount"
              label="Amount"
              defaultValue="Amount"
              value={input.amount}
              onChange={text_}
            />
          </FormControl>
          <Button style={{margin:"20px",color:"black"}} onClick={add_}>Add Expense</Button>

          <Box sx={{ flexGrow: 1, }}>

            {label_.map((item)=>(
              <Grid container spacing={0} sx={{ m: '20px', background:"#662222" ,borderRadius:"19px", }}>
              <Grid size={8} sx={{ background: "" }} style={{textDecoration:item.iscompleta ? "line-through" : "none"}}>
                <div style={{padding:"5px"}}> 
                <p style={{margin:0}}>Expense Name: {item.name}</p>
                <p style={{margin:0}}>Amount: {item.amount}$</p>
                </div>
              </Grid>

              <Grid
                size={4}
                sx={{
                  display: 'flex',
                  paddingTop: '20px',
                  
                }}
              >
                <div style={{ marginLeft:10}}>
                  <DeleteIcon onClick={()=>delete_(item.id)} />
                </div>

                <div style={{ marginLeft: 10 }}>
                  <DoneIcon onClick={()=>isCom(item.id)}/>
                </div>
              </Grid>
            </Grid>
            ))}
            
          </Box>
 
         
        </div>
      </Container>
      </div>
    </>
  );
}
