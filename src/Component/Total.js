import Grid from '@mui/material/Grid';
import { PieChart } from '@mui/x-charts/PieChart';
import { useContext_ } from '../useContext/UseContext';


export default  function Total(){
const {sum,exp}=useContext_();



    return(

        <>
 
        <div style={{ m: '20px', background:"#662222" ,borderRadius:"19px", margin:"3%" }}> 
          <Grid container spacing={0} >
            <Grid size={6} >
              <div style={{ marginBottom:"20px"}} >
                  <h2>Total Income:</h2> 
              <h4 style={{margin:0}}>Amount:  {sum} $</h4>
              </div>
            </Grid>
    
            <Grid
            size={6}>
              <div style={{ marginBottom:"20px"}}>
                  <h2>Total Expenses:</h2> 
              <h4 style={{margin:0}}>Amount:  {exp} $</h4>
              </div>
            </Grid>
          </Grid>
        </div>
        
        </>
    )
}