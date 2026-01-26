// MUI
import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Label_ from './PieChart';
import { useNavigate } from 'react-router-dom';
import { useContext_ } from '../useContext/UseContext';


export default function MainPage(){
  
  
  
const {sum,exp,result}=useContext_()
const navigae = useNavigate()
    


return(
        <>
        
         <div style={{background:"#662222"}}> 
          <Container maxWidth="sm">
            <div
              style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background:"#842A3B"
              }} >
              
              <h2>SmartBudget</h2>
               <Label_  sum={sum} 
                        exp={exp} 
                        result={result} />

            <Grid container spacing={3} sx={{ m: '20px', background:"#662222" ,borderRadius:"19px", }}>
              <Grid size={4} >
                  <div style={{padding:"5px"}}> 
                      <Button onClick={()=>navigae("/add")} style={{margin:"20px",color:"black"}}>Add Expense</Button>
                  </div>
                
              </Grid>
    
              <Grid
              size={4}
              >
                  <div style={{ padding:"5px"}}>
                    <Button  onClick={()=>navigae("/main")} style={{margin:"20px",color:"black"}}>Add  -Income</Button>
                    </div>
    
              </Grid>

               <Grid
              size={4}
              >
                  <div style={{ padding:"5px"}}>
                    <Button  onClick={()=>navigae("/filter")} style={{margin:"20px",color:"black"}}>Filter Expense</Button>
                    </div>
    
              </Grid>
            </Grid>
            </div>
          </Container>
        </div>
        
        </>
    )
}