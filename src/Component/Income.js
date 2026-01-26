// MUI
import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {  FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
//id
import { v4 as uuidv4 } from 'uuid';

// Date picker
import dayjs from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
//componenet
import Total from './Total';
import useIncomeForm from "../useCustom/useIncomeForm"


export default  function Income(){

const{text_,date_,add_,delete_,input,label}=useIncomeForm ()
return(
    <>
   
    
      <div style={{background:"#662222"}}> 
          <Container maxWidth="sm">
         
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background:"#842A3B"
              }}
            >
                <Total item={label}/>
                       

                    {label.map((item)=>( 
                  <Grid container spacing={3} sx={{ m: '20px', backgroundColor:"#662222" ,borderRadius:"19px", }}>
                  <Grid size={8} >
                    <div style={{padding:"5px"}}> 
                    <p style={{margin:0}}>date: {item.date ? dayjs(item.date).format("YYYY.MM.DD"):""}</p>
                    <p style={{margin:0}}>Amount:  {item.amount} $</p>
                    </div>
                  </Grid>
    
                  <Grid
                    size={4}
                    sx={{
                      display: 'flex',
                      paddingTop: '20px',}}>
                    <div style={{ marginLeft:10}}>
                      <DeleteIcon onClick={()=>delete_(item.id)} />
                    </div>
                    </Grid>
                  </Grid>))}
     
              <TextField
              required
              id="outlined-required"
              name="name" 
              label="Income List"
              style={{ margin: '20px' }}
              value={input.name}
              onChange={text_}
            />
    
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
              <Button style={{margin:"20px",color:"black"}} onClick={()=>add_()}>add</Button>
            </div>
          </Container>
        
     </div>
    </>
)
}