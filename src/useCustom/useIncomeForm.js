import { useState } from "react"
import { useContext_ } from "../useContext/UseContext"
import { v4 as uuidv4 } from 'uuid';


const useIncomeForm = ()=>{
    
const {label,setLabel}=useContext_()

const [input,setInput]=useState({       
name:"",
date:null,
amount:"",

})

function text_(e){
  const {name,value}=e.target
  setInput({...input,[name]:value})

}

function date_(newDate){
  setInput({...input,date:newDate})

}

function add_(){

  if(!input.amount || !input.name)return;
  

  const newdata={
    ...input,
    id:uuidv4(),
    type:"income"
  }
  setLabel([...label,newdata]);

}


function delete_(id){

  const del=label.filter((t)=>
  t.id !==id

  )

  setLabel(del);
}

    return{
text_,date_,add_,input,label,delete_
    }
}
export default useIncomeForm